# App for comunity alcaldia of Pasto
You must install this if you like to have this app

## Tools used along this project
* [React Native](https://reactnative.dev/) as code framework.
* [Expo](https://expo.io/) as native engine.
* [ES6](http://es6-features.org) as main language.
* [Async](https://github.com/caolan/async) as async utilities for node and the browser
* [Mocha](https://mochajs.org) as testing framework.
* [ESLint](http://eslint.org) as JavaScript linter.
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as plugin for helping to follow the code style guide

## Workflow and code style guide
We use [airbnb-javascript](https://github.com/airbnb/javascript) as JavaScript style guide.

**Guidelines:**

* If your code will perform asynchronous operations it must use promises
* Every bug should be registered as an issue
* Your code should be almost entirely written in english
* Your code should follow the [airbnb-javascript](https://github.com/airbnb/javascript) style guide
* Your commits should be written in english, they must be descriptive and minimalist
* You should try to use testing in your code, but this is not required

**Note:** _Your code could be rejected by breaking the above rules._


### Install Expo global

Install the `expo` command-line tool, and run the publish command:

```
$ npm i -g expo
$ expo publish
```


## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)


## Contributing to the project
If you want to contribute to this project, you must follow the [**Workflow**](#workflow-and-code-style-guide) and have in mind the next points:
* The project is configured with ESLint, so we highly recommend you to install globally ESLint: ```npm install -g eslint```
* If you use Visual Studio Code, you should disable the javascript validation putting ```"javascript.validate.enable": false``` inside your workspace settings.


## Running the project

### Setup EXPO environment
* [Install Expo global](#install-expo-global)
* [`yarn start`](#yran-start)


### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn at the time of this writing.

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`