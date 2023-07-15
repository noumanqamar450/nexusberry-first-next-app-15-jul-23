exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 596:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 2490:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9556, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5457, 23))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 4618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2412);
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(7495);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1518);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(0);
;// CONCATENATED MODULE: ./app/components/Header.js




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "w-full px-6 py-3 flex justify-between content-center border-b-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "https://upload.wikimedia.org/wikipedia/en/0/02/DotBlog_domain_logo.png",
                        width: 100,
                        height: 50,
                        alt: "Logo"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu self-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "hidden sm:flex gap-5 content-center font-medium cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "transition hover:text-green-500",
                            children: "Menu Link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "transition hover:text-green-500",
                            children: "Menu Link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "transition hover:text-green-500",
                            children: "Menu Link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "transition hover:text-green-500",
                            children: "Menu Link"
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
;// CONCATENATED MODULE: ./app/components/Footer.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-100 w-full min-h-[250px] flex items-center border-t",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto flex justify-center flex-wrap gap-10 items-center md:justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-3xl font-semibold text-center",
                    children: "Dynamically Generated with Next.js."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "transition duration-300 p-3 px-5 bg-black text-white hover:bg-gray-100 hover:text-black border hover:border-black",
                    children: "Read Documentation"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/layout.js





const metadata = {
    title: "Next JS Blog Site",
    description: "Generated by create next app"
};
function RootLayout({ children, hero }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto p-5",
                    children: [
                        hero,
                        children
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 6468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function Loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full p-5 border",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[300px] bg-slate-200 w-full mb-4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[20px] w-[100px] bg-slate-200"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[20px] w-[100px] bg-slate-200"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[30px] w-full bg-slate-200 mb-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[20px] w-full bg-slate-200 mb-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-[20px] w-80 bg-slate-200 mb-4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-5 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[60px] w-[60px] bg-slate-200 rounded-full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[20px] w-[100px] bg-slate-200"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;