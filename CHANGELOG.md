# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/waitingsong/node-idcard-reader-base/compare/v2.0.0...v2.0.1) (2019-12-25)


### Bug Fixes

* npm missing assets ([9d708e4](https://github.com/waitingsong/node-idcard-reader-base/commit/9d708e46090437d342ecc60d63da75c0899e46e0))

## [2.0.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v1.4.0...v2.0.0) (2019-12-25)


### ⚠ BREAKING CHANGES

* remove support nodejs v8

### build

* update package.json ([a55922f](https://github.com/waitingsong/node-idcard-reader-base/commit/a55922ff90b26e99bbaeb7ee0f0415d690a00539))

# [1.4.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v1.3.1...v1.4.0) (2019-05-31)


### Features

* parse port within parseDeviceOpts() ([bbfdc8f](https://github.com/waitingsong/node-idcard-reader-base/commit/bbfdc8f))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.6.2...v1.0.0) (2019-02-21)


### Code Refactoring

* parameters of composite() ([f4d6c9c](https://github.com/waitingsong/node-idcard-reader-base/commit/f4d6c9c))


### BREAKING CHANGES

* change number of parameter and types



<a name="0.6.2"></a>
## [0.6.2](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.6.1...v0.6.2) (2019-02-20)



<a name="0.6.1"></a>
## [0.6.1](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.6.0...v0.6.1) (2019-02-19)


### Bug Fixes

* cmd length with maxCmdLength ([268c6d5](https://github.com/waitingsong/node-idcard-reader-base/commit/268c6d5))
* path of command ([4995700](https://github.com/waitingsong/node-idcard-reader-base/commit/4995700))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.5.0...v0.6.0) (2019-02-19)


### Features

* add DeviceOpts['port'] ([d63b3d0](https://github.com/waitingsong/node-idcard-reader-base/commit/d63b3d0))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.4.0...v0.5.0) (2019-02-18)


### Features

* define default values of fonts in initialCompositeOpts ([6baa0ea](https://github.com/waitingsong/node-idcard-reader-base/commit/6baa0ea))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.3.0...v0.4.0) (2019-02-18)


### Features

* update formatBaseData() ([447579c](https://github.com/waitingsong/node-idcard-reader-base/commit/447579c))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.2.0...v0.3.0) (2019-02-18)


### Features

* export functions parseDeviceOpts(), parseCompositeOpts() ([3315099](https://github.com/waitingsong/node-idcard-reader-base/commit/3315099))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.1.0...v0.2.0) (2019-02-18)


### Features

* export const initialDeviceOpts ([ef995e9](https://github.com/waitingsong/node-idcard-reader-base/commit/ef995e9))
* export function validateDllFile(), testWrite() ([0bd0fc4](https://github.com/waitingsong/node-idcard-reader-base/commit/0bd0fc4))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/waitingsong/node-idcard-reader-base/compare/v0.0.1...v0.1.0) (2019-02-16)


### Features

* format DataBase and composite image ([96b983a](https://github.com/waitingsong/node-idcard-reader-base/commit/96b983a))



<a name="0.0.1"></a>
## 0.0.1 (2019-02-16)


### Bug Fixes

* catch test error ([5efe156](https://github.com/waitingsong/node-idcard-reader-base/commit/5efe156))
* createDir() path resolve under linux ([c6d1274](https://github.com/waitingsong/node-idcard-reader-base/commit/c6d1274))
* deps, peerDeps might empty ([e3ab52b](https://github.com/waitingsong/node-idcard-reader-base/commit/e3ab52b))
* error TS1345: An expression of type 'void' cannot be tested for truthiness ([0085713](https://github.com/waitingsong/node-idcard-reader-base/commit/0085713))
* options not covered within createFile() ([a2ae4e8](https://github.com/waitingsong/node-idcard-reader-base/commit/a2ae4e8))
* path require parse by normalize() within createDir() ([371a313](https://github.com/waitingsong/node-idcard-reader-base/commit/371a313))
* revert ts-node to '5.0.1' ([cc83ade](https://github.com/waitingsong/node-idcard-reader-base/commit/cc83ade))
* rimraf() got "no such file or directory" if unlink a file ([2680611](https://github.com/waitingsong/node-idcard-reader-base/commit/2680611))
* **tslint:** no-unused-variable rule ([d0ce43a](https://github.com/waitingsong/node-idcard-reader-base/commit/d0ce43a))
* rimraf() rm folder ([87fe6d5](https://github.com/waitingsong/node-idcard-reader-base/commit/87fe6d5))
* wrong variable within createFile() ([49ac701](https://github.com/waitingsong/node-idcard-reader-base/commit/49ac701))


### Features

* add assertNever() ([6eb9349](https://github.com/waitingsong/node-idcard-reader-base/commit/6eb9349))
* add assertNeverObb() ([91da144](https://github.com/waitingsong/node-idcard-reader-base/commit/91da144))
* add isPathAcessible() ([7eb000b](https://github.com/waitingsong/node-idcard-reader-base/commit/7eb000b))
* add lib/shared.ts ([6915fb1](https://github.com/waitingsong/node-idcard-reader-base/commit/6915fb1))
* add logger() ([5d603c5](https://github.com/waitingsong/node-idcard-reader-base/commit/5d603c5))
* add Observable functions ([c9364db](https://github.com/waitingsong/node-idcard-reader-base/commit/c9364db))
* change logger() to accept more args ([b5d0ca4](https://github.com/waitingsong/node-idcard-reader-base/commit/b5d0ca4))
* compile output bundle file without minify ([0b78ba1](https://github.com/waitingsong/node-idcard-reader-base/commit/0b78ba1))
* do isPathAccessible() first within isDirFileExists() ([9ddae98](https://github.com/waitingsong/node-idcard-reader-base/commit/9ddae98))
* export basename() from shared ([7e93fd7](https://github.com/waitingsong/node-idcard-reader-base/commit/7e93fd7))
* export dirname() ([0db2a50](https://github.com/waitingsong/node-idcard-reader-base/commit/0db2a50))
* export native assert() ([683cea8](https://github.com/waitingsong/node-idcard-reader-base/commit/683cea8))
* export os.tmpdir() ([1cc1f3e](https://github.com/waitingsong/node-idcard-reader-base/commit/1cc1f3e))
* export rmdirAsync() and rimraf() ([4ef519a](https://github.com/waitingsong/node-idcard-reader-base/commit/4ef519a))
* export statAsync ([c832590](https://github.com/waitingsong/node-idcard-reader-base/commit/c832590))
* output esm.min.js ([f6c729f](https://github.com/waitingsong/node-idcard-reader-base/commit/f6c729f))
* parse peerDependencies as external ([dfdd73e](https://github.com/waitingsong/node-idcard-reader-base/commit/dfdd73e))
* parseUMDName() ([6e7164f](https://github.com/waitingsong/node-idcard-reader-base/commit/6e7164f))
* remove log() and logger() ([27e1e29](https://github.com/waitingsong/node-idcard-reader-base/commit/27e1e29))


### Reverts

* wrong tslib remove ([deb2591](https://github.com/waitingsong/node-idcard-reader-base/commit/deb2591))
