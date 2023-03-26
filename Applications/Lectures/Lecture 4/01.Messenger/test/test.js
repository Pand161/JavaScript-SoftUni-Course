const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const options = { headless: false, slowMo: 200 };
const url =
  'http://127.0.0.1:5500/Applications/Lectures/Lecture%204/01.Messenger/index.html';

describe('Custom Test', function () {
  this.timeout(10000);

  it('Tests', async function () {
    const browser = await chromium.launch(options);
    const page = await browser.newPage();

    await page.goto(url);

    await page.fill('#author', 'Stefan');
    await page.fill('#content', 'ssss Az sum zmiq ssss');
    await page.click('text=Send');
    await page.click('text=Refresh');

    const content = await page.textContent('textarea');
    expect(content).to.equal('');
    await browser.close();
  });
});
