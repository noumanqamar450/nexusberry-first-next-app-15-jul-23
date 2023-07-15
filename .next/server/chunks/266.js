exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 3223:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9556, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5457, 23))

/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(0);
;// CONCATENATED MODULE: ./app/@hero/loading.js


function Loading() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full py-12 flex justify-center flex-wrap gap-5 items-center md:justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[150px] h-[50px] bg-slate-200"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[300px] h-[20px] bg-slate-200"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/@hero/page.js



function Hero() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
        fallback: /*#__PURE__*/ jsx_runtime_.jsx(Loading, {}),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "py-12 flex justify-center items-center flex-wrap gap-10 md:justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-7xl font-bold",
                    children: "Blog."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "align-middle text-center",
                    children: "A dynamically generated blog example using Next.js and Markdown."
                })
            ]
        })
    });
}


/***/ }),

/***/ 8733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(7495);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1518);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.esm.js
var index_esm = __webpack_require__(8072);
;// CONCATENATED MODULE: ./app/components/PostCard.js





async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/user?id=${id}`);
    const data = await res.json();
    return data.users;
}
async function getComment(id) {
    const res = await fetch(`http://localhost:3000/api/comment?postId=${id}`);
    const data = await res.json();
    return data.comments;
}
async function PostCard(props) {
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    const { title, slug, image, date, category, userId, content, postId } = props.postData;
    const user = await getUser(userId);
    const comment = await getComment(postId);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/post/${slug}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "group relative w-full p-4 border h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image,
                    alt: title,
                    width: 1000,
                    height: 700,
                    className: "w-full"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-lg pt-4",
                            children: date
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-lg pt-4 flex gap-2 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaRegComment */.ZvA, {}),
                                " (",
                                comment.length,
                                ")"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "group-hover:underline text-2xl font-semibold pt-4",
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "text-lg pt-4",
                    children: [
                        content?.slice(0, 80),
                        "..."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "absolute top-8 right-8 flex",
                    children: category.map((c, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ml-4 px-3 py-1 font-semibold rounded bg-green-500 text-md",
                            children: c
                        }, i))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex gap-4 items-center mt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: user.image,
                            alt: user.name,
                            width: 100,
                            height: 100,
                            className: "w-[60px] rounded-full"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-lg font-semibold",
                            children: user.name
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/loading.js
var loading = __webpack_require__(6468);
;// CONCATENATED MODULE: ./app/page.js




async function getPost() {
    const res = await fetch(`http://localhost:3000/api/post`);
    const post = await res.json();
    return post.data;
}
async function Home() {
    const post = await getPost();
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "grid gap-4 grid-cols-1 mb-[80px] md:grid-cols-2 lg:grid-cols-3",
        children: post.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                fallback: /*#__PURE__*/ jsx_runtime_.jsx(loading["default"], {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx(PostCard, {
                    postData: p
                })
            }, p.postId))
    });
}


/***/ })

};
;