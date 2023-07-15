"use strict";
(() => {
var exports = {};
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/comment/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(3488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: ./app/api/comment/route.js
const { NextResponse } = __webpack_require__(8819);
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("postId");
    let comments = [
        {
            commentId: 1,
            name: "User Name 1",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 1
        },
        {
            commentId: 2,
            name: "User Name 2",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 1
        },
        {
            commentId: 3,
            name: "User Name 1",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 2
        },
        {
            commentId: 4,
            name: "User Name 2",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 2
        },
        {
            commentId: 5,
            name: "User Name 3",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 2
        },
        {
            commentId: 6,
            name: "User Name 4",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 2
        },
        {
            commentId: 7,
            name: "User Name 1",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 3
        },
        {
            commentId: 8,
            name: "User Name 2",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 3
        },
        {
            commentId: 9,
            name: "User Name 3",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.",
            postId: 3
        }
    ];
    if (id) {
        comments = comments.filter((c)=>c.postId == id);
    }
    return NextResponse.json({
        comments
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcomment%2Froute&name=app%2Fapi%2Fcomment%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcomment%2Froute.js&appDir=E%3A%5Cnextjs%5Cassign-02%5Capp&appPaths=%2Fapi%2Fcomment%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/comment/route","pathname":"/api/comment","filename":"route","bundlePath":"app/api/comment/route"},"resolvedPagePath":"E:\\nextjs\\assign-02\\app\\api\\comment\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/comment/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [813,451,438,819], () => (__webpack_exec__(2227)));
module.exports = __webpack_exports__;

})();