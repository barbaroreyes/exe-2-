"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _Users_barbaroreyes_porta_next_exe_2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_barbaroreyes_porta_next_exe_2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_barbaroreyes_porta_next_exe_2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"./pages/Card.js\");\n/* harmony import */ var _API_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API/data.json */ \"./pages/API/data.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Index = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Index, _Component);\n    var _super = _createSuper(Index);\n    function Index() {\n        _classCallCheck(this, Index);\n        return _super.apply(this, arguments);\n    }\n    _createClass(Index, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().app),\n                    __source: {\n                        fileName: \"/Users/barbaroreyes/porta-next/exe-2/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"header\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                            __source: {\n                                fileName: \"/Users/barbaroreyes/porta-next/exe-2/pages/index.js\",\n                                lineNumber: 14,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                src: \"/logo.png\",\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),\n                                alt: \"logo\",\n                                __source: {\n                                    fileName: \"/Users/barbaroreyes/porta-next/exe-2/pages/index.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 21\n                                },\n                                __self: this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),\n                            __source: {\n                                fileName: \"/Users/barbaroreyes/porta-next/exe-2/pages/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: this.props.cards.map(function(card) {\n                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/barbaroreyes/porta-next/exe-2/pages/index.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 22\n                                    },\n                                    __self: _this\n                                }, card.id);\n                            })\n                        })\n                    ]\n                }));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_Users_barbaroreyes_porta_next_exe_2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_barbaroreyes_porta_next_exe_2_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", {\n                                    cards: _API_data_json__WEBPACK_IMPORTED_MODULE_4__\n                                });\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return Index;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNFO0FBQ2Q7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUViSyxLQUFLLGlCQUFYLFFBQVE7O2NBQUZBLEtBQUs7OEJBQUxBLEtBQUs7YUFBTEEsS0FBSzs4QkFBTEEsS0FBSzs7O2lCQUFMQSxLQUFLOztZQUt0QkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDOztnQkFDTixNQUFNLHVFQUNEQyxDQUFHO29CQUFDQyxTQUFTLEVBQUdOLDhEQUFVOzs7Ozs7Ozs2RkFDdEJRLENBQU07NEJBQUNGLFNBQVMsRUFBRU4saUVBQWE7Ozs7Ozs7MkdBQzNCUyxDQUFHO2dDQUFDQyxHQUFHLEVBQUUsQ0FBVztnQ0FDckJKLFNBQVMsRUFBRU4sK0RBQVc7Z0NBQ3RCWSxHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7OzZGQUdiUCxDQUFHOzRCQUFDQyxTQUFTLEVBQUVOLCtEQUFXOzs7Ozs7O3NDQUN2QixJQUFJLENBQUNjLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzhDQUN6QixNQUFNLHdEQUFMaEIsNkNBQUk7Ozs7Ozs7bUNBQ0FnQixJQUFJLENBQUNDLEVBQUU7Ozs7O1lBVzdCLENBQUM7Ozs7WUExQllDLEdBQWUsRUFBZkEsQ0FBZTttQkFBNUIsUUFBUSxDQUFLQSxlQUFlO3NLQUE1QixRQUFRLFdBQXNCLENBQUM7Ozs7NkRBQ3hCLENBQUNKO29DQUFBQSxLQUFLLEVBQUdiLDJDQUFJO2dDQUFBLENBQUM7Ozs7OztnQkFDckIsQ0FBQzs7OztXQUpnQkMsS0FBSztFQUFVTCx3REFBZTtBQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX1mcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9BUEkvZGF0YS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyAgUmVhY3QuQ29tcG9uZW50ICB7XG4gICAgXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIHJldHVybiB7Y2FyZHM6ICBkYXRhfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9e3N0eWxlcy5hcHB9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmMgPScvbG9nby5wbmcnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYXJkcy5tYXAoKGNhcmQpPT4oXG4gICAgICAgICAgICAgICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5pZH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuICAgIH1cbiAgIFxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ2FyZCIsImRhdGEiLCJJbmRleCIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImFwcCIsImhlYWRlciIsImltZyIsInNyYyIsImxvZ28iLCJhbHQiLCJncmlkIiwicHJvcHMiLCJjYXJkcyIsIm1hcCIsImNhcmQiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});