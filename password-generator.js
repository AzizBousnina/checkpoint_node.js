
const generatePassword = require('generate-password');
  const password = generatePassword.generate({
    length: 10,
    numbers: false,
    symbols: false
  });
  console.log(password);
