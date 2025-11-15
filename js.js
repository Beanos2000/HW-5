// 1. Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const selection =  prompt("Would you like Tea, Coffee, or Juice?").toLowerCase();

switch (selection) {
    case "tea":
        console.log("You selected Tea");
        break;
    case "coffee":
        console.log("You selected Coffee");
        break;
    case "juice":
        console.log("You selected Juice");
        break;
    default:
        console.log("Please select Tea, Coffee, or Juice");
}

// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const dayOfWeek = "sunday";

switch (dayOfWeek) {
    case "monday":
        console.log("Today is a workday");
        break
    case "tuesday":
        console.log("Today is a workday");
        break;
    case "wednesday":
        console.log("Today is a workday");
        break;
    case "thursday":
        console.log("Today is a workday");
        break;
    case "friday":
        console.log("Today is a workday");
        break;
    case "saturday":
        console.log("Today is a day off");
        break;
    case "sunday":
        console.log("Today is a day off");
        break;
}

// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
const month = 5;

// Convert to season
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Autumn";
    break;
}

console.log(season);

// 4. Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = "Green";

switch (color) {
    case "Green":
        console.log("GO");
        break;
    case "Yellow":
        console.log("WAIT");
        break;
    case "Red":
        console.log("STOP");
        break;
}

// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
const number1 = Number(prompt("Enter a number"));
const number2 = Number(prompt("Enter a second number"));
const sign = prompt("Enter a sign (*, +, -, /)");

let result;

switch(sign) {
    case "+":
        result = (number1 + number2);
        break;
    case "-":
        result = (number1 - number2);
        break;
    case "/":
        if (number2 === 0) {
            result = "Cant divide by 0"
        }
        else {
            result = (number1 / number2);
        }
        break;
    case "*":
        result = (number1 * number2);
        break;
    default:
        console.log("Enter a opertion sign (*, +, -, /)");  
}

console.log(result);