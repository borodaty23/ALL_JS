// try {
//   console.log("начало блока try");
//   lalala;
//   console.log("конец блока try (никогда не выполнится)");
// } catch (err) {
//   console.log(`Возникла ошибка!`, err);
// } finally {
//   console.log("сравбатывает всегда");
// }

// try {
//   lala;
// } catch (err) {
//   console.log(err.name); // понятное человеку сообщение
//   console.log(err.message); // строка с именем ошибки (имя конструктора ошибки)
//   console.log(err);
// }

//==============================================// промисс это объект для  обработки асинхронного кода

// setTimeout(()=>{
// console.log("aaaa")
// },1000)

// console.log("bbbb")

//======================================================== в  reject попадает ошибка и переносится в catch

// let promise = new Promise((resolve, reject) => { // в промис мы помещаем асинхр логику чтобы ее обрабатывать синхронно
//     setTimeout(() => {
//         resolve("done"); //в резолв воззвращается результат выполнения промиса
//     }, 1000);
// });

// // promise
// //   .then((result) => console.log("result ==>", result))
// //   .catch((error) => console.log("error", error))
// //   .finally((error) => console.log("finally"));

// let data;

// promise
//   .then((result) => {
//     data = result
//     console.log(data)
//   })
//   .catch((error) => console.log("error", error))
//   .finally((error) => console.log("finally"));

//========================================== // цепочка проммисов нужна что бы ждать результат выполнения первого запроса

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("text");
//     }, 1000);
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .then((result) => {
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("1");
//           resolve("data - result 2");
//         }, 3000);
//       }).then((data) => {
//         setTimeout(() => {
//           console.log("2");
//           console.log(data);
//         }, 1000);
//       });
//     })
//     .catch((error) => console.log("error ====>", error))
//     .finally(() => console.log("finally"));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2");
//   }, 2000);
// })
//   .then((result) => {
//     console.log(1);
//     return result;
//   })
//   .then((result) => {
//     console.log(result);
//     console.log(3);
//   })

//   .catch((error) => console.log("error ====>", error))
//   .finally(() => console.log("finally"));

//=================================

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2");
//   }, 2000);
// })
//   .then((result) => {
//     console.log(1);
//     console.log(result);
//     console.log(3);
//   })

//   .catch((error) => console.log("error ====>", error))
//   .finally(() => console.log("finally"));

//======================================== метод AlL

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).then((result) => console.log(result));

//=============================== // метод all ждет выполнения всех промисов и возвращает массив результатов

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//    new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка")), 2000)
//     ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 10000)),
// ]).catch((err) => console.log(err));

//================================================ // метод race ждет выполнения одного промиса

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then((result) => console.log(result));

//=================================================// промисификация это когда функция возвращает промис

// const getSumm = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (!Number(a) && a !== 0) {
//       reject("!!! ERROR type");
//     } else {
//       resolve(a + b);
//     }
//   })
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
// };
// getSumm("q", 6);

//================================ async дает понять что функция асинхронная await ждет выполнения промисса

// let promise = new Promise((resolve, reject) => {
//   // функция-исполнитель (executor)
// Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.
// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).
// });

// const func = async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово"), 1000);
//   });

//   const result = await promise;
//   console.log(result);
// };

// func();

//=============================== async дает понять что функция асинхронная await ждет выполнения промисса

// const func = async () => {
//   console.log("1");

//   let result = await (
//     await fetch("https://jsonplaceholder.typicode.com/todos/")
//   ).json();
//   console.log(result);

//   console.log("3");
// };

// func();

//==================================== AJAX для сетевых запросов на сервер

// fetch  позволяет отслеживать процесс получения данных, не отслеживает процесс получения данных (сколько пришло и ушло), что бы это отслеживать используется XMLHttpRequest

// fetch(url, [optiions])
//  options - метод, заголовки и т д

// const func = async () => {
//   console.log("1");

//   let result = await (   // второй await отвечает за то что бы работал .json() это асинхронный метод
//     await fetch("https://jsonplaceholder.typicode.com/todos/")
//   ).json();
//   console.log(result);

//   console.log("3");
// };

// func();

// CORS - ограничивает тех кто может отправлять запросы на серввер

// let url = new URL("https://jsonplaceholder.typicode.com/posts?userId=1");
// console.log(url);

// const draw = (result) => {
//   let wrapper = document.querySelector(".wrapper");

//   result.forEach((el, i) => {
//     wrapper.innerHTML += `
//     <div><span>${el.name}</span>, <span>${el.username}</span>, <span>${el.email}</span>, <span>${el.address.street}</span>, <span>${el.phone}</span></div>
//     `;
//   });
// };

// const func = async () => {
//   let result = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   console.log(result);

//   draw(result);
// };

// func();

const func = async () => {
  let wrapper = document.querySelector(".wrapper");
  let bigWrap = document.querySelector(".bigWrap");
  let result = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  console.log(result);

  let x = result.length / 10;
  for (i = 1; i <= x; i++) {
    wrapper.innerHTML += `
    <button id="${i}">but ${i}</button>
    `;
  }

  wrapper.addEventListener("click", (event) => {
    let z = event.target.id;
    console.log(z);

    let drawArr = result.filter((el, i) => {
      if (i >= z * 10 - 10 && i <= z * 10 - 1) {
        return el;
      }
    });
    bigWrap.innerHTML = "";
    drawArr.forEach((el, i) => {
      bigWrap.innerHTML += `
        <div><span>${el.id}</span>, <span>${el.title}</span></div>
        `;
    });

    console.log(drawArr);
  });
};

func();
