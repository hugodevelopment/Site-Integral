
// Defina a expressão que você deseja integrar
const expressao = '1/x';
const exp = "3x + 1"

// Realize a integração
const nerdamer = require('./nerdamer/all');
const resultado = nerdamer.integrate(expressao, 'x');
const resultado1 = nerdamer.diff(exp, 'x');
// Exiba o resultado
console.log("resposta é: ", resultado.toString());
console.log("resposta é: ", resultado1.toString());

