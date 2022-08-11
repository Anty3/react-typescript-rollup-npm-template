# react-typescript-rollup-npm-template
![GitHub license](https://img.shields.io/github/license/yet3/react-typescript-rollup-npm-template?style=flat)

A base to start development of react npm package.

### Includes
- Rollup
  - Outputs: esm, cjs
  - Scss
  - Typescript
  - Terser
  - Dts
- Husky
- Prettier
- Jest
  - React Testing Library
  - jest-environment-jsdom
- Example project
  - React
  - Typescript/Javascript
  - Vite
  - TailwindCSS

### Installation
```sh
git clone https://github.com/yet3/react-typescript-rollup-npm-template.git
cd react-typescript-rollup-npm-template && yarn
```

### Commands
- build - build package
- dev - watch and build package while concurrently running example project (remember to run ```yarn``` once in 'example' directory before this command)
- format - format entire project (including 'example')
- test - run all tests

### Directory structure
```tree
├── .husky          Husky's configuration
├── dist            Output directory
├── example         Example react project
├── src             Source code
└── __tests__       Tests
```
