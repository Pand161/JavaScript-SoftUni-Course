function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);
  const textAreaRef = document.querySelector('textarea');
  const bestRestaurantRef = document.querySelector('#bestRestaurant p');
  const restaurantWorkersRef = document.querySelector('#workers p');

  function onClick() {
    const arr = JSON.parse(textAreaRef.value);
    let obj = {};
    let bestAverage = 0;
    let bestRestaurant = '';

    for (let i = 0; i < arr.length; i++) {
      let [workName, info] = arr[i].split(' - ');
      let workers = info.split(', ');

      if (!obj.hasOwnProperty([workName])) {
        obj[workName] = [];
      }

      for (let j = 0; j < workers.length; j++) {
        let [worker, pay] = workers[j].split(' ');
        obj[workName].push({ worker: worker, salary: Number(pay) });
      }
    }

    for (const el in obj) {
      let average = 0;
      for (let i = 0; i < obj[el].length; i++) {
        average += Number(obj[el][i].salary);
        console.log(average);
      }

      average /= obj[el].length;

      if (average > bestAverage) {
        bestAverage = average;
        bestRestaurant = el;
      }
    }

    const bestWorkers = obj[bestRestaurant].sort((a, b) => b.salary - a.salary);
    console.log(obj[bestRestaurant]);

    bestRestaurantRef.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverage.toFixed(
      2
    )} Best Salary: ${obj[bestRestaurant][0].salary.toFixed(2)}`;

    for (let i = 0; i < obj[bestRestaurant].length; i++) {
      restaurantWorkersRef.textContent += `Name: ${obj[bestRestaurant][i].worker} With Salary: ${obj[bestRestaurant][i].salary} `;
    }
  }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660", "PizzaHut - Gosho 700, Stefan 100, Clark 600"]
