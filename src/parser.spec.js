const test = require('ava');
const {
  tokenize,
  atom,
  readFromTokens,
  parse,
} = require('./parser');

test('parser#tokenize', t => {
  const line = '(begin (define r 10) (* pi (* r r)))';
  const tokens = ['(', 'begin', '(', 'define', 'r', '10', ')', '(', '*', 'pi',
    '(', '*', 'r', 'r', ')', ')', ')'];
  t.deepEqual(tokenize(line), tokens, 'tokenized line');
});

test('parser#atom', t => {
  t.is(atom(1), 1, 'Number becomes Number');
  t.is(atom('foo'), 'foo', 'String becomes Symbol');
});

test('parser#readFromTokens', t => {
  const tokens = ['(', 'begin', '(', 'define', 'r', '10', ')', '(', '*', 'pi',
    '(', '*', 'r', 'r', ')', ')', ')'];
  const tree = ['begin', ['define', 'r', 10], ['*', 'pi', ['*', 'r', 'r']]];
  t.deepEqual(readFromTokens(tokens), tree, 'built AST');
});

test('parser#parse', t => {
  const line = '(begin (define r 10) (* pi (* r r)))';
  const tree = ['begin', ['define', 'r', 10], ['*', 'pi', ['*', 'r', 'r']]];
  t.deepEqual(parse(line), tree, 'parsed program');
});
