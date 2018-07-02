(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{116:function(_,v,l){"use strict";l.r(v);var i=l(0),t=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("div",{staticClass:"content"},[l("h1",{attrs:{id:"详细用例建模"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#详细用例建模","aria-hidden":"true"}},[_._v("#")]),_._v(" 详细用例建模")]),l("p",[l("strong",[_._v("范围：")]),_._v(" 餐馆扫码点餐应用")]),l("p",[l("strong",[_._v("级别：")]),_._v(" 用户目标")]),l("p",[l("strong",[_._v("主要参与者：")]),_._v(" 顾客")]),l("p",[l("strong",[_._v("涉众及其关注点：")])]),l("ul",[l("li",[_._v("顾客：希望可以快速浏览菜单找到招牌菜和各种不同菜系；希望便捷、清晰地看到菜品介绍和价格；希望可以迅速点餐而不用排队；希望可以和伙伴一起订菜而不用互相推让菜单；希望有现成套餐可供选择，也可以自己组合套餐；希望可以随时去除已经勾选的菜；希望可以快速了解并享受优惠；希望可以自由选择支付方式、不用排队买单；希望可以自己决定菜品的做法和口味；希望可以中途加菜；希望不会送错菜、漏菜；希望可以按照用餐时的吃菜顺序点餐；希望得到点餐票据，以便核查。")]),l("li",[_._v("厨师：希望可以及时准确地得到顾客订单、具体菜名、口味和做法要求。")]),l("li",[_._v("送餐员：希望可以准确地得到顾客订单、菜品和对应的用餐台号；希望不会送错餐台；希望可以迅速了解不同顾客的付款方式和其他服务要求。")]),l("li",[_._v("经理：希望可以随时随地掌握餐馆工作情况和用餐交易记录，并无需前往餐馆核算。")]),l("li",[_._v("餐馆：希望准确地记录交易，满足顾客要求；希望确保记录了支付授权服务的支付票据。希望能够自动、快速地更新账务和库存信息。")])]),l("p",[l("strong",[_._v("前置条件：")]),_._v(" 网络状况良好，餐馆正常营业")]),l("p",[l("strong",[_._v("成功保证：")]),_._v(" 存储交易信息，更新账务和库存信息，生成票据，记录支付授权的批准。")]),l("p",[l("strong",[_._v("主成功场景（基本流程）：")])]),l("ol",[l("li",[_._v("顾客入座后，打开手机微信扫描餐台上的二维码，从浏览器进入点餐页面。")]),l("li",[_._v("系统在对应餐台号码的列表上开始一次新的点餐记录。")]),l("li",[_._v("系统主界面上的“菜单”栏对当前所处餐馆可点菜品进行分类显示，并且显示每个菜品的价格、缩略图、累积下单数、顾客评价。")]),l("li",[_._v("顾客挑选所点菜品，加入“餐盘”。")]),l("li",[_._v("系统逐条记录所点菜品，并显示已选菜品的名称、简单介绍、数量和价格。")])]),l("p",[l("strong",[_._v("顾客重复4～5步，直到点餐结束。")])]),l("ol",{attrs:{start:"6"}},[l("li",[_._v("点餐完毕，系统显示总价格，顾客点击确认菜品信息")]),l("li",[_._v("确认无误后，提交订单")]),l("li",[_._v("顾客点击支付选项，系统显示各种支付方式。")]),l("li",[_._v("顾客挑选喜欢的支付方式进行付款，系统处理支付。")]),l("li",[_._v("系统记录完整的菜单和交易信息，并将菜单和餐台号等信息传送到厨房以及送餐员的 POS 机中，厨师开始准备菜品，送餐员准备送餐。")]),l("li",[_._v("支付完成后，系统打印票据，随后跳转至“评价”页面，等待顾客评价。")]),l("li",[_._v("顾客获取票据并等待用餐。")]),l("li",[_._v("顾客用餐结束后，根据自己的体验在“评价”页面对所选菜品和餐馆整体印象进行评价。")]),l("li",[_._v("顾客完成评价后离开餐馆，系统结束餐台号对应的本次交易。")])]),l("p",[l("strong",[_._v("扩展（替代流程）")])]),l("p",[_._v("*"),l("strong",[_._v("a.")]),_._v(" 系统在任意时刻失败： 需要完全恢复之前顾客已经预定的订单。")]),l("ol",[l("li",[_._v("重启系统，确认系统恢复到正常状态")]),l("li",[_._v("利用之前的记录日志，将系统恢复到崩溃前的状态。")])]),l("p",[l("strong",[_._v("3a.")]),_._v(" 当天有正处于折扣状态的菜品")]),l("ol",[l("li",[_._v("将其置顶显示，有多个折扣菜品时综合以往顾客的评价从高到低排序显示。")]),l("li",[_._v("醒目标注其原价，折扣价以及折扣力度。")])]),l("p",[l("strong",[_._v("3b.")]),_._v(" 餐馆有吸引顾客的“招牌菜”")]),l("ol",[l("li",[_._v("将其置顶显示，有多个“招牌菜”时综合以往顾客的评价从高到低排序显示。")]),l("li",[_._v("备注（分类）为“招牌菜”。")])]),l("p",[l("strong",[_._v("3c.")]),_._v(" 餐馆有实惠的组合套餐")]),l("ol",[l("li",[_._v("将其置顶显示，有多个组合套餐时综合以往顾客的评价从高到低排序显示。")]),l("li",[_._v("醒目标注套餐适宜多少人食用，附赠的菜品及优惠力度等。")])]),l("p",[l("strong",[_._v("4a.")]),_._v(" 顾客挑选菜品已售完")]),l("ol",[l("li",[_._v("在前端界面提示顾客该菜品已售完")])]),l("p",[l("strong",[_._v("4b.")]),_._v(" 顾客在挑选时点击该界面上的菜品")]),l("ol",[l("li",[l("p",[_._v("显示菜品详细信息，包括菜品大图，菜品详细介绍，口味等。")]),l("p",[l("strong",[_._v("1a.")]),_._v(" 菜品无图片信息")]),l("ol",[l("li",[_._v("显示默认一张菜品图片， 或者直接显示暂无图片")])]),l("p",[l("strong",[_._v("1b.")]),_._v(" 菜品暂无相关的详细介绍")]),l("ol",[l("li",[_._v("将主界面中的菜品简介显示")]),l("li",[_._v("可以给与相关的链接供顾客参考")])])]),l("li",[l("p",[_._v("显示菜品的评分以及销量，供顾客参考")])])]),l("p",[l("strong",[_._v("4c.")]),_._v(" 顾客希望直接搜索自己的目标菜品")]),l("ol",[l("li",[l("p",[_._v("顾客主界面上的搜索框输入菜名，点击搜索。")])]),l("li",[l("p",[_._v("系统显示搜索到的菜品详细信息。")]),l("p",[l("strong",[_._v("2a.")]),_._v(" 搜索的菜名无相应的菜品")]),l("ol",[l("li",[_._v("在前端界面提示顾客搜索不到相应的菜品")])])])]),l("p",[l("strong",[_._v("4d.")]),_._v(" 顾客的其他伙伴希望加入一起点餐")]),l("ol",[l("li",[_._v("其他伙伴打开手机微信扫描餐台上的二维码。")]),l("li",[_._v("系统检测到当前餐台上正在点餐，则不建立新的点餐记录，直接把加入的顾客合并到当前点餐记录中去。")]),l("li",[_._v("系统在页面的“餐盘”上分别显示当前顾客所选菜品与其他伙伴所选菜品。")])]),l("p",[l("strong",[_._v("5a.")]),_._v(" 选择的菜品数量大于当前库存数量")]),l("ol",[l("li",[_._v("数据提交时，后台系统发现错误，返回该错误")]),l("li",[_._v("前端将返回的错误表达给顾客")]),l("li",[_._v("将“餐盘”中的该菜品数量置为当前库存剩余量")])]),l("p",[l("strong",[_._v("5b.")]),_._v(" 顾客在选择时删去了某菜品的所有数量（即该菜品选择数量为 0）")]),l("ol",[l("li",[_._v("在“餐盘”中把该菜品栏目项删去")])]),l("p",[l("strong",[_._v("5c.")]),_._v(" 顾客在选择时删去了当前“餐盘”中所有菜品")]),l("ol",[l("li",[_._v("在“餐盘”中删除所有菜品条目")]),l("li",[_._v("“餐盘”不显示")])]),l("p",[l("strong",[_._v("5d.")]),_._v(" 顾客在选择了一些商品后误退出了该页面")]),l("ol",[l("li",[_._v("页面在顾客选择时记录选择信息")]),l("li",[_._v("在顾客重新进入时恢复顾客之前的选择")])]),l("p",[l("strong",[_._v("6a.")]),_._v(" 顾客发现点菜错误")]),l("ol",[l("li",[_._v("重新返回点菜界面，并在“餐盘”中显示之前点过的菜")])]),l("p",[l("strong",[_._v("6b.")]),_._v(" 顾客希望某些菜品可以根据自己的口味要求来制作")]),l("ol",[l("li",[_._v("顾客在备注一栏填写自己对于各个菜品的制作要求")]),l("li",[_._v("系统把顾客的要求一起添加到订单中")])]),l("p",[l("strong",[_._v("7a.")]),_._v(" 提交订单之后顾客希望取消订单")]),l("ol",[l("li",[_._v("顾客提交取消申请，由前端发送数据到后台系统")]),l("li",[_._v("系统处理，在餐馆显示界面及时取消显示该订单")])]),l("p",[l("strong",[_._v("8a.")]),_._v(" 不同支付方式支付")]),l("p",[l("strong",[_._v("8b.")]),_._v(" 订单提交之后，支付超时")]),l("ol",[l("li",[_._v("执行取消订单操作")]),l("li",[_._v("在餐馆显示页面去除该订单信息。")])]),l("p",[l("strong",[_._v("13a.")]),_._v(" 顾客用餐结束后不想进行任何评价")]),l("ol",[l("li",[_._v("顾客直接关闭点餐页面。")])])])}],!1,null,null,null);v.default=t.exports}}]);