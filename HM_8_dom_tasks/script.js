// const wrapperHM = document.querySelector(".home-work");
// const titleHM = document.querySelector(".home-work__title");
// console.log(wrapperHM, titleHM);

// const arr = [];
// arr.push(wrapperHM, titleHM);
// console.log(arr);

// const form = document.querySelector(".home-work__from");
// const input = document.querySelector(".home-work__input");
// const button = document.querySelector(".home-work__button");
// const inputContentInModal = document.querySelector(".home-work__input-content");
// const wrapForModal = document.querySelector(
//   ".home-work__modal-wrapper-for-display"
// );
// const openModal = document.querySelector(".home-work__open-modal");
// const clouseOpenModal = document.querySelector(".home-work__clouse-modal");
// const inputValue = document.querySelector(".home-work__input-value");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(input.value);
//   inputValue.innerHTML += `
//     <p>${input.value}</p>
//     `;
//   inputContentInModal.textContent = input.value;

//   form.reset();
// });

// openModal.addEventListener("click", (event) => {
//   wrapForModal.style.display = "block";
// });

// clouseOpenModal.addEventListener("click", (event) => {
//   wrapForModal.style.display = "none";
// });

//5. Сложите переменные так, чтобы в результате получилось выражение: "12 белых медведей".

// (a = 1), (b = 2), (c = " белых медведей");

// console.log(String(a) + b + c);

// 6. Дана строка. Сделайте заглавным первый символ каждого слова этой строки.

// const str = "cat dog fish";
// const strMass = str.split("");
// let newStr = strMass
//   .map((el, i, arr) => {
//     if (el === " ") {
//       arr[i + 1] = arr[i + 1].toLocaleUpperCase();
//       return " ";
//     }
//     return el;
//   })
//   .join("");

// console.log(newStr);

// 7. Написать функцию, которая принимает параметрами два массива и сливает их в объект так, что элементы первого массива становятся ключами, а второго - значениями.

// const arrOne = [1, 2, 3, 4];
// const arrTwo = ["Jeka", "Ilya", "Lexa", "Dron"];

// let returnObj = (arrOne, arrTwo) => {
//   let obj = {};
//   arrOne.forEach((el, i, arr) => {
//     obj[el] = arrTwo[i];
//   });

//   return obj;
// };

// returnObj(arrOne, arrTwo);

// 8. Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9]. Сделайте функцию, которая будет разбивать его в двухмерный массив. Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const splitArray = (arr, numb) => {
//   newArray = [];
//   for (let i = 0; i < arr.length; i + 3) {
//     newArray.push(arr.splice(i, numb));
//   }
//   return newArray;
// };

// splitArray(arr, 3);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const splitArray = (arr, numb) => {
//   newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       newArray.push(arr.slice(i, numb));
//     } else{
//       newArray.push(arr.slice(i + 2, i + 2 + numb));
//     }
//     debugger;
//   }
//   return newArray;
// };

// splitArray(arr, 3);

// 9.  var numbers = [10, 25, 100];
// Hа выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135) Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.

// const numbers = [10, 25, 100];

// const sumNumbers = (numbers) => {
//   let sum = 0;
//   numbers.forEach((el) => {
//     sum += el;
//   });
//   return sum;
// };

// 10. Фильтр юзеров Создать массив объектов для юзеров. Прим.

// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

// const users = [
//   { name: "Ivan", age: 18 },
//   { name: "Petr", age: 12 },
//   { name: "Sidor", age: 25 },
// ];

// const filterUsers = (users) => {
//   let adults = [];
//   let minors = [];
//   users.forEach((el) => {
//     if (el.age >= 18) {
//       adults.push(el);
//     } else {
//       minors.push(el);
//     }
//   });
//   return {adults};
// };
// filterUsers(users);

// 11. Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.

// const str = "Привет";
// const num = 123;
// const flag = true;
// const txt = "true";

// const typeСheck = (variable) => {
//   return console.log(typeof variable);
// };

// 12. Даны размер кредита — 1 тыс.бел.руб,
// процентная ставка — 10%,
// количество лет — 5.
// Найти переплату по кредиту.

// function getSumOverpayment(credit, procentYears, ears){
//     let overpaymentSum = 0;

//     for (i = 0; i <= ears; i++){
//      newSumCredit = credit - (credit / ears) * i;

