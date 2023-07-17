"use strict";
(() => {
var exports = {};
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4780:
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

// NAMESPACE OBJECT: ./app/api/post/route.js
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
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2023);
;// CONCATENATED MODULE: ./app/api/post/route.js

async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    let data = [
        {
            postId: 1,
            title: "Dynamic Routing and Static Generation",
            slug: "dynamic-routing-and-static-generation",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis cras sed felis eget velit.Consectetur libero id faucibus nisl tincidunt.Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.Volutpat consequat mauris nunc congue nisi vitae.Id aliquet risus feugiat in ante metus dictum at tempor.Sed blandit libero volutpat sed cras.Sed odio morbi quis commodo odio aenean sed adipiscing.Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod.",
            image: "https://images.pexels.com/photos/14958090/pexels-photo-14958090/free-photo-of-aerial-view-of-hills-in-the-death-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: [
                "Tech",
                "Next Js"
            ],
            date: "March 08, 2023",
            userId: 1
        },
        {
            postId: 2,
            title: "Learn How to Pre-render Pages Using Static Generation with Next.js",
            slug: "learn-how-to-pre-render-pages-using-static-generation-with-nextjs",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis cras sed felis eget velit.Consectetur libero id faucibus nisl tincidunt.Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.Volutpat consequat mauris nunc congue nisi vitae.Id aliquet risus feugiat in ante metus dictum at tempor.Sed blandit libero volutpat sed cras.Sed odio morbi quis commodo odio aenean sed adipiscing.Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod. Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod.",
            image: "https://images.pexels.com/photos/14213364/pexels-photo-14213364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: [
                "Tech",
                "Next Js",
                "React Js"
            ],
            date: "March 16, 2023",
            userId: 2
        },
        {
            postId: 3,
            title: "Preview Mode for Static Generation",
            slug: "preview-mode-for-static-generation",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis cras sed felis eget velit.Consectetur libero id faucibus nisl tincidunt.Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.Volutpat consequat mauris nunc congue nisi vitae.Id aliquet risus feugiat in ante metus dictum at tempor.Sed blandit libero volutpat sed cras.Sed odio morbi quis commodo odio aenean sed adipiscing.Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod. Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod. Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod.",
            image: "https://images.pexels.com/photos/13876506/pexels-photo-13876506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: [
                "Tech",
                "Vue Js"
            ],
            date: "March 25, 2023",
            userId: 1
        }
    ];
    if (slug) {
        data = data.find((d)=>d.slug == slug);
    }
    return next_response/* default */.Z.json({
        data
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpost%2Froute&name=app%2Fapi%2Fpost%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpost%2Froute.js&appDir=E%3A%5Cnextjs%5Cassign-02%5Capp&appPaths=%2Fapi%2Fpost%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/post/route","pathname":"/api/post","filename":"route","bundlePath":"app/api/post/route"},"resolvedPagePath":"E:\\nextjs\\assign-02\\app\\api\\post\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/post/route"

    

/***/ }),

/***/ 2023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(8438); //# sourceMappingURL=next-response.js.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [813,451,438], () => (__webpack_exec__(4780)));
module.exports = __webpack_exports__;

})();