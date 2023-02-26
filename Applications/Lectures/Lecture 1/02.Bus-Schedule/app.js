function solve() {
  const departBtn = document.getElementById('depart');
  const arriveBtn = document.getElementById('arrive');
  const infoBox = document.querySelector('#info span');
  let url = `http://localhost:3030/jsonstore/bus/schedule/depot`;

  function depart() {
    let promise = fetch(url);

    promise
      .then((result) => result.json())
      .then((result) => {
        infoBox.textContent = `Next stop ${result.name}`;
      })
      .catch((err) => {
        infoBox.textContent = 'Error';
        departBtn.disabled = false;
        arriveBtn.disabled = false;
      });

    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  function arrive() {
    let promise = fetch(url);

    promise
      .then((result) => result.json())
      .then((result) => {
        infoBox.textContent = `Arriving at ${result.name}`;
        url = `http://localhost:3030/jsonstore/bus/schedule/${result.next}`;
      })
      .catch((err) => {
        infoBox.textContent = 'Error';
        departBtn.disabled = false;
        arriveBtn.disabled = false;
      });

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
