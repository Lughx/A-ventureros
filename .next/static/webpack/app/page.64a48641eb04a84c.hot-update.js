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

/***/ "(app-pages-browser)/./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _TextTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextTitle */ \"(app-pages-browser)/./components/TextTitle.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TextH1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextH1 */ \"(app-pages-browser)/./components/TextH1.jsx\");\n/* harmony import */ var _TextP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextP */ \"(app-pages-browser)/./components/TextP.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[700px] pt-10 bg-gradient-to-b from-slate-950 to-slate-900 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextH1__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    textValue: \"Smart Planetary Seismic Detection\"\n                }, void 0, false, {\n                    fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 41\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-2xl flex justify-center pt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextP__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        textValue: \"By filtering out noise and focusing on key signals, we provide a web-based platform that visualizes seismic events, making it easy to detect and analyze quakes efficiently across different planets.\"\n                    }, void 0, false, {\n                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"max-w-sm mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"Options\",\n                        className: \"block mb-2 text-sm font-medium text-white flex justify-center pb-1 pt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            textValue: \"Select An Option\"\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 127\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        onInput: (e)=>{\n                            setSelection(e.target.value);\n                        },\n                        id: \"Options\",\n                        className: \"border text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                defaultValue: true,\n                                children: \"Choose an option\"\n                            }, void 0, false, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"MO\",\n                                children: \"Moon\"\n                            }, void 0, false, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"MA\",\n                                children: \"Mars\"\n                            }, void 0, false, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center p-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            initial: {\n                                opacity: 0.5,\n                                scale: 0.8\n                            },\n                            animate: {\n                                y: [\n                                    20,\n                                    0,\n                                    20\n                                ],\n                                opacity: [\n                                    0.8,\n                                    1\n                                ],\n                                scale: [\n                                    0.9,\n                                    1,\n                                    0.9\n                                ],\n                                rotate: [\n                                    0,\n                                    360\n                                ]\n                            },\n                            transition: {\n                                y: {\n                                    duration: 6,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\",\n                                    ease: \"easeInOut\"\n                                },\n                                opacity: {\n                                    duration: 2,\n                                    ease: \"easeInOut\"\n                                },\n                                scale: {\n                                    duration: 6,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\",\n                                    ease: \"easeInOut\"\n                                },\n                                rotate: {\n                                    duration: 30,\n                                    repeat: Infinity,\n                                    ease: \"easeInOut\"\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"w-full max-w-[220px] \".concat(selection == \"MA\" ? \"flex\" : \"hidden\"),\n                                src: \"/mars2.svg\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            initial: {\n                                opacity: 0.5,\n                                scale: 0.8\n                            },\n                            animate: {\n                                y: [\n                                    20,\n                                    0,\n                                    20\n                                ],\n                                opacity: [\n                                    0.8,\n                                    1\n                                ],\n                                scale: [\n                                    0.9,\n                                    1,\n                                    0.9\n                                ],\n                                rotate: [\n                                    0,\n                                    360\n                                ]\n                            },\n                            transition: {\n                                y: {\n                                    duration: 6,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\",\n                                    ease: \"easeInOut\"\n                                },\n                                opacity: {\n                                    duration: 2,\n                                    ease: \"easeInOut\"\n                                },\n                                scale: {\n                                    duration: 6,\n                                    repeat: Infinity,\n                                    repeatType: \"reverse\",\n                                    ease: \"easeInOut\"\n                                },\n                                rotate: {\n                                    duration: 30,\n                                    repeat: Infinity,\n                                    ease: \"easeInOut\"\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"w-full max-w-[220px] \".concat(selection == \"MO\" ? \"flex\" : \"hidden\"),\n                                src: \"/moon3.svg\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/Header.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"TG/8mH5baKCKkc6wIyH+4b7BH0A=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUNRO0FBQ0g7QUFDSDtBQUNIO0FBQ0Y7QUFFWixTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQTtJQUMxQyxxQkFDSSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFhLDRFQUFDTiwrQ0FBTUE7b0JBQUNPLFdBQVc7Ozs7Ozs7Ozs7OzBCQUMvQyw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDTCw4Q0FBS0E7d0JBQUNNLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTFCLDhEQUFDQztnQkFBS0YsV0FBVTs7a0NBQ1osOERBQUNHO3dCQUFNQyxTQUFRO3dCQUFVSixXQUFVO2tDQUEyRSw0RUFBQ1Isa0RBQVNBOzRCQUFDUyxXQUFXOzs7Ozs7Ozs7OztrQ0FDcEksOERBQUNJO3dCQUFPQyxTQUFTLENBQUNDOzRCQUNkVCxhQUFhUyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQy9CO3dCQUFHQyxJQUFHO3dCQUFVVixXQUFVOzswQ0FDdEIsOERBQUNXO2dDQUFPQyxZQUFZOzBDQUFDOzs7Ozs7MENBQ3JCLDhEQUFDRDtnQ0FBT0YsT0FBTTswQ0FBSzs7Ozs7OzBDQUNuQiw4REFBQ0U7Z0NBQU9GLE9BQU07MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJM0IsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1AsNEVBQUNULGlEQUFNQSxDQUFDUSxHQUFHOzRCQUNQYyxTQUFTO2dDQUFFQyxTQUFTO2dDQUFLQyxPQUFPOzRCQUFJOzRCQUNwQ0MsU0FBUztnQ0FDVEMsR0FBRztvQ0FBQztvQ0FBSTtvQ0FBRztpQ0FBRztnQ0FDZEgsU0FBUztvQ0FBQztvQ0FBSztpQ0FBRTtnQ0FDakJDLE9BQU87b0NBQUM7b0NBQUs7b0NBQUc7aUNBQUk7Z0NBQ3BCRyxRQUFRO29DQUFDO29DQUFHO2lDQUFJOzRCQUNoQjs0QkFDQUMsWUFBWTtnQ0FDUkYsR0FBRztvQ0FBRUcsVUFBVTtvQ0FBR0MsUUFBUUM7b0NBQVVDLFlBQVk7b0NBQVdDLE1BQU07Z0NBQVk7Z0NBQzdFVixTQUFTO29DQUFFTSxVQUFVO29DQUFHSSxNQUFNO2dDQUFZO2dDQUMxQ1QsT0FBTztvQ0FBRUssVUFBVTtvQ0FBR0MsUUFBUUM7b0NBQVVDLFlBQVk7b0NBQVdDLE1BQU07Z0NBQVk7Z0NBQ2pGTixRQUFRO29DQUFFRSxVQUFVO29DQUFJQyxRQUFRQztvQ0FBVUUsTUFBTTtnQ0FBWTs0QkFDaEU7c0NBRUEsNEVBQUNsQyxrREFBS0E7Z0NBQUNVLFdBQVcsd0JBQThELE9BQXRDSCxhQUFhLE9BQU8sU0FBUztnQ0FDdkU0QixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQzVCO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDVCxpREFBTUEsQ0FBQ1EsR0FBRzs0QkFDUGMsU0FBUztnQ0FBRUMsU0FBUztnQ0FBS0MsT0FBTzs0QkFBSTs0QkFDcENDLFNBQVM7Z0NBQ1RDLEdBQUc7b0NBQUM7b0NBQUk7b0NBQUc7aUNBQUc7Z0NBQ2RILFNBQVM7b0NBQUM7b0NBQUs7aUNBQUU7Z0NBQ2pCQyxPQUFPO29DQUFDO29DQUFLO29DQUFHO2lDQUFJO2dDQUNwQkcsUUFBUTtvQ0FBQztvQ0FBRztpQ0FBSTs0QkFDaEI7NEJBQ0FDLFlBQVk7Z0NBQ1JGLEdBQUc7b0NBQUVHLFVBQVU7b0NBQUdDLFFBQVFDO29DQUFVQyxZQUFZO29DQUFXQyxNQUFNO2dDQUFZO2dDQUM3RVYsU0FBUztvQ0FBRU0sVUFBVTtvQ0FBR0ksTUFBTTtnQ0FBWTtnQ0FDMUNULE9BQU87b0NBQUVLLFVBQVU7b0NBQUdDLFFBQVFDO29DQUFVQyxZQUFZO29DQUFXQyxNQUFNO2dDQUFZO2dDQUNqRk4sUUFBUTtvQ0FBRUUsVUFBVTtvQ0FBSUMsUUFBUUM7b0NBQVVFLE1BQU07Z0NBQVk7NEJBQ2hFO3NDQUVBLDRFQUFDbEMsa0RBQUtBO2dDQUFDVSxXQUFXLHdCQUE4RCxPQUF0Q0gsYUFBYSxPQUFPLFNBQVM7Z0NBQ3ZFNEIsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQztHQXhFd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSBcIi4vVGV4dFRpdGxlXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUZXh0SDEgZnJvbSBcIi4vVGV4dEgxXCJcbmltcG9ydCBUZXh0UCBmcm9tIFwiLi9UZXh0UFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNzAwcHhdIHB0LTEwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1zbGF0ZS05NTAgdG8tc2xhdGUtOTAwIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+PFRleHRIMSB0ZXh0VmFsdWU9e1wiU21hcnQgUGxhbmV0YXJ5IFNlaXNtaWMgRGV0ZWN0aW9uXCJ9Lz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgZmxleCBqdXN0aWZ5LWNlbnRlciBwdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0UCB0ZXh0VmFsdWU9e1wiQnkgZmlsdGVyaW5nIG91dCBub2lzZSBhbmQgZm9jdXNpbmcgb24ga2V5IHNpZ25hbHMsIHdlIHByb3ZpZGUgYSB3ZWItYmFzZWQgcGxhdGZvcm0gdGhhdCB2aXN1YWxpemVzIHNlaXNtaWMgZXZlbnRzLCBtYWtpbmcgaXQgZWFzeSB0byBkZXRlY3QgYW5kIGFuYWx5emUgcXVha2VzIGVmZmljaWVudGx5IGFjcm9zcyBkaWZmZXJlbnQgcGxhbmV0cy5cIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1heC13LXNtIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIk9wdGlvbnNcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIHBiLTEgcHQtMTBcIj48VGV4dFRpdGxlIHRleHRWYWx1ZT17XCJTZWxlY3QgQW4gT3B0aW9uXCJ9IC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uSW5wdXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGlvbihlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9fSBpZD1cIk9wdGlvbnNcIiBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTkwMCBmb2N1czpib3JkZXItYmx1ZS05MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPkNob29zZSBhbiBvcHRpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1PXCI+TW9vbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUFcIj5NYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwLTEwIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAuNSwgc2NhbGU6IDAuOCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IFsyMCwgMCwgMjBdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLjgsIDFdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMC45LCAxLCAwLjldLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogWzAsIDM2MF0gXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHsgZHVyYXRpb246IDYsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6IFwicmV2ZXJzZVwiLCBlYXNlOiBcImVhc2VJbk91dFwiIH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZHVyYXRpb246IDIsIGVhc2U6IFwiZWFzZUluT3V0XCIgfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHsgZHVyYXRpb246IDYsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6IFwicmV2ZXJzZVwiLCBlYXNlOiBcImVhc2VJbk91dFwiIH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogeyBkdXJhdGlvbjogMzAsIHJlcGVhdDogSW5maW5pdHksIGVhc2U6IFwiZWFzZUluT3V0XCIgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e2B3LWZ1bGwgbWF4LXctWzIyMHB4XSAke3NlbGVjdGlvbiA9PSBcIk1BXCIgPyBcImZsZXhcIiA6IFwiaGlkZGVuXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9tYXJzMi5zdmdcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMC41LCBzY2FsZTogMC44IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogWzIwLCAwLCAyMF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAuOCwgMV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFswLjksIDEsIDAuOV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiBbMCwgMzYwXSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogeyBkdXJhdGlvbjogNiwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogXCJyZXZlcnNlXCIsIGVhc2U6IFwiZWFzZUluT3V0XCIgfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogeyBkdXJhdGlvbjogMiwgZWFzZTogXCJlYXNlSW5PdXRcIiB9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogeyBkdXJhdGlvbjogNiwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogXCJyZXZlcnNlXCIsIGVhc2U6IFwiZWFzZUluT3V0XCIgfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiB7IGR1cmF0aW9uOiAzMCwgcmVwZWF0OiBJbmZpbml0eSwgZWFzZTogXCJlYXNlSW5PdXRcIiB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17YHctZnVsbCBtYXgtdy1bMjIwcHhdICR7c2VsZWN0aW9uID09IFwiTU9cIiA/IFwiZmxleFwiIDogXCJoaWRkZW5cIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL21vb24zLnN2Z1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIm1vdGlvbiIsIlRleHRUaXRsZSIsInVzZVN0YXRlIiwiVGV4dEgxIiwiVGV4dFAiLCJIZWFkZXIiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0VmFsdWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0Iiwib25JbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwib3B0aW9uIiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJ5Iiwicm90YXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiZWFzZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.jsx\n"));

/***/ })

});