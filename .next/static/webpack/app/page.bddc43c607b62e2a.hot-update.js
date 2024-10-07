"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Table.jsx":
/*!******************************!*\
  !*** ./components/Table.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst moonData = [\n    {\n        date: \"1970-01-19\",\n        type: \"impact\",\n        seconds: \"73500\",\n        topVelocity: \"\"\n    },\n    {\n        date: \"1970-03-25\",\n        type: \"impact\",\n        seconds: \"12720\",\n        topVelocity: \"\"\n    },\n    {\n        date: \"1970-03-26\",\n        type: \"impact\",\n        seconds: \"73020\",\n        topVelocity: \"\"\n    },\n    {\n        date: \"1970-04-25T01\",\n        type: \"impact\",\n        seconds: \"4440\",\n        topVelocity: \"\"\n    },\n    {\n        date: \"1970-04-26\",\n        type: \"deep\",\n        seconds: \"52140\",\n        topVelocity: \"\"\n    },\n    {\n        date: \"1970-06-15\",\n        type: \"impact\",\n        seconds: \"68400\",\n        topVelocity: \"\"\n    },\n    {\n        date: \"1970-06-26\",\n        type: \"impact\",\n        seconds: \"72060\",\n        topVelocity: \"\"\n    }\n];\nconst marsData = [\n    {\n        date: \"1970-01-19\",\n        type: \"impact\",\n        seconds: \"73500\",\n        topVelocity: \"\"\n    }\n];\nfunction Table(param) {\n    let { selection } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(selection);\n        if (selection == \"MO\") setData(moonData);\n        else if (selection == \"MA\") setData(marsData);\n    }, [\n        selection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-[700px] text-white bg-gradient-to-b from-[rgb(17,23,41)] to-blue-950\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full min-w-[900px] text-sm text-left rtl:text-right text-gray-500 text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-700 uppercase bg-gray-700 text-gray-400\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 rounded-s-lg\",\n                                        children: \"Date\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Type\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3\",\n                                        children: \"Seconds\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 rounded-e-lg\",\n                                        children: \"Max velocity\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: data.map((row, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"row\",\n                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white\",\n                                            children: row.date\n                                        }, void 0, false, {\n                                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4\",\n                                            children: row.type\n                                        }, void 0, false, {\n                                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4\",\n                                            children: row.seconds\n                                        }, void 0, false, {\n                                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4\",\n                                            children: row.topVelocity\n                                        }, void 0, false, {\n                                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, i, true, {\n                                    fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 33\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n                lineNumber: 68,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Table.jsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n}\n_s(Table, \"tNVKLF/eI269iIOS4WygXQde5D8=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFibGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUUzQyxNQUFNRSxXQUFXO0lBQ2I7UUFDSUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsYUFBYTtJQUNqQjtJQUNBO1FBQ0lILE1BQU07UUFDTkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLGFBQWE7SUFDakI7SUFDQTtRQUNJSCxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxhQUFhO0lBQ2pCO0lBQ0E7UUFDSUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsYUFBYTtJQUNqQjtJQUNBO1FBQ0lILE1BQU07UUFDTkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLGFBQWE7SUFDakI7SUFDQTtRQUNJSCxNQUFNO1FBQ05DLE1BQU07UUFDTkMsU0FBUztRQUNUQyxhQUFhO0lBQ2pCO0lBQ0E7UUFDSUgsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsYUFBYTtJQUNqQjtDQUNIO0FBQ0QsTUFBTUMsV0FBVztJQUNiO1FBQ0lKLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLGFBQWE7SUFDakI7Q0FDSDtBQUVjLFNBQVNFLE1BQU0sS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiOztJQUMxQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUVsQ0MsZ0RBQVNBLENBQUM7UUFDTlcsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLElBQUlBLGFBQWEsTUFBT0UsUUFBUVQ7YUFDM0IsSUFBSU8sYUFBYSxNQUFPRSxRQUFRSjtJQUN6QyxHQUFHO1FBQUNFO0tBQVU7SUFFZCxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFNRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU1GLFdBQVU7c0NBQ2IsNEVBQUNHOztrREFDRyw4REFBQ0M7d0NBQUdDLE9BQU07d0NBQU1MLFdBQVU7a0RBQXlCOzs7Ozs7a0RBR25ELDhEQUFDSTt3Q0FBR0MsT0FBTTt3Q0FBTUwsV0FBVTtrREFBWTs7Ozs7O2tEQUd0Qyw4REFBQ0k7d0NBQUdDLE9BQU07d0NBQU1MLFdBQVU7a0RBQVk7Ozs7OztrREFHdEMsOERBQUNJO3dDQUFHQyxPQUFNO3dDQUFNTCxXQUFVO2tEQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzNELDhEQUFDTTtzQ0FDSVgsS0FBS1ksR0FBRyxDQUFDLENBQUNDLEtBQUtDLGtCQUNaLDhEQUFDTjtvQ0FBR0gsV0FBVTs7c0RBQ1YsOERBQUNJOzRDQUFHQyxPQUFNOzRDQUFNTCxXQUFVO3NEQUNyQlEsSUFBSXBCLElBQUk7Ozs7OztzREFFYiw4REFBQ3NCOzRDQUFHVixXQUFVO3NEQUNUUSxJQUFJbkIsSUFBSTs7Ozs7O3NEQUViLDhEQUFDcUI7NENBQUdWLFdBQVU7c0RBQ1RRLElBQUlsQixPQUFPOzs7Ozs7c0RBRWhCLDhEQUFDb0I7NENBQUdWLFdBQVU7c0RBQ1RRLElBQUlqQixXQUFXOzs7Ozs7O21DQVhGa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnREO0dBckR3QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFibGUuanN4P2ZjMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IG1vb25EYXRhID0gW1xuICAgIHtcbiAgICAgICAgZGF0ZTogXCIxOTcwLTAxLTE5XCIsXG4gICAgICAgIHR5cGU6IFwiaW1wYWN0XCIsXG4gICAgICAgIHNlY29uZHM6IFwiNzM1MDBcIixcbiAgICAgICAgdG9wVmVsb2NpdHk6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRhdGU6IFwiMTk3MC0wMy0yNVwiLFxuICAgICAgICB0eXBlOiBcImltcGFjdFwiLFxuICAgICAgICBzZWNvbmRzOiBcIjEyNzIwXCIsXG4gICAgICAgIHRvcFZlbG9jaXR5OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRlOiBcIjE5NzAtMDMtMjZcIixcbiAgICAgICAgdHlwZTogXCJpbXBhY3RcIixcbiAgICAgICAgc2Vjb25kczogXCI3MzAyMFwiLFxuICAgICAgICB0b3BWZWxvY2l0eTogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF0ZTogXCIxOTcwLTA0LTI1VDAxXCIsXG4gICAgICAgIHR5cGU6IFwiaW1wYWN0XCIsXG4gICAgICAgIHNlY29uZHM6IFwiNDQ0MFwiLFxuICAgICAgICB0b3BWZWxvY2l0eTogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF0ZTogXCIxOTcwLTA0LTI2XCIsXG4gICAgICAgIHR5cGU6IFwiZGVlcFwiLFxuICAgICAgICBzZWNvbmRzOiBcIjUyMTQwXCIsXG4gICAgICAgIHRvcFZlbG9jaXR5OiBcIlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRlOiBcIjE5NzAtMDYtMTVcIixcbiAgICAgICAgdHlwZTogXCJpbXBhY3RcIixcbiAgICAgICAgc2Vjb25kczogXCI2ODQwMFwiLFxuICAgICAgICB0b3BWZWxvY2l0eTogXCJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF0ZTogXCIxOTcwLTA2LTI2XCIsXG4gICAgICAgIHR5cGU6IFwiaW1wYWN0XCIsXG4gICAgICAgIHNlY29uZHM6IFwiNzIwNjBcIixcbiAgICAgICAgdG9wVmVsb2NpdHk6IFwiXCIsXG4gICAgfSxcbl1cbmNvbnN0IG1hcnNEYXRhID0gW1xuICAgIHtcbiAgICAgICAgZGF0ZTogXCIxOTcwLTAxLTE5XCIsXG4gICAgICAgIHR5cGU6IFwiaW1wYWN0XCIsXG4gICAgICAgIHNlY29uZHM6IFwiNzM1MDBcIixcbiAgICAgICAgdG9wVmVsb2NpdHk6IFwiXCIsXG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSh7IHNlbGVjdGlvbiB9KSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3Rpb24pXG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT0gXCJNT1wiKSAgc2V0RGF0YShtb29uRGF0YSlcbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0aW9uID09IFwiTUFcIikgIHNldERhdGEobWFyc0RhdGEpXG4gICAgfSwgW3NlbGVjdGlvbl0pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1bNzAwcHhdIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tYiBmcm9tLVtyZ2IoMTcsMjMsNDEpXSB0by1ibHVlLTk1MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBtaW4tdy1bOTAwcHhdIHRleHQtc20gdGV4dC1sZWZ0IHJ0bDp0ZXh0LXJpZ2h0IHRleHQtZ3JheS01MDAgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS03MDAgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHJvdW5kZWQtcy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWNvbmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyByb3VuZGVkLWUtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1heCB2ZWxvY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnNlY29uZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cudG9wVmVsb2NpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW9vbkRhdGEiLCJkYXRlIiwidHlwZSIsInNlY29uZHMiLCJ0b3BWZWxvY2l0eSIsIm1hcnNEYXRhIiwiVGFibGUiLCJzZWxlY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJyb3ciLCJpIiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Table.jsx\n"));

/***/ })

});