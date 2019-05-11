const { globalEnv } = require('./env');

/**
 * @param {any} exp Scheme expression
 * @param {Object} env environment for evaluation
 */
const lispEval = (x, env = globalEnv) => {
  if (globalEnv['symbol?'](x)) {
    // variable reference
    return env[x];
  } else if (globalEnv['number?'](x)) {
    // constant number
    return x;
  } else if (x[0] === 'if') {
    // conditional
    const [ _, test, conseq, alt ] = x;
    const exp = lispEval(test, env) ? conseq : alt;
    return lispEval(exp, env);
  } else if (x[0] === 'define') {
    // definition
    const [ _, symbol, exp ] = x;
    env[symbol] = lispEval(exp, env);
  } else {
    // procedure call
    const proc = lispEval(x[0], env);
    const args = x.slice(1).map(arg => lispEval(arg, env));
    return proc(...args);
  }
};

module.exports = {
  lispEval,
};
