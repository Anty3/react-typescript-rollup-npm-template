# react-typescript-rollup-npm-template
![GitHub license](https://img.shields.io/github/license/Anty3/react-typescript-rollup-npm-template?style=flat)

A base to start development of react npm package.

## Includes
- Rollup
  - Outputs: esm, cjs
  - Scss
  - Typescript
  - Terser
  - Dts
- Husky
- Prettier
- Jest
- Example project
  - React
  - Typescript/Javascript
  - Vite
  - TailwindCSS

## Installation
```sh
git clone https://github.com/Anty3/react-typescript-rollup-npm-template.git
cd react-typescript-rollup-npm-template && yarn
```

## Commands
- build - build package
- dev - watch and build package while concurrenlty running example project (remember to run ```yarn``` in 'example' directory)
- format - format entire project (including 'example')
- test - run all tests

## Directory structure
```tree
├── .husky      Husky's configuration
├── example     Example react project
├── src         Package's source code
└── tests       Package's tests
```
