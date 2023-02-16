function companyUsers(arr) {
  const companies = {};

  for (const line of arr) {
    let [name, id] = line.split(' -> ');

    if (!companies.hasOwnProperty(name)) {
      companies[name] = [];
    }

    if (!companies[name].includes(id)) {
      companies[name].push(id);
    }
  }

  let sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const line of sortedCompanies) {
    console.log(line[0]);
    for (let i = 0; i < line[1].length; i++) {
      console.log(`-- ${line[1][i]}`);
    }
  }
}

companyUsers([
  'SoftUni -> BB12345',
  'SoftUni -> AA12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111',
]);
