function fnLet() {
  {
    let x;

    console.log("x with let in block", x);
  }

  try {
    console.log("x with let out block", x);
  } catch (e) {
    console.log("error:", e.message);
  }
}

function fnConst() {
  {
    // нельзя объявить переменную через const без значения
    const x = undefined;

    console.log("x with const in block", x);
  }

  try {
    console.log("x with const out block", x);
  } catch (e) {
    console.log("error:", e.message);
  }
}

function fnVar() {
  {
    var x;

    console.log("x with var in block", x);
  }

  console.log("x with var out block", x);
}

fnLet(); //x доступно только в блоке, вне блока ReferenceError
fnConst(); //x доступно только в блоке, вне блока ReferenceError. Также нельзя объявить переменную без значения, иначе SyntaxError
fnVar(); //x доступно как в блоке, так и вне блока, но x не объявляется выше fnVar

try {
  console.log("global x", x);
} catch (e) {
  console.log("error:", e.message);
}
