# Mimoo Test
This repository is about [Mimoo Challenge](https://github.com/mimoo-tech/jobs/blob/master/desafios/frontend/README.md#1-o-usu%C3%A1rio-deve-poder-acessar-a-miss%C3%A3o)

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

## You can access this documentation and some more informations using docz:
to use docz, type `yarn docz:dev` and access http://localhost:7000 to see the documentation!

## I organized the code like:

### Redux folders
    * ./src/actions
        - the actions filenames was built to show the right actions based on it reducers, for example, the file user.js contains all the user's reducer actions.
    * ./src/reducers
        - the reducers filenames was build to show the right reducers based on it store, for example, the file user.js contains all the user's store manipulation.
        - this file have an utils folder, because these utils files were only used on reducers folder.
    * ./src/saga
        - the saga filenames was build to show the right saga based on it actions/reducers, for example, the file user.js contains all the user's watchers.
    * ./src/store
        - the file createStore.js has all the configuration about saga, redux-persist, redux-api-middleware and redux-devtools-extension.

### assets (static images)
    * ./src/assets

### the app core itself
    * ./src/containers
        - It has the app containers, rendered in the routes.js file, which has the react-router-dom configuration.
        - The name of the containers is based on the Adobe XD photo names, to be easier to found the right code to the right screen.
        - Since the scan part need to have an native camera to use, I prefered to just mock the functionality and focus in the storage part, but if you need it please tell me and I implement it for you.
    * ./src/components
        - It Has the components that containers use.

### util functions
    * ./src/utils
        - ./deviceSizes.js
            - have all the sizes changes with media queries in the application.
        - ./useEventListener.js
            - Have an util function to add addEventListener and removeEventListener without write it from the scrath in the component.
        - ./animations/viewSlide.js
            - Have keyframes to create slide animations to transition between pages and between brands (Home page case).

### about all these files, you can import default exports accessing the right folder, or import it just accessing the main folder, for example:
    - import Home from './src/containers/Home';
    - import { Home } from './src/containers';

## I organized the tests like:
    * ./tests/function-tests
        - It has all the functions in the application, and it was built with the expected folder/file name, for example:
            - ./reducers-utils/addNewProduct.test.js is the same as ./src/reducers/utils/addNewProduct.test.js.
            - ./utils/deviceSizes.test.js is the same as ./src/utils/deviceSizes.js.
    * ./tests/react-tests
        - It has all the component tests, using jest snapshot test. It has:
            - ./components.test.js has all the ./src/components components tested.
            - ./containers.test.js has all the ./src/containers components tested.
    * ./tests/redux-tests
        - It has all the redux tests. It has:
            - ./actions-user.test.js has all the ./src/actions/user.js actions tested.
            - ./reducers-user.test.js has all the ./src/reducers/users.js switch cases tested.
    * ./tests/mocks.js
        - have all the mocks used on the tests, such as device sizes, products, new product, etc.
    * ./tests/assetsTransformer.js
        - have one configuration about static image files, to make it keep working with jest tests.


## About Accessibility

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
You can see this properties accessing ./src/utils/deviceSizes.js.

### The App was built to support tabIndex and some button events, like:
    - Splash Screen
        - have tabIndex to the continue button and, when trigger enter button, it goes to the Nome page
    - Nome
        - have tabIndex to the back button, to the input field and to the next button.
        - have validation when trigger the continue button (you can trigger with tabIndex + enter button or just enter button) to see if the input field have a valid value.
        - when it's not valid, the input turns red and show the error, when it's valid, goes to the Home page
    - Home
        - have tabIndex to the brand items and to the plus button (in the bottom right of the screen).
        - when trigger the enter button or tabIndex to the plus button and trigger enter, goes to Scan page.
    - Scan
        - have tabIndex to the continue button and, when trigger enter button, it goes to the Continuacao page.
    - Continuacao
        - have tabIndex to the continue button and, when trigger enter button, goes back to Home page.
> FYI tabIndex is when you can access the properties of the site with the tab key on your keyboard

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
> FYI because I'm using localStorage and, since the test's API doesn't have delete methods, you need to clear the cache if you need to see the app from the scratch after you use it, to do it you need to acces F12 > Application > Clear storage and click on Clear site data button

### Styling
    - Material-ui (core/icons);
    - Styled Components;
    - React Transition Group.

### Test
    - Jest;
    - Enzyme.