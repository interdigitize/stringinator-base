# Stringinator

A small collection of string utilities using a rebuild of Underbar functions, as well as Jest tests for each function.


## Running individual tests

Note that the `jest-cli` package was installed into this repo for testing:

```
npm install --save-dev jest-cli
```

To just run one test file:

```
npm test `testname`
```

That will do a partial match on the string and find the matching test and run it.
