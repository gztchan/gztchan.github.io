---
path: "/posts/source-map-in-webpack"
title: Source Map in Webpack
date: "2017-04-28"
---

### 什么是 Source Map
在现今的前端开发过程中，无论是开发环境或是生产环境，运行在浏览器（甚至 Node.js）中的代码（JavaScript, CSS, Less 等等），都经过了不同程度的转换或加工（特性转换、混淆、压缩）。那么当我们在定位问题位置时，就显得异常的困难。Source Map 便提供了一个快捷、高效的解决方案，既满足了代码的转换的同时，保持正常的开发体验。

Source Map 的原理是通过在构建时，通过一份特定的 .json 文件，记录构建前后代码的映射关系。 得益于浏览器的对其支持，通过开发者工具便能直接查看对应的代码位置。

浏览器（Chrome, FireFox, Safari 等）在加载 bundle 时，若 bundle 存在 `//# sourceMappingURL=?.map` 会同时加载对应的 `.map`  文件。Chrome 可在如下位置开启（默认开启）：

![ec34ea6dgy1ff1pa1hdfhj20l70c9gn.jpg](//static.cnodejs.org/FpJ8zK0IjQcLaIOsTibv2AWOUUB8)

### Webpack 2.0+ 的 Source Map 配置项

一共有 8 种 source map 配置策略，其中新增了 nosources-source-map 类型。

![ec34ea6dgy1ff1pcgveplj20l509bgmn.jpg](//static.cnodejs.org/FkI26S4UagDzcPz7tMuTUCdlZH_l)

### Source Map 选项之间的区别

> 配合阅读，可以克隆 [GitHub - gztchan/source-map-explore](https://github.com/gztchan/source-map-explore)  来查看区别。

不同选项之间差别主要体现在 source map 策略的质量（源码定位，构建与再构建速度等），这些选项之间通常都是互相约束的。

1. `eval`: 使用 `eval` 包裹源码，并在文件尾部添加 source map 文件位置或编码后的 source map 信息。
2. `cheap` 转换（loader）代码，不支持列信息，且不使用 loader 自身的 source map。
3. `module` 使经过转换后得代码（loader）映射到源代码。

**eval**
生成文件：bundle（eval 包裹）
Source URL：fileURL（源码文件）
错误追踪：文件名、源码行和列位置

```js

// main.js

// 不同模块都被 eval 分别包裹
// 每个模块尾部都包含 # sourceURL='...'

/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var a = { exited: function exited() {\n      console.log('moduleA: hello!');\n    } };\n  a.exited();a.methodNotExisted();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./moduleA.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./moduleA.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _moduleA = __webpack_require__(0);\n\nvar _moduleA2 = _interopRequireDefault(_moduleA);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _moduleA2.default)();\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?");

/***/ })
/******/ ]);
```

**cheap-source-map**
生成文件：bundle 和对应 source-map
Source Map 方式：dataURL（base64）
Sources Content：转换后的代码、源码文件名
错误追踪：行位置（转换后）

```js

// main.js

// 转换后得模块
// 文件尾部 //# sourceMappingURL=main.js.map 指向 source map 文件

/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var a = { exited: function exited() {
      console.log('moduleA: hello!');
    } };
  a.exited();a.methodNotExisted();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleA = __webpack_require__(0);

var _moduleA2 = _interopRequireDefault(_moduleA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _moduleA2.default)();

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
```

```js

// main.js.map

// sourcesContent 为转换后的代码
// mappings 忽略列信息

{
  "version": 3,
  "file": "main.js",
  "sources": [
    "webpack:///webpack/bootstrap 8980c336e190bdb173b1",
    "webpack:///./moduleA.js",
    "webpack:///./index.js"
  ],
  "sourcesContent": [
    "...",
    "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var a = { exited: function exited() {\n      console.log('moduleA: hello!');\n    } };\n  a.exited();a.methodNotExisted();\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./moduleA.js\n// module id = 0\n// module chunks = 0",
    "'use strict';\n\nvar _moduleA = require('./moduleA.js');\n\nvar _moduleA2 = _interopRequireDefault(_moduleA);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _moduleA2.default)();\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 1\n// module chunks = 0"
  ],
  "mappings": ";AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;;A;;;;;AChEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;;;;;;ACXA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;;A",
  "sourceRoot": ""
}
```

**cheap-eval-source-map**
生成文件：bundle（eval 包裹）
Source Map 方式：dataURL（base64）
Sources Content：转后的代码、源码文件名
错误追踪：行位置（转换后 ）

```js

// main.js

// 在 eval 的基础上，尾部的 //# sourceMappingURL=dataURL, 不生成 source map 文件

/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var a = { exited: function exited() {\n      console.log('moduleA: hello!');\n    } };\n  a.exited();a.methodNotExisted();\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZUEuanM/ODU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGEgPSB7IGV4aXRlZDogZnVuY3Rpb24gZXhpdGVkKCkge1xuICAgICAgY29uc29sZS5sb2coJ21vZHVsZUE6IGhlbGxvIScpO1xuICAgIH0gfTtcbiAgYS5leGl0ZWQoKTthLm1ldGhvZE5vdEV4aXN0ZWQoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVBLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _moduleA = __webpack_require__(0);\n\nvar _moduleA2 = _interopRequireDefault(_moduleA);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _moduleA2.default)();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzY0OTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX21vZHVsZUEgPSByZXF1aXJlKCcuL21vZHVsZUEuanMnKTtcblxudmFyIF9tb2R1bGVBMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZHVsZUEpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oMCwgX21vZHVsZUEyLmRlZmF1bHQpKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
```

**cheap-module-eval-source-map**
生成文件：bundle （eval 包裹）
Source Map 方式：dataURL（base64）
Sources Content：源代码、源码文件名
错误追踪：文件名、源码行位置

```js

// main.js

// 与 cheap-eval-source-map 对比，经过 base64 编码的 source map 体积下降了（忽略列信息）

/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var a = { exited: function exited() {\n      console.log('moduleA: hello!');\n    } };\n  a.exited();a.methodNotExisted();\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9tb2R1bGVBLmpzPzg2M2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGEgPSB7IGV4aXRlZDogKCkgPT4geyBjb25zb2xlLmxvZygnbW9kdWxlQTogaGVsbG8hJyl9IH07XG4gIGEuZXhpdGVkKCk7IGEubWV0aG9kTm90RXhpc3RlZCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1vZHVsZUEuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _moduleA = __webpack_require__(0);\n\nvar _moduleA2 = _interopRequireDefault(_moduleA);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _moduleA2.default)();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9pbmRleC5qcz8xNjg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2R1bGVBU2F5SGVsbG8gZnJvbSAnLi9tb2R1bGVBLmpzJztcblxubW9kdWxlQVNheUhlbGxvKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
```

**cheap-module-source-map**
生成文件：bundle 和 source-map
Source Map 方式：fileURL
Sources Content：源代码、源码文件名
错误追踪：文件名、源码行位置

```js
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

...

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

...

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
```

```js

// main.js.map

{
  "version": 3,
  "file": "main.js",
  "sources": [
    "webpack:///webpack/bootstrap 8980c336e190bdb173b1",
    "webpack:///moduleA.js",
    "webpack:///index.js"
  ],
  "sourcesContent": [
    "...",
    "\nexport default () => {\n  const a = { exited: () => { console.log('moduleA: hello!')} };\n  a.exited(); a.methodNotExisted();\n}\n\n\n\n// WEBPACK FOOTER //\n// moduleA.js",
    "import moduleASayHello from './moduleA.js';\n\nmoduleASayHello();\n\n\n\n// WEBPACK FOOTER //\n// index.js"
  ],
  "mappings": ";AAAA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;;A;;;;;;;;;;;AC/DA;AACA;AAAA;AAAA;AACA;AACA;;;;;;;;;ACJA;AACA;;;;;AACA;;;A",
  "sourceRoot": ""
}
```

**eval-source-map**
生成文件：bundle（eval 包裹）
Source Map 方式：dataURL（base64）
Sources Content：源代码、源代码文件名
错误追踪：文件名、源码行和列位置

```js

// main.js

// sourcesContent 包含未被转换的源码
// 包含没有去掉列信息的 source map

/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var a = { exited: function exited() {\n      console.log('moduleA: hello!');\n    } };\n  a.exited();a.methodNotExisted();\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVBLmpzPzZlOWQiXSwibmFtZXMiOlsiYSIsImV4aXRlZCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2ROb3RFeGlzdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQ2UsWUFBTTtBQUNuQixNQUFNQSxJQUFJLEVBQUVDLFFBQVEsa0JBQU07QUFBRUMsY0FBUUMsR0FBUixDQUFZLGlCQUFaO0FBQStCLEtBQWpELEVBQVY7QUFDQUgsSUFBRUMsTUFBRixHQUFZRCxFQUFFSSxnQkFBRjtBQUNiLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBhID0geyBleGl0ZWQ6ICgpID0+IHsgY29uc29sZS5sb2coJ21vZHVsZUE6IGhlbGxvIScpfSB9O1xuICBhLmV4aXRlZCgpOyBhLm1ldGhvZE5vdEV4aXN0ZWQoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZUEuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _moduleA = __webpack_require__(0);\n\nvar _moduleA2 = _interopRequireDefault(_moduleA);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _moduleA2.default)();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kdWxlQVNheUhlbGxvIGZyb20gJy4vbW9kdWxlQS5qcyc7XG5cbm1vZHVsZUFTYXlIZWxsbygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
```

**source-map**
生成文件：bundle 和对应 source map
Source Map 方式：fileURL
Sources Content：源代码、源码文件名
错误追踪：文件名、源码行和列位置

```js

// main.js

/* 0 */
/***/ (function(module, exports, __webpack_require__) {

...

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

...

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map
```

```js

// main.js.map
// 最完整的 source map 信息
// sourcesContent 是源码

{
  "version": 3,
  "sources": [
    "webpack:///webpack/bootstrap 8980c336e190bdb173b1",
    "webpack:///./moduleA.js",
    "webpack:///./index.js"
  ],
  "names": [
    "a",
    "exited",
    "console",
    "log",
    "methodNotExisted"
  ],
  "mappings": ";AAAA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;;AAGA;AACA;;AAEA;AACA;;AAEA;AACA,mDAA2C,cAAc;;AAEzD;AACA;AACA;AACA;AACA;AACA;AACA;AACA,aAAK;AACL;AACA;;AAEA;AACA;AACA;AACA,mCAA2B,0BAA0B,EAAE;AACvD,yCAAiC,eAAe;AAChD;AACA;AACA;;AAEA;AACA,8DAAsD,+DAA+D;;AAErH;AACA;;AAEA;AACA;;;;;;;;;;;;;;kBC/De,YAAM;AACnB,MAAMA,IAAI,EAAEC,QAAQ,kBAAM;AAAEC,cAAQC,GAAR,CAAY,iBAAZ;AAA+B,KAAjD,EAAV;AACAH,IAAEC,MAAF,GAAYD,EAAEI,gBAAF;AACb,C;;;;;;;;;ACJD;;;;;;AAEA,yB",
  "file": "main.js",
  "sourcesContent": [
    "...",
    "\nexport default () => {\n  const a = { exited: () => { console.log('moduleA: hello!')} };\n  a.exited(); a.methodNotExisted();\n}\n\n\n\n// WEBPACK FOOTER //\n// ./moduleA.js",
    "import moduleASayHello from './moduleA.js';\n\nmoduleASayHello();\n\n\n\n// WEBPACK FOOTER //\n// ./index.js"
  ],
  "sourceRoot": ""
}
```

**nosources-source-map**
生成文件：bundle 和 对应 source map
Source Map 方式：fileURL
Sources Content：空
错误追踪：由于不产生 sourcesContent，所以无法定位

```js

// main.js.map

// 其他信息与 source-map 保持一致，缺少了 sourcesContent

{
  "version": 3,
  "sources": [
    "webpack:///webpack/bootstrap 8980c336e190bdb173b1",
    "webpack:///./moduleA.js",
    "webpack:///./index.js"
  ],
  "names": [
    "a",
    "exited",
    "console",
    "log",
    "methodNotExisted"
  ],
  "mappings": ";AAAA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;;AAGA;AACA;;AAEA;AACA;;AAEA;AACA,mDAA2C,cAAc;;AAEzD;AACA;AACA;AACA;AACA;AACA;AACA;AACA,aAAK;AACL;AACA;;AAEA;AACA;AACA;AACA,mCAA2B,0BAA0B,EAAE;AACvD,yCAAiC,eAAe;AAChD;AACA;AACA;;AAEA;AACA,8DAAsD,+DAA+D;;AAErH;AACA;;AAEA;AACA;;;;;;;;;;;;;;kBC/De,YAAM;AACnB,MAAMA,IAAI,EAAEC,QAAQ,kBAAM;AAAEC,cAAQC,GAAR,CAAY,iBAAZ;AAA+B,KAAjD,EAAV;AACAH,IAAEC,MAAF,GAAYD,EAAEI,gBAAF;AACb,C;;;;;;;;;ACJD;;;;;;AAEA,yB",
  "file": "main.js",
  "sourceRoot": ""
}
```

### 根据环境配置 Source Map

**开发环境**
需求：
1. 快速 build 与 rebuild 速度（配合 HMR）
2. 清晰的 debug 定位信息
3. 尽可能小的 bundle 和 source map 体积

`eval` 优势是快速构建速度，但如果直接使用 `eval-source-map`  会导致在 bundle 尾部的 dataURL 过大（包含源代码），导致包体积增大。`cheap-source-map` 直接得出转换后得代码，由于经过转换，在 debug 时，代码定位不直观。通过 `cheap-module-source-map` 后在 sourcesContent 中可查看源代码。另外，`cheap-source-map` 中 sourcesContent 的体积也相对 `cheap-moudle-source-map` 中的要较大（转换）。结合 `eval` 可以把 devtool 配置为 `cheap-module-eval-source-map`，既能保证一定的 build 与rebuild 速度，同时能确保在 debug 时正确定位代码位置，又能相对地降低 source map 的体积。

推荐使用：`cheap-module-eval-source-map`

**生产环境**
需求：
1. 清晰的 debug 定位信息
2. 尽可能小的 bundle 且只包含 source map 加载链接
3. 在打开 {Browser} Dev Tool 时才加载 source map

`eval` 的方式不适合在生产环境使用（鉴于 `eval` 本身的安全性和性能等问题），`source-map`  与 `cheap-module-source-map` 的区别在于后者会忽略代码的列信息。source map 通过 mappings 保存转换前后字符的对应位置（Base64 VLQ 编码）。当文件越大，需要记录的位置也越多，就会导致 source map 文件过大，从而降低项目构建性能。在 debug 时，列信息较行信息的重要新更低，可以忽略处理。

推荐使用：`cheap-module-eval-source-map`

## 参考
[Wikipedia VLQ Algorithm](https://www.wikiwand.com/en/Variable-length_quantity)
[Introduction to JavaScript Source Maps - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
[Source Maps](https://survivejs.com/webpack/building/source-maps/)
[Webpack Devtool](https://webpack.js.org/configuration/devtool/)
