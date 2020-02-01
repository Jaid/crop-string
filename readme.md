# crop-string


<a href="https://raw.githubusercontent.com/jaid/crop-string/master/license.txt"><img src="https://img.shields.io/github/license/jaid/crop-string?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor crop-string"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/crop-string/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fcrop-string%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/crop-string/commits"><img src="https://img.shields.io/github/commits-since/jaid/crop-string/v2.0.0?style=flat-square&logo=github" alt="Commits since v2.0.0"/></a> <a href="https://github.com/jaid/crop-string/commits"><img src="https://img.shields.io/github/last-commit/jaid/crop-string?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/crop-string/issues"><img src="https://img.shields.io/github/issues/jaid/crop-string?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/crop-string"><img src="https://img.shields.io/npm/v/crop-string?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/crop-string/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/crop-string?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/crop-string"><img src="https://img.shields.io/npm/dm/crop-string?style=flat-square&logo=npm" alt="Downloads"/></a>

**Trims strings to a maximum length and appends dot dot dot if needed.**





## Installation

<a href="https://npmjs.com/package/crop-string"><img src="https://img.shields.io/badge/npm-crop--string-C23039?style=flat-square&logo=npm" alt="crop-string on npm"/></a>

```bash
npm install --save crop-string@^2.0.0
```

<a href="https://yarnpkg.com/package/crop-string"><img src="https://img.shields.io/badge/Yarn-crop--string-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="crop-string on Yarn"/></a>

```bash
yarn add crop-string@^2.0.0
```

<a href="https://github.com/jaid/crop-string/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/crop--string-24282e?style=flat-square&logo=github" alt="@jaid/crop-string on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/crop-string@^2.0.0
```



## Example

```javascript
import cropString from "crop-string"

const string = "hello world"
const result = cropString(string, 4)
```

Variable `result` will now be:

```javascript
"hel…"
```













## Development



Setting up:
```bash
git clone git@github.com:jaid/crop-string.git
cd crop-string
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
