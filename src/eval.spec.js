const test = require('ava');
const { lispEval } = require('./eval');

test('eval#lispEval', t => {
  const exp = ['begin', ['define', 'r', 10], ['*', 'pi', ['*', 'r', 'r']]];
  t.is(lispEval(exp), 314.1592653589793, 'evaluated the expression');
});
