// function sequentialTasks() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Первая задача завершена");
//         setTimeout(() => {
//           console.log("Вторая задача завершена");
//           resolve("Все задачи выполнены");
//         }, 2000);
//       }, 1000);
//     });
//   }
  
//   sequentialTasks().then(result => console.log(result));






//   function delayMessage(message, delay) {
//     setTimeout(() => {
//       console.log(message);
//     }, delay);
//   }
  
//   delayMessage("Сообщение с задержкой", 3000);