function adAstra(arr) {
  let str = arr[0];
  let regex =
    /([\|#])(?<itemName>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
  let data;
  let totalCalories = 0;
  let consoleArr = [];
  while ((data = regex.exec(str))) {
    const { itemName, date, calories } = data.groups;
    totalCalories += Number(calories);
    consoleArr.push(
      `Item: ${itemName}, Best before: ${date}, Nutrition: ${calories}`
    );
  }
  console.log(
    `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
  );
  console.log(consoleArr.join('\n'));
}

// adAstra([
//   '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
// ]);

adAstra([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);

// /(#(?<itemName1>\w+)#\d+\/\d+\/\d+#(?<calories1>\d+)#)|(\|(?<itemName>\w+)\|\d+\/\d+\/\d+\|(?<calories>\d+)\|)/gm;
