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

/***/ "(app-pages-browser)/./components/AboutUs.jsx":
/*!********************************!*\
  !*** ./components/AboutUs.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutUs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nconst data = [\n    {\n        image: \"\",\n        name: \"Yahir Tapia\"\n    }\n];\nfunction AboutUs() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-[600px] grid grid-cols-5\",\n            children: data.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"object-cover rounded-full h-32 w-32 \",\n                                src: member.image,\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/AboutUs.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/AboutUs.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: member.name\n                        }, void 0, false, {\n                            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/AboutUs.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/AboutUs.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/AboutUs.jsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lughx/Documents/Programs/SpaceApps/components/AboutUs.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = AboutUs;\nvar _c;\n$RefreshReg$(_c, \"AboutUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXRVcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUU5QixNQUFNQyxPQUFPO0lBQ1Q7UUFDSUMsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7Q0FDSDtBQUVjLFNBQVNDO0lBQ3BCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNWTCxLQUFLTSxHQUFHLENBQUNDLENBQUFBLHVCQUNOLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEO3NDQUNHLDRFQUFDTCxrREFBS0E7Z0NBQUNNLFdBQVU7Z0NBQXVDRyxLQUFLRCxPQUFPTixLQUFLO2dDQUFFUSxPQUFPO2dDQUFLQyxRQUFROzs7Ozs7Ozs7OztzQ0FFbkcsOERBQUNOOzRCQUFJQyxXQUFVO3NDQUFRRSxPQUFPTCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFEO0tBZndCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fib3V0VXMuanN4PzEzODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGltYWdlOiBcIlwiLFxuICAgICAgICBuYW1lOiBcIllhaGlyIFRhcGlhXCJcbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0VXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVs2MDBweF0gZ3JpZCBncmlkLWNvbHMtNVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChtZW1iZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGgtMzIgdy0zMiBcIiBzcmM9e21lbWJlci5pbWFnZX0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPnttZW1iZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsImRhdGEiLCJpbWFnZSIsIm5hbWUiLCJBYm91dFVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVtYmVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AboutUs.jsx\n"));

/***/ })

});