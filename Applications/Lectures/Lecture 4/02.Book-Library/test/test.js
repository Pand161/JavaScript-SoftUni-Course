const { expect } = require('chai');
const { chromium } = require('playwright-chromium');

const options = {};
//const url = 'http://localhost:5500';
const url =
  'http://localhost:5500/Applications/Lectures/Lecture%204/02.Book-Library/';

const mockData = {
  'd953e5fb-a585-4d6b-92d3-ee90697398a0': {
    author: 'J.K.Rowling',
    title: "Harry Potter and the Philosopher's Stone",
  },
  'd953e5fb-a585-4d6b-92d3-ee90697398a1': {
    author: 'Svetlin Nakov',
    title: 'C# Fundamentals',
  },
};

describe('All Tests', function () {
  this.timeout(10000);
  let browser, page;

  before(async () => (browser = await chromium.launch(options)));

  after(async () => await browser.close());

  beforeEach(async () => (page = await browser.newPage()));

  afterEach(async () => page.close());

  it('load books', async () => {
    await page.route('**/jsonstore/collections/books', (route, request) => {
      route.fulfill({
        body: JSON.stringify(mockData),
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
    });
    await page.goto(url);

    await page.click('text=LOAD ALL BOOKS');
    await page.waitForSelector('text=Harry Potter');
    const rowData = await page.$$eval('tbody tr', (rows) =>
      rows.map((r) => r.textContent)
    );

    console.log(rowData);
    expect(rowData[0]).to.contains('Harry Potter');
    expect(rowData[0]).to.contains('Rowling');
    expect(rowData[1]).to.contains('Svetlin Nakov');
    expect(rowData[1]).to.contains('C# Fundamentals');
  });

  it('add book', async () => {
    await page.goto(url);

    await page.fill('input[name=title]', 'Book');
    await page.fill('input[name=author]', 'Author');

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.method() == 'POST'),
      page.click('text=Submit'),
    ]);

    const data = JSON.parse(request.postData());

    expect(data.title).to.equal('Book');
    expect(data.author).to.equal('Author');
  });
});
