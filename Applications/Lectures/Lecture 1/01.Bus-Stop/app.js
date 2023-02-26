function getInfo() {
  const stopIdInput = document.getElementById('stopId');
  const stopName = document.getElementById('stopName');
  const buses = document.getElementById('buses');
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdInput.value}`;
  buses.innerHTML = ``;
  let promiseBuses = fetch(url);

  promiseBuses
    .then((result) => result.json())
    .then((result) => {
      stopName.textContent = result.name;
      Object.keys(result.buses).map((busId) => {
        let li = document.createElement('li');
        li.textContent = `Bus ${busId} arrives in ${result.buses[busId]} minutes`;
        buses.appendChild(li);
      });
    })
    .catch((err) => (stopName.textContent = 'Error'));
}