//      overpaymentSum = overpaymentSum + newSumCredit * getProcentToCount(procentYears);
//     }
//     return overpaymentSum
//     }

//     function getProcentToCount (procent){
//         return procent / 100}

//      getSumOverpayment(10000, 10, 5)

// 13. Напишите скрипт, который считает количество секунд в неделе и показывает это количество в модальном окне.
// Сообщение в модальном окне должно быть таким: 'Сегодня (здесь вставить день выполнения задания) и узнал что колиство секунд одной неделе составляет (высчитанное количество)''

// const giveDate = () => {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, "0");
//   var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//   var yyyy = today.getFullYear();
//   today = mm + "/" + dd + "/" + yyyy;
//   return today;
// };

// const giveSecondsInDay = () => {
//   const secInMin = 60;
//   const minInHour = 60;
//   const hourInDay = 24;
//   const dayInWeek = 7;
//   const secondsInWeek = secInMin * minInHour * hourInDay * dayInWeek;
//   return secondsInWeek;
// };

// const showMessage = (date, time) => {
//   const secondsInDay = time;
//   const DateNow = date;
//   alert(
//     `Сегодня ${DateNow} я узнал что колиство секунд в одной неделе составляет ${secondsInDay}`
//   );
// };

// showMessage(giveDate(), giveSecondsInDay());

// 14. Создайте переменные a=10, b=2 и c=5. Выведите на экран и в консоль их сумму.

// const a = 10;
// const b = 2;
// const c = 5;
// const sum = a + b + c;
// console.log(sum);
// alert(sum);

// 15.
// Создайте переменную age и присвойте ей ваш возраст.
// Выведите на экран 'Мне %Возраст% лет!'

// const giveMyAge = (myAge) => {
//   const age = myAge;
//   return alert(`Мне ${age} года`);
// };
// giveMyAge(23);

// 16. Создайте 5 чисел и найдите наибольшее при помощи условий

// const a = 2;
// const b = 3;
// const c = 4;
// const d = 5;
// const e = 6;

// const arr = [];
// arr.push(a, b, c, d, e);
// let numb = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (numb < arr[i]) {
//     numb = arr[i];

//   }
// }

// 17;Создать объект пользователя интернет магазина,
// объект должен содержать следущие поля: имя, email, нравятся ли ему фрукты, показатель IQ.
// Созданный объект вывести в консоли.

// const createObj = (userName, userEmail, userLikeFruits, userIQ) => {
//   const usersData = {
//     name: userName,
//     email: userEmail,
//     likeFruits: userLikeFruits,
//     IQ: userIQ,
//   };
//   return console.log(usersData);
// };
// createObj("Ilya", "vipilia@mail.ru", true, 130);

// 18.Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
// И вывести в консоли, результат будет выглядеть примерно так:
// 0 это четное
// 1 это нечетное

// for (let i = 0; i < 15; i++) {
//   switch (true) {
//     case i === 0:
//       console.log(`${i} это нечетное`);
//       break;
//     case i % 2 === 0:
//       console.log(`${i} это четное`);
//       break;
//     case i % 2 !== 0:
//       console.log(`${i} это нечетное`);
//       break;
//     default:
//       break;
//   }
// }

// for (let i = 0; i < 15; i++) {
//   if (i === 0) {
//     console.log(`${i} это нечетное`);
//   } else if (i % 2 === 0) {
//     console.log(`${i} это четное`);
//   } else {
//     i % 2 !== 0;
//     console.log(`${i} это нечетное`);
//   }
// }

// 19. У нас есть студентов: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест

// и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.
// Оценки рассчитываются следующим образом:
// если процент > 90 - 5
// если процент > 80 - 4
// если процент > 70 - 3
// если процент > 60 - 2
// Ответ вывести следующим образом:
//   Вася - 2,
//   Зина - 3
//    ...

// const testsResul = { Вася: 80, Зина: 77, Катя: 88, Петя: 95, Вова: 57 };
// for (let key in testsResul) {
//   switch (true) {
//     case testsResul[key] > 90:
//       console.log(`${key} - 5`);
//       break;
//     case testsResul[key] > 80:
//       console.log(`${key} - 4`);
//       break;
//     case testsResul[key] > 70:
//       console.log(`${key} - 3`);
//       break;
//     case testsResul[key] > 60:
//       console.log(`${key} - 2`);
//       break;
//     default:
//       console.log(`${key} - лох`);
//       break;
//   }
// }

