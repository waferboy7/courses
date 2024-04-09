function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Не целое число");
  }
}

try {
  validateInteger(5.1);
} catch (e) {
  console.error('error:', e.message);
}

try {
    validateInteger(7);
  } catch (e) {
    console.error('error:', e.message);
  }
  