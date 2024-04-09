function executeWithDelay2s(fn) {
  setTimeout(fn, 2000);
}

function fn() {
  console.log("Привет с задержкой в 2 секунды!");
}

executeWithDelay2s(fn);
