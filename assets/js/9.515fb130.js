(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,s,a){"use strict";a.r(s);var t=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"umlet-使用说明之绘制用例图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#umlet-使用说明之绘制用例图","aria-hidden":"true"}},[e._v("#")]),e._v(" UMLet 使用说明之绘制用例图")]),t("p",[e._v("UMLet 是一款简单实用、开源的轻量级 UML 建模工具，它能够帮助我们快速地构建 UML 用例图、UML 静态图、UML 行为图和 UML 实现图等各种 UML 模型。UMLet 可以在 Windows、OS X 和 Linux 上独立运行，与大型软件 Visio 相比，更加灵活轻便，易于安装。")]),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),t("ol",[t("li",[t("p",[e._v("运行 UMLet 需要电脑上安装有 "),t("code",[e._v("java")]),e._v(" 运行环境，可以前往 "),t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle 官网")]),e._v(" ，根据自己的电脑系统下载相应的 "),t("code",[e._v("JDK")]),e._v("。")])]),t("li",[t("p",[e._v("安装好 "),t("code",[e._v("java")]),e._v(" 运行环境后，前往"),t("a",{attrs:{href:"http://umlet.com/changes.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("UMLet官网")]),e._v("下载相应的安装包，目前最新版本为 "),t("code",[e._v("UMLet 14.2 stand-alone")]),e._v(" ，下载完成后进行解压。")])]),t("li",[t("p",[e._v("如果是 Windows 系统，直接在解压的目录内双击 “"),t("strong",[e._v("Umlet.exe")]),e._v("” 或者 ”"),t("strong",[e._v("Umlet.jar")]),e._v("“ 即可打开；如果是 Linux 或者 OS X 系统，则在解压目录下打开终端，输入如下命令即可打开：")])])]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ java -jar umlet.jar\n")])]),t("h2",{attrs:{id:"主要界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要界面","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要界面")]),t("p",[e._v("UMLet 的主要界面如下：")]),t("p",[t("img",{attrs:{src:a(94),alt:"UMLet界面"}})]),t("p",[e._v("我们主要使用的是四个区：")]),t("ul",[t("li",[t("strong",[e._v("工作区")]),e._v("：用于绘制各种 UML 模型图。")]),t("li",[t("strong",[e._v("模版选择区")]),e._v("：用于选择 UML 的各种模版。")]),t("li",[t("strong",[e._v("模版区")]),e._v("：绘制模型图的元素绝大部分都要从模版区中选择并拖拽出去。")]),t("li",[t("strong",[e._v("文本控制区")]),e._v("：用于编写 UML 元素的属性，如类名称、字段、方法、背景色等等。")])]),t("h2",{attrs:{id:"绘制用例图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绘制用例图","aria-hidden":"true"}},[e._v("#")]),e._v(" 绘制用例图")]),t("p",[e._v("首先，在模版选择区选择 "),t("code",[e._v("UML Use Case")]),e._v(" 模版获取所有用例图的元素：")]),t("p",[t("img",{attrs:{src:a(93),alt:"用例图模板"}})]),t("p",[e._v("下面，我们将使用一个简单的酒店预定系统 "),t("code",[e._v("Reserve Hotel")]),e._v(" 来展示 UML 用例图主要元素的使用及绘制。")]),t("h3",{attrs:{id:"创建系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建系统","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建系统")]),t("p",[e._v("在 UML 模型中，一个系统代表一个应用，它包含了自己的名字以及所有合适的用例，通常用一个矩形代表一个系统。在 UMLet 中，把 "),t("code",[e._v("System")]),e._v(" 元素拖拽到工作区中某个位置，然后在文本控制区中把系统的名字改成 "),t("code",[e._v("Reserve Hotel")]),e._v(" ，把标题改成位于中间：")]),t("p",[t("img",{attrs:{src:a(92),alt:"创建系统"}})]),t("h3",{attrs:{id:"添加-actors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-actors","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加 Actors")]),t("p",[e._v("一个 "),t("code",[e._v("Actor")]),e._v(" 元素代表与系统进行交互的一个外部实体（可以是人或者其他外设），每一个 "),t("code",[e._v("Actor")]),e._v(" 都必须至少参与一个 "),t("code",[e._v("Use case")]),e._v(" 。"),t("code",[e._v("Actor")]),e._v(" 主要分为如下两类：")]),t("ul",[t("li",[t("strong",[t("code",[e._v("main actor")])]),e._v("：使用系统的各种用例，并且能够查看系统返回的用例执行结果，在用例图中用一个小人的图形来表示。")]),t("li",[t("strong",[t("code",[e._v("secondary actor")])]),e._v("：用于辅助系统完成其他必要的外部功能，如第三方支付功能、定位功能等，在用例图中用一个矩形和用 "),t("code",[e._v("<<>>")]),e._v(" 括起来的属性来表示。")])]),t("p",[e._v("我们这个酒店预定系统的 "),t("code",[e._v("main actor")]),e._v(" 只有一个，就是客户，我们将其命名为 "),t("code",[e._v("Traveller")]),e._v(" 。而 "),t("code",[e._v("secondary actor")]),e._v(" 主要有：")]),t("ul",[t("li",[t("code",[e._v("GPS")]),e._v(" 定位服务，方便用户查找酒店位置")]),t("li",[t("code",[e._v("Wechat pay")]),e._v(" 第三方支付服务，支持微信支付")]),t("li",[t("code",[e._v("Apple pay")]),e._v(" 第三方支付服务，支持苹果支付")]),t("li",[t("code",[e._v("Alipay")]),e._v(" 第三方支付服务，支持支付宝支付")])]),t("p",[e._v("把各个 "),t("code",[e._v("Actors")]),e._v(" 添加进工作区中，注意 "),t("code",[e._v("main actor")]),e._v(" 一般置于系统的左边，"),t("code",[e._v("secondary actor")]),e._v(" 一般置于系统的右边：")]),t("p",[t("img",{attrs:{src:a(91),alt:"添加角色"}})]),t("h3",{attrs:{id:"添加-use-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-use-case","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加 Use case")]),t("p",[e._v("一个 "),t("code",[e._v("Use case")]),e._v(" 代表了系统与用户进行交互的"),t("strong",[e._v("一组动作序列")]),e._v("（注意是一组动作而不是一个动作！），系统在完成该组动作序列后将会产生相应的结果返回给参与到该用例中的 "),t("code",[e._v("Actors")]),e._v(" 。每一个 "),t("code",[e._v("Use case")]),e._v(" 都必须具有如下过程：")]),t("p",[t("img",{attrs:{src:a(90),alt:"Use case"}})]),t("p",[e._v("总体上说，每一个 "),t("code",[e._v("Use case")]),e._v(" 都代表了系统所提供给用户的一项服务，因此，"),t("code",[e._v("Use case")]),e._v(" 的名字必须以动词开头！在 UML 用例图中，"),t("code",[e._v("Use case")]),e._v(" 主要使用一个椭圆来表示。")]),t("p",[e._v("在我们的酒店预定系统中，主要有以下的 "),t("code",[e._v("Use case")]),e._v(" ：")]),t("ul",[t("li",[t("code",[e._v("Find Hotels")]),e._v(" ，用户查询并选择自己满意的酒店。")]),t("li",[t("code",[e._v("Make reservation")]),e._v(" ，用户订购酒店。")]),t("li",[t("code",[e._v("Manage basket")]),e._v(" 用户管理自己的订购信息。")]),t("li",[t("code",[e._v("Pay")]),e._v(" 支付酒店费用。")])]),t("p",[e._v("在 UMLet 的模版选择区中选择相应数量的 "),t("code",[e._v("Use case")]),e._v(" 元素添加到 "),t("code",[e._v("Reserve Hotel")]),e._v(" 系统的方框中，并修改为相应的名字：")]),t("p",[t("img",{attrs:{src:a(89),alt:"添加 Use Case"}})]),t("h3",{attrs:{id:"includes：包含其他-use-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#includes：包含其他-use-case","aria-hidden":"true"}},[e._v("#")]),e._v(" includes：包含其他 Use case")]),t("p",[e._v("一个 "),t("code",[e._v("Use case")]),e._v(" 可以包含其他的 "),t("code",[e._v("Use case")]),e._v(" 。如果 "),t("code",[e._v("Use case B includes Use case A")]),e._v(" ，则我们说 "),t("code",[e._v("Use case B")]),e._v(" 依赖于 "),t("code",[e._v("Use case A")]),e._v(" ，也就是说要完成 "),t("code",[e._v("Use case B")]),e._v(" 中的所有动作，必须要完成 "),t("code",[e._v("Use case A")]),e._v(" 中的所有动作，即 "),t("code",[e._v("Use case A")]),e._v(" 中的动作序列是 "),t("code",[e._v("Use case B")]),e._v(" 中不可或缺的。包含操作在 UML 用例图中使用一个上方标记有 "),t("code",[e._v("<<includes>>")]),e._v(" 的虚线箭头 "),t("code",[e._v("----\x3e")]),e._v(" 来表示，没有箭头的一端表示"),t("strong",[e._v("包含者 (includes)")]),e._v("，有箭头的一端表示"),t("strong",[e._v("被包含者 (included)")]),e._v("，如在上例中表示为 "),t("code",[e._v("Use case B (includes)------\x3e Use case A")]),e._v("。")]),t("p",[e._v("在我们的酒店预定系统中，"),t("code",[e._v("make reservation")]),e._v(" 这个 "),t("code",[e._v("Use case")]),e._v(" 需要包含 "),t("code",[e._v("choose hotel")]),e._v(" 、"),t("code",[e._v("choose room type")]),e._v(" 、"),t("code",[e._v("confirm reservation")]),e._v(" 三个 "),t("code",[e._v("Use case")]),e._v(" ，分别实现预定酒店过程中需要实现的选择酒店、选择房间类型、确认订单的子服务；而在选择酒店的过程中，会涉及到根据以往用户的反馈对各种酒店进行排名的问题，因此 "),t("code",[e._v("choose hotel")]),e._v(" 也应该包含一个 "),t("code",[e._v("sort")]),e._v(" 的 "),t("code",[e._v("Use case")]),e._v("。我们把所有被包含的 "),t("code",[e._v("Use case")]),e._v(" 也添加进用例图中：")]),t("p",[t("img",{attrs:{src:a(88),alt:"包含用例"}})]),t("h3",{attrs:{id:"extends：扩展其他-use-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extends：扩展其他-use-case","aria-hidden":"true"}},[e._v("#")]),e._v(" extends：扩展其他 Use case")]),t("p",[e._v("对于某些用例来说，在完成基本功能的前提下，还可以提供一些额外的"),t("strong",[e._v("可选的（非必需）"),t("strong",[e._v("功能，这个时候可以把这些")]),e._v("可选的")]),e._v("功能转化成另一些 "),t("code",[e._v("Use case")]),e._v(" ，然后作为扩展功能补充到原来的 "),t("code",[e._v("Use case")]),e._v(" 中去。如果 "),t("code",[e._v("Use case A extends Use case B")]),e._v("，则说明 "),t("code",[e._v("Use case A")]),e._v(" 中实现的功能可以作为可选的功能添加到 "),t("code",[e._v("Use case B")]),e._v(" 中去。扩展操作在 UML 用例图中使用一个上方标记有 "),t("code",[e._v("<<extends>>")]),e._v(" 的虚线箭头 "),t("code",[e._v("----\x3e")]),e._v(" 来表示，没有箭头的一端表示扩展的用例 (extends)，有箭头的一端表示被扩展的对象 (extended)，如在上例中表示为 "),t("code",[e._v("Use case A (extends)------\x3e Use case B")]),e._v("。")]),t("p",[e._v("在我们的酒店预定系统中，一般情况下用户会根据酒店的名字来获得 "),t("code",[e._v("Find Hotels")]),e._v(" 这个服务，但是有时候，用户可能会希望通过指定地址和搜索地图的方式来找到自己满意的酒店，因此应该把 "),t("code",[e._v("find location")]),e._v(" 和 "),t("code",[e._v("find on map")]),e._v(" 这两个可选的 "),t("code",[e._v("Use case")]),e._v(" 添加到 "),t("code",[e._v("Find Hotels")]),e._v(" 的扩展功能中去。我们把所有扩展的 "),t("code",[e._v("Use case")]),e._v(" 也添加进用例图中：")]),t("p",[t("img",{attrs:{src:a(87),alt:"扩展用例"}})]),t("h3",{attrs:{id:"联系-use-case-与-actors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系-use-case-与-actors","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系 Use case 与 Actors")]),t("p",[e._v("到目前为止，我们已经基本上把 "),t("code",[e._v("Reserve Hotel")]),e._v(" 系统的所有元素都添加进用例图中了。前面已经说过，每一个 "),t("code",[e._v("Actor")]),e._v(" 都必须至少参与一个 "),t("code",[e._v("Use case")]),e._v(" ，因此我们把 "),t("code",[e._v("Use case")]),e._v(" 与 "),t("code",[e._v("Actors")]),e._v(" 联系起来。联系使用一个长实线 "),t("code",[e._v("——————")]),e._v(' 表示，意思是 "take part in"。')]),t("p",[e._v("在我们的酒店预定系统中，"),t("code",[e._v("Traveller")]),e._v(" 需要参与到 "),t("code",[e._v("Find Hotels")]),e._v(" 、"),t("code",[e._v("make reservation")]),e._v(" 、"),t("code",[e._v("manage basket")]),e._v(" 、"),t("code",[e._v("pay")]),e._v(" 这四个 "),t("code",[e._v("Use case")]),e._v(" 中去， "),t("code",[e._v("GPS API")]),e._v(" 需要参与到 "),t("code",[e._v("find on map")]),e._v(" 中去，三个第三方支付 "),t("code",[e._v("Actor")]),e._v(" 则需要参与到 "),t("code",[e._v("pay")]),e._v(" 中去，因此我们使用长实线把这些实体和 "),t("code",[e._v("Use case")]),e._v(" 联系起来：")]),t("p",[t("img",{attrs:{src:a(86),alt:"联系"}})]),t("h3",{attrs:{id:"改变-use-case-的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变-use-case-的属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 改变 Use case 的属性")]),t("p",[e._v("我们可以通过在文本控制框输入一些控制指令来改变 Use case 的属性，比如在我们的酒店预定系统中，"),t("code",[e._v("GPS API")]),e._v(" 以及第三方支付服务这些 "),t("code",[e._v("Actors")]),e._v(" 需要用到专门的技术，我们想把它们的背景变成黄色。点击这些 "),t("code",[e._v("Use case")]),e._v(" ，在它们的文本控制框中输入指令 "),t("code",[e._v("bg=yellow")]),e._v(" 即可把它们的背景变成黄色：")]),t("p",[t("img",{attrs:{src:a(85),alt:"背景色"}})]),t("p",[e._v("经过以上所有过程，我们成功地绘制了关于 "),t("code",[e._v("Reserve Hotel")]),e._v(" 系统的一个简单用例图。")]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 总结")]),t("p",[e._v("以上是我个人在学习使用 UMLet 工具进行 UML 建模时进行的一个实践，利用这篇博客来进行总结，希望能对学习 UML 的童鞋有所帮助。")]),t("h2",{attrs:{id:"参考网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考网站","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考网站")]),t("ol",[t("li",[e._v("http://www.upg-bulletin-se.ro/archive/2006-4/6.%20Dumitrascu%20UML%20II.pdf")]),t("li",[e._v("http://www3.travel.com.au/hotels.html")]),t("li",[e._v("https://www.awaimai.com/1448.html")])])])}],v=a(0),_=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},t,!1,null,null,null);s.default=_.exports},85:function(e,s,a){e.exports=a.p+"assets/img/bgcolor.1401dc9f.png"},86:function(e,s,a){e.exports=a.p+"assets/img/relation.c80766c3.png"},87:function(e,s,a){e.exports=a.p+"assets/img/extend_usecase.1da593f6.png"},88:function(e,s,a){e.exports=a.p+"assets/img/include_usecase.9ce3c486.png"},89:function(e,s,a){e.exports=a.p+"assets/img/add_Use_Case.9094e1e2.png"},90:function(e,s,a){e.exports=a.p+"assets/img/Use_case.86a966a8.png"},91:function(e,s,a){e.exports=a.p+"assets/img/add_actor.d70e9043.png"},92:function(e,s,a){e.exports=a.p+"assets/img/create_system.efb20060.png"},93:function(e,s,a){e.exports=a.p+"assets/img/usecase_model.760debb5.png"},94:function(e,s,a){e.exports=a.p+"assets/img/UMLet_main.f42ee902.png"}}]);