class Company {
  departments = {};

  addEmployee(name, salary, position, department) {
    const employee = { name, position, department };
    salary = Number(salary);

    if (salary < 0 || Object.values(employee).some((x) => !x)) {
      throw new Error('Invalid input!');
    }

    employee.salary = salary;

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = {};
      this.departments[department].allSalaries = 0;
      this.departments[department].avgSalary = 0;
    }

    this.departments[department][employee.name] = {
      salary: employee.salary,
      position: employee.position,
    };

    this.departments[department].allSalaries += employee.salary;
    this.departments[department].avgSalary =
      this.departments[department].allSalaries /
      (Object.values(this.departments[department]).length - 2);

    return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
  }

  bestDepartment() {
    let bestDepartment = Object.entries(this.departments).sort((a, b) => {
      return b[1].avgSalary - a[1].avgSalary;
    })[0];

    const bestDepartmentCopy = JSON.parse(JSON.stringify(bestDepartment));

    delete bestDepartmentCopy[1].avgSalary;
    delete bestDepartmentCopy[1].allSalaries;

    let workers = Object.entries(bestDepartmentCopy[1]).sort((a, b) => {
      if (a[1].salary != b[1].salary) {
        return b[1].salary - a[1].salary;
      }

      return a[0].localeCompare(b[0]);
    });

    let str = `Best Department is: ${
      bestDepartment[0]
    }\nAverage salary: ${bestDepartment[1].avgSalary.toFixed(2)}\n`;

    for (const worker of workers) {
      str += `${worker[0]} ${worker[1].salary} ${worker[1].position}\n`;
    }

    return str.slice(0, str.length - 1);
  }
}
// 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR\n'
// 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'

//departments {construction1:{employee1:{salary:number}, employee2:{salary:number}}, construction2...}

let c = new Company();

c.addEmployee('aStanimir', 2000, 'engineer', 'Construction');

c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');

c.addEmployee('Slavi', 500, 'dyer', 'Construction');

c.addEmployee('Stan', 2000, 'architect', 'Construction');

console.log(
  c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing')
);

c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');

c.addEmployee('Gosho', 1350, 'HR', 'Human resources');

console.log(c.bestDepartment());
console.log(c.bestDepartment());
