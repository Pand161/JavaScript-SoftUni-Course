function attachEventsListeners() {
  const div = Array.from(document.querySelectorAll('body main div'));

  div.forEach((el) => {
    const input = el.querySelector('input');
    const button = el.querySelectorAll('input')[1];

    button.addEventListener('click', (e) => {
      let text = '';
      let arr = Array.from(el.querySelectorAll('input'));
      for (let i = 0; i < 4; i++) {
        if (arr[i].value != '') {
          text = el.querySelector('label').textContent;
          break;
        }
      }
      let days = document.getElementById('days').value;
      let hours = document.getElementById('hours').value;
      switch (text) {
        case 'Days: ':
          console.log('day');
          document.getElementById('hours').value = Number(input.value) * 24;
          document.getElementById('minutes').value = Number(input.value) * 1440;
          document.getElementById('seconds').value =
            Number(input.value) * 86400;
          break;
        case 'Hours: ':
          console.log('hours');
          document.getElementById('days').value = Number(input.value) / 24;
          document.getElementById('minutes').value = Number(input.value) * 60;
          document.getElementById('seconds').value = Number(input.value) * 3600;
          break;
        case 'Minutes: ':
          console.log('minutes');
          document.getElementById('days').value = Number(input.value) / 1440;
          document.getElementById('hours').value = Number(input.value) / 60;
          document.getElementById('seconds').value = Number(input.value) * 60;
          break;
        case 'Seconds: ':
          console.log('seconds');
          document.getElementById('days').value = Number(input.value) / 86400;
          document.getElementById('hours').value = Number(input.value) / 3600;
          document.getElementById('minutes').value = Number(input.value) / 60;
          break;
        default:
      }

      text = '';
      // document.getElementById('day').value.toFixed(2);
      // document.getElementById('hours').value.toFixed(2);
      // document.getElementById('minutes').value.toFixed(2);
      // document.getElementById('seconds').value.toFixed(2);
    });
  });
}

//   const text = el.querySelector('label').textContent;
//   if (el.querySelector('label').textContent.includes('Days')) {
//     console.log('its a day');
//   }
//   switch (text) {
//     case 'Days: ':
//       console.log('day');
//       break;
//     case 'Hours: ':
//       break;
//     case 'Minutes: ':
//       break;
//       case 'Seconds: ':
//   }
