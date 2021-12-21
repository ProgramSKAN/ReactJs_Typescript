> npm install -g typescript ts-node

tsc> typescript compiler

> tsc --help

inside fetchJson folder

> npm init -y
> npm install axios

#### executes index.ts

> tsc index.ts
> this generates index.js file

> node index.js

instead of 2 commands run one

> ts-node index.ts

### Types

easy way to refer to the different properties + functions that a value has

| Type    | values that have this type |
| ------- | -------------------------- |
| string  | "hi", "", 'there'          |
| number  | .00025, -20, 40000000      |
| boolean | true, false                |
| Date    | new Date()                 |

- Primitive Types
  - number, boolean, vois, undefined, string, symbol, null
- Object Types
  - functions, arrays, classes, objects

* TYPE ANNOTATIONS: code we add to tell typescript waht type of value a variable will refer to (developers tell typescript the type)
* TYPE INFERENCE: typescript tries to figure out what type of value a variable refers to (Typescript guessess the type)

* TYPE ANNOTATIONS for functions: code we add to tell typescript what type of argument a function will receive and what type of values it will return
* TYPE INFERENCE for functions: typescript tries to figure out what type of value a fuction will return

## Interface

- create new type, describing the property names and value types of an object

## Classes

- Blueprint to create an object with some fields(values) and methods(functions) to represent a thing

### to run typescript inside browser use parcel bundler (google map marker mapProject)

> npm install -g parcel-bundler

it complie .ts to .js and runs in browser.

- to run
  > parcel index.html

* run 'google' in chrome console of project to check googlemaps api working properly
