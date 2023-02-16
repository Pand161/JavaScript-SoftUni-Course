function dictionary(arr) {
  const obj = {};

  for (const el of arr) {
    const [term, definition] = Object.entries(JSON.parse(el))[0];

    obj[term] = definition;
  }

  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  for (const key of sortedKeys) {
    console.log(`Term: ${key} => Definition: ${obj[key]}`);
  }

  // const arr2 = [];

  // for (let i = 0; i < arr.length; i++) {
  //   let changed = false;
  //   const [info] = Object.entries(JSON.parse(arr[i]));
  //   let name = info[0];
  //   let definition = info[1];

  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr2[j].name === name) {
  //       arr2[j].definition = definition;
  //       changed = true;
  //     }
  //   }
  //   if (!changed) {
  //     arr2.push({ name, definition });
  //   }
  // }

  // for (let i = 0; i < arr2.length; i++) {
  //   for (let j = i; j < arr2.length; j++) {
  //     if (arr2[i].name > arr2[j].name) {
  //       let lower = arr2[i];
  //       arr2[i] = arr2[j];
  //       arr2[j] = lower;
  //     }
  //   }
  // }

  // for (let i = 0; i < arr2.length; i++) {
  //   console.log(`Term: ${arr2[i].name} => Definition: ${arr2[i].definition}`);
  // }
}

dictionary([
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Coffee":"A hot drink made  from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Coffee":"A drink."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
