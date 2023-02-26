function attachEvents() {
  const getWeatherBtn = document.getElementById('submit');

  getWeatherBtn.addEventListener('click', () => {
    const forecast = document.getElementById('forecast');
    const currentConditions = document.getElementById('current');
    const upcomingConditions = document.getElementById('upcoming');
    const location = document.getElementById('location');

    if (location.value == '') {
      return;
    }

    const symbolObject = {
      Sunny: '☀',
      'Partly sunny': '⛅',
      Overcast: '☁',
      Rain: '☂',
    };

    forecast.style.display = 'block';

    let code = '';
    let name = location.value;

    let locationPromise = fetch(
      `http://localhost:3030/jsonstore/forecaster/locations`
    );

    locationPromise
      .then((result) => result.json())
      .then((result) => {
        result.map((el) => {
          if (el.name == name) {
            code = el.code;
          }
        });
        if (code == '') {
          forecast.textContent = 'Error';
        }
      })
      .catch((err) => (forecast.textContent = 'Error'));

    let currentConditionsPromise = fetch(
      `http://localhost:3030/jsonstore/forecaster/today/${code}`
    );

    currentConditionsPromise
      .then((result) => result.json())
      .then((result) => {
        let locationSpan = document.createElement('span');
        let degreesSpan = document.createElement('span');
        let weatherSpan = document.createElement('span');
        let conditionSpan = document.createElement('span');
        let conditionSymbolSpan = document.createElement('span');
        let forecastsDiv = document.createElement('div');

        locationSpan.classList.add('forecast-data');
        degreesSpan.classList.add('forecast-data');
        weatherSpan.classList.add('forecast-data');
        conditionSpan.classList.add('condition');
        conditionSymbolSpan.classList.add('condition', 'symbol');
        forecastsDiv.classList.add('forecasts');

        locationSpan.textContent = result[code].name;
        degreesSpan.textContent = `${result[code].forecast.low}°/${result[code].forecast.high}°`;
        weatherSpan.textContent = result[code].forecast.condition;
        conditionSymbolSpan.textContent =
          symbolObject[result[code].forecast.condition];

        conditionSpan.appendChild(locationSpan);
        conditionSpan.appendChild(degreesSpan);
        conditionSpan.appendChild(weatherSpan);

        forecastsDiv.appendChild(conditionSymbolSpan);
        forecastsDiv.appendChild(conditionSpan);

        currentConditions.appendChild(forecastsDiv);
      })
      .catch((err) => (forecast.textContent = 'Error'));

    let upcomingConditionsPromise = fetch(
      `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
    );

    upcomingConditionsPromise
      .then((result) => result.json())
      .then((result) => {
        let forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-info');

        Object.values(result[code].forecast).map((el) => {
          let symbolSpan = document.createElement('span');
          let degreesSpan = document.createElement('span');
          let weatherSpan = document.createElement('span');
          let upcomingSpan = document.createElement('span');

          degreesSpan.classList.add('forecast-data');
          weatherSpan.classList.add('forecast-data');
          symbolSpan.classList.add('symbol');
          upcomingSpan.classList.add('upcoming');

          symbolSpan.textContent = symbolObject[el.condition];
          weatherSpan.textContent = el.condition;
          degreesSpan.textContent = `${el.low}°/${el.high}°`;

          upcomingSpan.appendChild(symbolSpan);
          upcomingSpan.appendChild(degreesSpan);
          upcomingSpan.appendChild(weatherSpan);

          forecastDiv.appendChild(upcomingSpan);
        });

        upcomingConditions.appendChild(forecastDiv);
      })
      .catch((err) => (forecast.textContent = 'Error'));
  });
}

attachEvents();
