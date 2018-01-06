# Lerna React Library Template

This is a "Monorepo" Lerna setup with one React component and an additional library in another package that depends on it.

The build scripts will build and publish to npm with CJS, ES6 and UMD builds.

Jest and Cypress are included for tests.

## Getting Started

```
git clone https://github.com/downplay/lerna-react-library-template
cd lerna-react-library-template
yarn
yarn global add lerna
lerna bootstrap
yarn build
```

To run demo:

```
yarn demo
```

To run Jest tests:

```
yarn test
```

To run e2e tests (uses [cypress.io](https://cypress.io)):

```
yarn e2e
```

## Customising

* Change version in package.json
* Rename all lerna-react-library-template -> your-component-packages
* Rename all my-demo-component -> your-component
* Rename all my-demo-component-lib -> your-component-foo
* Rename packages/my-demo-component\*
* Rename all MyDemoComponent and MyDemoComponentLib. Note: the new name will be used as the global name for UMB (browser) builds

If you need more libs, duplicate folders as needed and add to lerna.json.

## Publishing

To publish to npm

```
yarn publish
```

## Credits

Bits and pieces borrowed from React Router (C) React Training MIT License
https://github.com/ReactTraining/react-router

## Version History

### 0.1.0

* First version

## Copyright

&copy;2017 Downplay Ltd

Distributed under MIT license. See LICENSE for full details.

```

```
