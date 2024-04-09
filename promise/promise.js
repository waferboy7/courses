function seriesAsyncTasks(tasks) {
  return tasks.reduce((promises, currentTask) => {
    return promises.then(() => {
      return currentTask().catch((e) => {
        console.error("Произошла ошибка в асинхронной задаче:", e.message);
      });
    });
  }, Promise.resolve());
}

function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная задача 1 выполнена");
      resolve();
    }, 300);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная задача 2 выполнена");
      resolve();
    }, 400);
  });
}

function asyncTask4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Асинхронная задача с ошибкой выполнена");
      reject(new Error("Произошла ошибка в задаче"));
    }, 250);
  });
}

function asyncTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная задача 3 выполнена");
      resolve();
    }, 100);
  });
}

seriesAsyncTasks([asyncTask1, asyncTask2, asyncTask4, asyncTask3])
  .then(() => {
    console.log("Все задачи выполнены");
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
