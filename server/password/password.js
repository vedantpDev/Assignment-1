const bcrypt = require("bcrypt");
const pass = "akashpatil";

const hash = bcrypt.hashSync(pass, 10);
console.log(hash);
// $2b$10$Zekecr7IA/qOV0tJr4cjrudMsNAf0SILnQX1D7juNfCcRsEw0YQ4y
