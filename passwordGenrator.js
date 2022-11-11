const genere = require('generate-password')

 const password = genere.generate({
	length: 6,
	numbers: true,
    uppercase: false,
    symbols: false
});

console.log(password)