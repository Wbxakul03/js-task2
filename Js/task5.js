let str;
str = prompt("Введите номер карты");
let endOfNumber = str.slice(-4);
initialOfNumber = str.slice(0, -4);
asterisk = "*";
asteriskOfStartNumber = asterisk.repeat(initialOfNumber.length);
result = asteriskOfStartNumber + endOfNumber;
alert("Номер вашей карты: " + result);
