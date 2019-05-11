const test = require('ava');
const { lispStr } = require('./repl');

test('repl#lispStr', t => {
  const atom = '314.159265359';
  t.is(lispStr(atom), atom, 'atom representation is itself');
  const exp = ['begin', ['define', 'r', 10], ['*', 'pi', ['*', 'r', 'r']]];
  const line = '(begin (define r 10) (* pi (* r r)))';
  t.is(lispStr(exp), line, 'form with lists is represented');
});
