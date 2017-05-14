# Stringinator

A rebuild of Underbar functions, as well as Jest tests for each function, used to build **Stringinator** — a small collection of string utilities.


## Running individual tests

Note that the `jest-cli` package was installed into this repo for testing:

```
npm install --save-dev jest-cli
```

To just run one test file:

```
npm test countChars
```

That will do a partial match on the string and find the matching test and run it.
