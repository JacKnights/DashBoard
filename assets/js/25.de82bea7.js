(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{136:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"comment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comment","aria-hidden":"true"}},[t._v("#")]),t._v(" Comment")]),n("h2",{attrs:{id:"评论有关的api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#评论有关的api","aria-hidden":"true"}},[t._v("#")]),t._v(" 评论有关的API")]),n("h3",{attrs:{id:"get-api-comments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-api-comments","aria-hidden":"true"}},[t._v("#")]),t._v(" GET /api/comments")]),n("p",[t._v("获取所有评论信息")]),n("h4",{attrs:{id:"responses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#responses","aria-hidden":"true"}},[t._v("#")]),t._v(" Responses")]),n("p",[t._v("接口")]),n("p",[t._v("单条评论")]),n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Icomment")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    food_id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//标识种类")]),t._v("\n    food_name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//便于显示（不用再次发请求确定name）")]),t._v("\n    rating："),n("span",{attrs:{class:"token builtin"}},[t._v("number")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    content"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//likes: number; //评论点赞数")]),t._v("\n    comment_time"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//评论时间")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("评论列表")]),n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ICommentList")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    comments"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Icomment"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("为评论点赞通过前端向后端Post一个"),n("code",[t._v("Icomment")]),t._v("对象实现。")]),n("p",[t._v("返回值")]),n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"comment"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"food_id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"1"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"food_name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"原味牛杂面"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"rating"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"content"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"怎么只有这一个菜啊"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v('//"likes": 0,')]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//时间格式：yyyy-MM-dd hh:mm:ss")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"comment_time"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"2018-06-20 12:00:00"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{attrs:{class:"token string"}},[t._v('"food_id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"2"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{attrs:{class:"token string"}},[t._v('"food_name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"素粉面"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{attrs:{class:"token string"}},[t._v('"rating"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{attrs:{class:"token string"}},[t._v('"content"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"随便写写"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{attrs:{class:"token comment"}},[t._v('//"likes": 2,')]),t._v("\n         "),n("span",{attrs:{class:"token comment"}},[t._v("//时间格式：yyyy-MM-dd hh:mm:ss")]),t._v("\n         "),n("span",{attrs:{class:"token string"}},[t._v('"comment_time"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"2018-06-23 12:10:00"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h3",{attrs:{id:"post-api-comments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post-api-comments","aria-hidden":"true"}},[t._v("#")]),t._v(" POST /api/comments")]),n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"comment"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"food_id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"1"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"food_name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"原味牛杂面"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"rating"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"content"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"怎么只有这一个菜啊"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v('//"likes": 0,')]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//时间格式：yyyy-MM-dd hh:mm:ss")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"comment_time"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v('"2018-06-20 12:00:00"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);