/**
 * @param {String} str string to tokenize
 * @returns {String[]} array of tokens
 */
const tokenize = str => str.replace(/\(/g, ' ( ')
  .replace(/\)/g, ' ) ')
  .trim()
  .split(/\s+/);

/**
 * @param {String} token
 * @returns {Number|String} Scheme atom
 */
const atom = token => Number.isNaN(+token) ? `${token}` : +token;

/**
 * @param {String[]} tokens array of tokens
 * @returns {any} abstract syntax tree of expression
 */
const readFromTokens = tokens => {
  if (!tokens.length) throw Error('unexpected EOF');

  const token = tokens.shift();
  if (token === '(') {
    const list = [];
    while (tokens[0] !== ')') {
      list.push(readFromTokens(tokens));
    }
    tokens.shift() // shift off ')'
    return list;
  } else if (token === ')') {
    throw Error('unexpected )');
  } else {
    return atom(token);
  }
};

/**
 * @param {String} program string representation of Scheme expression
 * @returns {any} abstract syntax tree of expression
 */
const parse = program => readFromTokens(tokenize(program));

module.exports = {
  tokenize,
  atom,
  readFromTokens,
  parse,
};