// 20. Написать цикл, который будет итерироватся от 1 до 100.
// На каждой итерации цикла нужно проверить:
// если число кратное 3 - то вывести в консоль строку Fizz,
// если число кратное 5 - то вывести в консоль строку Buzz,
// если число кратное и 3 и 5 - то вывести FizzBuzz

// for (let i = 0; i < 100; i++) {
//   switch (true) {
//     case i % 5 === 0 && i % 3 === 0:
//       console.log(i, "FizzBuzzz");
//       break;
//     case i % 5 === 0:
//       console.log(i, "Buzz");
//       break;
//     case i % 3 === 0:
//       console.log(i, "Fizz");
//       break;
//     default:
//       break;
//   }
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i, "FizzBuzzz");
//   } else if (i % 5 === 0) {
//     console.log(i, "Buzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "Fizz");
//   }
// }

// 21 Создайте массив из 5 любых элементов.
// Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
// Склонированный массив вывести в консоль

// const arr = [2, 3, 4, 5, 6];
// const cloneArr = (arr) => {
//   let newArr = [];
//   newArr = arr.slice();
//   return newArr;
// };

// cloneArr(arr);

// const arr = [2, 3, 4, 5, 6];
// const cloneArr = (arr) => {
//   let newArr = [];
//   arr.forEach((el) => {
//     newArr.push(el);
//   });
//   return newArr;
// };
// cloneArr(arr);

// 22.написать ф-цию, которая принимает в качестве параметра массив чисел, фильтрует его и возвращает массив нечетных чисел [1, 2, 3] -> [1, 3]
// написать ф-цию, которая принимает в качестве параметра массив чисел и возвращает массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16]
// написать функцию, которая в качестве параметра принимает массив с разными типами данных. возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет

// const arr = [2, 3, 4, 5, 6];
// const filterOutEven = (arr) => {
//   const newaArr = arr.filter((el) => el % 2 !== 0);
//   return newaArr
// };
// filterOutEven(arr)

// const arr = [2, 3, 4, 5, 6];
// const madeSquareArr = (arr) => {
//   const newaArr = arr.map((el) => el ** 2);
//   return newaArr;
// };
// madeSquareArr(arr);

// const arr = [2, true, "lal", 5, 6];
// const checkForString = (arr) => {
//   let chek = 0;
//   arr.forEach((el) => {
//     if (typeof el === "string") {
//       chek = el;
//     }
//   });
//   chek === "string" ? console.log(true) : console.log(false);
// };

// 23. Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// и возвращает массив значений лежащих в поле age
// function getAges(array) {}

// getAges([
//     { name: 'Sergey', age: 33 },
//     { name: 'Daria', age: 33 },
// ]); // => [33, 33]

// const arr = [
//   { name: "Sergey", age: 33 },
//   { name: "Daria", age: 33 },
// ];

// const getAges = (arr) => {
//   let ageArr = [];
//   arr.forEach((el) => {
//     ageArr.push(el.age);
//   });
//   return ageArr;
// };
// getAges(arr);

// 24. Написать ф-цию, которая принимает объект и меняет местами ключи и значения
// function convertObject(obj) {}

// convertObject({ a: 'b', c: 'd' }); // => { b: 'a', d: 'c' }

// let obj = { a: "b", c: "d" };

// const convertObject = (obj) => {
//   let convertObj = {};
//   for (let key in obj) {
//     convertObj[obj[key]] = key;
//   }
//   return convertObj;
// };
// convertObject(obj);

// 25. Написать ф-цию, которая принимает объект, где в качестве значений - числа
// Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false
// function isEvenValue(obj) {}

// isEvenValue({ x: 1, y: 2 }); // => true
// isEvenValue({ x: 1, y: 1 }); // => false

//НЕ РАБОТАЕТ!
// const newObj = { x: 1, y: 1, z: 3, e: 3 };

// const isEvenValue = (obj) => {
//   let result = 0;
//   for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//       console.log(true);
//       break;
//     } else {
//       result *= obj[key];
//     }
//   }
//   if (result % 2 !== 0) {
//    console.log(false);
//   }
// };
// isEvenValue(newObj);

// const newObj = { x: 1, y: 1, z: 3, e: 3 };
// const isEvenValue = (obj) => {
//   let flag = false;
//   for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// };
// isEvenValue(obj);

