const readline = require('readline');
const { parse } = require('./parser');
const { lispEval } = require('./eval');

/**
 * @param {any} exp Scheme expression to stringify
 * @return {String} string representation of expression
 */
const lispStr = exp => Array.isArray(exp)
  ? `(${exp.map(lispStr).join(' ')})`
  : `${exp}`;

const repl = (prompt = 'lisp.js> ') => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt,
  });
  rl.prompt();
  rl.on('line', line => {
    const val = lispEval(parse(line));
    // explicit coersive null check (!= vs !==) to catch undefined
    if (val != null) console.log(lispStr(val));
    rl.prompt();
  });
};

module.exports = {
  lispStr,
  repl,
};
