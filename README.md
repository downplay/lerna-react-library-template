# Lerna React Library Template 0.1.1

This is a "Monorepo" Lerna setup with one React component and an additional library in another package that depends on it.

The build scripts will build and publish to npm with CJS, ES6 and UMD builds.

Jest and Cypress are included for tests. AirBnB lint rules (relaxed a bit) included, with Prettier exclusions. Demo site uses Parcel bundler.

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
yarn global add parcel
yarn start
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
* In package.json for each component, the `files` array must specify all your .js files, which will get built into the root of the package (but .gitignore will ignore them). Also `es` and `umd` are the folders with the ES6 and UMD builds respectively
* If you want to add more libs, duplicate folders as needed and add to `lerna.json`

## Publishing

To publish to npm

```
lerna publish
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
