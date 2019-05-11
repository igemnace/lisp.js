# lisp.js

This is a Lisp interpreter written in JavaScript, in the same vein as [Peter
Norvig's lis.py][lis.py].

## Rationale

Peter Norvig has an [excellent article on implementing a Lisp Interpreter in
Python][lis.py-blog]. As an exercise in learning to write interpreters myself,
I've followed the article while implementing it on my own in JavaScript.

Reading the article is great enough on its own (I urge anyone who hasn't read it
to follow the link and do so!), but actually implementing an interpreter is a
different thing. Even if it's by following a guide, and it may feel like simply
going through the motions (you can definitely be aware of the concepts just by
reading the article), I feel that the experience of actually writing my own code
makes for stronger retention in memory.

## Hacking

This program is designed to run in Node.js. To check out the REPL, simply run

```sh
npm run start
# or yarn start
```

The relevant files are in `src`. Structure is simple enough: the parser is in
`parser.js`, eval is in `eval.js`, and so on. If you follow Norvig's article as
you browse this code, it should be hopefully be clear enough where each part has
been implemented.

Tests can be run with

```sh
npm run test
# or yarn test
```

Tests are written with [ava][ava], in the respective `*.spec.js` files.

## Licensing

This project is free and open source software, licensed under the MIT license.
You are free to study, use, modify, and redistribute this software.

See `LICENSE` for the full text. Also, take a look at [Github's Choose a License
page][license] for a nice, short explanation.

[lis.py]: https://norvig.com/lis.py
[lis.py-blog]: https://norvig.com/lispy.html
[ava]: https://github.com/avajs/ava
[license]: https://choosealicense.com/licenses/mit/
