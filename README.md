# Mimoo Test

## To execute the dev environment properly you need to: 
```
1. clone this repository
2. enter in the mimoo directory
3. run yarn or npm install
4. run yarn start or npm start
5. use one browser which has localStorage (not work on IE and EDGE without build)
6. open your favourite browser and access http://localhost:3000 to see the magic!
```
> FYI I used Redux Devtools in the project, so if you want to see the redux store/redux actions more easily you can install [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR) extension on Chrome, and see accessing F12 > Redux, see how it works in the [github documentation](https://github.com/zalmoxisus/redux-devtools-extension)

to run the test, just type `yarn test` or `npm run test` inside the mimoo directory to run JEST.

### The App was built to support different sizes, which can be:
    - > 200px
    - 200px > 360px
    - 360px > 411px
    - 411px > 768px
    - 768px > 1024px
    - 1024px > 1440px
    - 1440px > 1600px
    - 1600px > 1920px
    - 1920px > 2560px
    - < 2560px
You can see this properties accessing ./src/utils/deviceSizes.js

## Techs used:

### Main Libraries
    - React;
    - React Router.

### Storage
    - Redux;
    - Redux Saga;
    - Redux Persist;
    - Redux Api Middleware;
    - Local Storage;
    - Redux Devtools Extension ( to see the redux on chrome browser ).

### Styling
    - Material-ui (core/icons);
    - Styled Components.

### Test
    - Jest;
    - Enzyme.