// 26. Написать ф-цию, которая принимает массив объектов.
// Значения этих объектов - числа. Вернуть объект с суммами ключей
// function calculate(array) {}

// calculate([
//     { x: 1, z: 2, y: 3 },
//     { x: 10, z: 21, y: 4 },
//     { x: 2, z: 3, y: 4 },
//     { a: 1, b: 2 },
// ]);
// => { x: 13, z: 26, y: 11, a: 1, b: 2 }

// const arrOne = [
//   { x: 1, z: 2, y: 3 },
//   { x: 10, z: 21, y: 4 },
//   { x: 2, z: 3, y: 4 },
//   { a: 1, b: 2 },
// ];
// const calculate = (arr) => {
//   let newObj = {};

//   arr.forEach((el) => {
//     for (let key in el) {
//       newObj[key] = 0;

//     }
//   });
//   let objectsSumm = Object.assign({}, newObj);
//   arr.forEach((el) => {
//     for (let key in el) {
//       objectsSumm [key] = objectsSumm [key] + el[key];
//     }
//   });
//   return objectsSumm ;
// };
// calculate(arrOne);

// 27.Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
// Напишите код, который уберет эти дубликаты из созданного массива.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 2, 3, 3, 4, 4, 5, 6];
// const filtArr = arr.filter((el, i) => arr.indexOf(el) === i);

// 28.Создайте 2 массива с разной длинной.
// Необходимо написать код,который создаёт массив элементов представляющих собой сумму
// соответствующих элементов заданных массивов.

// const arrOne = [1, 2, 3, 4, 5];
// const arrTwo = [3, 4, 5];
// const mergedArr = arrOne.concat(arrTwo);
// let sumArs = 0;
// mergedArr.forEach((el, i) => {
//   sumArs +=el;
// });

// 29.Написать код, который заменит регистр каждого символа на противоположный.
// Например 'Hello world' -> 'hELLO WORLD'

// let str = "Hello world";
// const strInArr = str.split("");

// let newArr = strInArr.map((el, i) => {
//   if (el === el.toLowerCase()) {
//     return el.toUpperCase();
//   } else return el.toLowerCase();
// });

// // 30.Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
// const arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 13, 43, 44, 4, 4, 4, 44,
// ];

// let arrsSum = arr.reduce((acc, el) =>{
// return acc + el
// }, 0)

// arrsSum

// 31. Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
// Например:
//     [1,2,3] -> [1,4,9].

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrsSquer = arr.map((el) => el ** 2);
// arrsSquer

// 32. Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
// Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою сортировку.
// var arr = [10, 0, 7, 6, 3, 2];

// let arr = [10, 0, 7, 6, 3, 2];

const sortArr = (arr, flag) => {
  if (flag) {
    arr.sort((a, b) => {
      return a - b;
    });
  } else {
    arr.sort((a, b) => {
      return b - a;
    });
  }
};

//     //РАЗОБРАТЬСЯЯ!!!!!!!!

//     let arr = [10, 0, 7, 6, 3, 2];
//     let arr = [10, 0, 7, 6, 3, 2];
//     for (var i = 1; i < arr.length; i++)
//         for (var j = 0; j < arr.length- 1; j++)
//             if (arr[i] < arr[j]) {
//               var x = arr[i];
//               arr[i] = arr[j];
//               arr[j] = x;
//             }

//     console.log(arr);

// // 33. Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
// // одинаковые у них элементы или нет.

//НЕ ПОЛУЧИЛОСЬ

// const arrOne = [1, 2, 3];
// const arrTwo = [1, 2, 3];

// 34. Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
// Для 2021 это будет 5.
// const calculateNub = (numb = 2021) => {
//   let numbToString = numb.toString();
//   let sumNumbs = 0;

//   let numbsOnArr = numbToString.split("");
//   numbsOnArr.forEach((element) => {
//     sumNumbs += +element;
//   });
//   return sumNumbs;
// };
// calculateNub()

// 35. Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
// 'Республика беларусь' -> 'РБ'
// 'Минск' -> 'М

// const madeAbbreviation = (phrase) => {
//   const phraseOnArr = phrase.split(" ");
//   let newArr = phraseOnArr
//     .map((el, i, arr) => {
//       if (arr[0]) {
//         return el[0].toUpperCase();
//       } else {
//         return el[0].toUpperCase();
//       }
//     })
//     .join("");
//   return newArr;
// };
