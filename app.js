function attachEvents() {
  let locationInput = document.getElementById('location');
  let submitInput = document.getElementById('submit');
  let forecastDiv = document.getElementById('forecast');
  let currentForecast = document.getElementById('current');
  let upcomingForecast = document.getElementById('upcoming');
  const baseUrl = 'http://localhost:3030/jsonstore/forecaster/';

  submitInput.addEventListener('click', async () => {
    try {
      // Fetching data
      const locationsResponse = await fetch(`${baseUrl}locations`);

      // Check for error
      if (locationsResponse.status !== 200) {
        throw new Error('Invalid request');
      }

      // Get data
      let locationsData = await locationsResponse.json();

      // Check for error
      if (!Array.isArray(locationsData)) {
        throw new Error('Invalid data');
      }

      // Find the location
      let location = locationsData.find((x) => x.name === locationInput.value);

      forecastDiv.querySelector('div#current > div.label').textContent =
        'Current conditions';
      forecastDiv.querySelector('div#upcoming > div.label').textContent =
        'Three-day forecast';

      // Remove last forecast info
      Array.from(currentForecast.childNodes)
        .filter((x) => x.tagName === 'SPAN')
        .map((x) => x.remove());

      // Remove last forecast info
      Array.from(upcomingForecast.querySelectorAll('div.forecast-info')).map(
        (x) => x.remove()
      );

      // Fetch data
      let currentConditionsResponse = await fetch(
        `${baseUrl}today/${location.code}`
      );

      // Check for error
      if (currentConditionsResponse.status !== 200) {
        throw new Error('Invalid request');
      }

      // Get data
      let currentConditionsData = await currentConditionsResponse.json();

      // Fetch data
      let daysAheadResponse = await fetch(
        `${baseUrl}upcoming/${location.code}`
      );

      // Check for error
      if (daysAheadResponse.status !== 200) {
        throw new Error('Invalid request');
      }

      // Get data
      let daysAheadData = await daysAheadResponse.json();

      // Forecast start
      let forecastsDiv = document.createElement('div');
      forecastsDiv.classList.add('forecasts');

      let symbolSpan = document.createElement('span');
      symbolSpan.textContent = getForecastSymbol(
        currentConditionsData.forecast.condition
      );
      symbolSpan.classList.add('condition', 'symbol');

      let conditionSpan = document.createElement('span');
      conditionSpan.classList.add('condition');

      let nameSpan = document.createElement('span');
      nameSpan.classList.add('forecast-data');
      nameSpan.textContent = location.name;

      let degreesSpan = document.createElement('span');
      degreesSpan.classList.add('forecast-data');
      degreesSpan.textContent = `${
        currentConditionsData.forecast.low
      }${getForecastSymbol('Degrees')}/${
        currentConditionsData.forecast.high
      }${getForecastSymbol('Degrees')}`;

      let weatherSpan = document.createElement('span');
      weatherSpan.classList.add('forecast-data');
      weatherSpan.textContent = currentConditionsData.forecast.condition;

      // Append forecast child elements
      conditionSpan.appendChild(nameSpan);
      conditionSpan.appendChild(degreesSpan);
      conditionSpan.appendChild(weatherSpan);

      currentForecast.appendChild(symbolSpan);
      currentForecast.appendChild(conditionSpan);

      // Upcoming forecast start
      let foreCastInfoDiv = document.createElement('div');
      foreCastInfoDiv.classList.add('forecast-info');

      for (let obj of daysAheadData.forecast) {
        let upcomingSpan = document.createElement('span');
        upcomingSpan.classList.add('upcoming');

        let symbolSpan = document.createElement('span');
        symbolSpan.classList.add('symbol');
        symbolSpan.textContent = getForecastSymbol(obj.condition);

        let degreesSpan2 = document.createElement('span');
        degreesSpan2.classList.add('forecast-data');
        degreesSpan2.textContent = `${obj.low}${getForecastSymbol('Degrees')}/${
          obj.high
        }${getForecastSymbol('Degrees')}`;

        let weatherSpan2 = document.createElement('span');
        weatherSpan2.classList.add('forecast-data');
        weatherSpan2.textContent = obj.condition;

        // Append upcoming forecast child elements
        upcomingSpan.appendChild(symbolSpan);
        upcomingSpan.appendChild(degreesSpan2);
        upcomingSpan.appendChild(weatherSpan2);

        foreCastInfoDiv.appendChild(upcomingSpan);
      }

      // Append every upcoming forecast to parent
      upcomingForecast.appendChild(foreCastInfoDiv);
      forecastDiv.style.display = 'block';
    } catch (e) {
      onError();
      return;
    }
  });

  function getForecastSymbol(text) {
    switch (text) {
      case 'Sunny':
        return '☀';
      case 'Partly sunny':
        return '⛅';
      case 'Overcast':
        return '☁';
      case 'Rain':
        return '☂';
      case 'Degrees':
        return '°';
    }
  }

  function onError() {
    Array.from(forecastDiv.querySelectorAll('div.label')).forEach(
      (x) => (x.textContent = 'Error')
    );
    forecastDiv.style.display = 'block';
  }
}

attachEvents();
