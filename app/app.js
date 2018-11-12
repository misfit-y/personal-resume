import React from "react";
import ReactDOM from "react-dom";
import StyleEditor from "./StyleEditor.js";
import ResumeEditor from "./ResumeEditor.js";
import "./style/reset.css";
import Prism from "prismjs";

class ReactClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: "",
		};
		this.interval = 1;
		this.resumeEditorContent = `
# 孟岳


## 项目经历

### BBS论坛管理系统

### 主要功能模块:
	1.会员的登陆与注册。
	2.我的社区：我的个人信息修改，修改头像，我要提问，我发布的帖子，我未结的帖子，我回复的帖子，修改密码,我的社区积分统计。
	3.浏览帖子: 浏览未结帖子，浏览已结帖子，浏览已置顶帖子。
	4.用户的发帖和回帖：普通会员发帖，版主、管理员的发帖或公告。
	5.结贴功能：帖子结贴，帖子加分。
	6.前台帖子管理：版主对前台的帖子删除，帖子置顶，及小黑屋功能。
	7.统计功能：各版块总积分排行版、各版块每月得分排行版、论坛总积分排行版、社区每月得分前十名排行版。
	8.后台管理：管理员对会员管理，帖子管理，帖子分类管理，积分与等级制度管理
### 项目描述:
	系统是B/S模式实现，WEB层使用JSP技术，控制转发层使用springMVC来控制整个系统的业务逻辑流程，
	业务逻辑层使用轻量级的Java Bean，通过JDBC操作数据库. 使用XML能规定应用程序的行为
### 负责模块:
	个人参与了后台管理模块的开发,主要是对会员和版主的管理,查询出会员在哪一个版块,以及可以将某一个会员设置为版主,
	如果会员和版主违反规定可对会员和版主进行删除操作,并进行永久删除，以及论坛发帖的增删改查功能。


### [Animation Resume](https://shiningdan.github.io/react-animation-resume/) (点击链接试试吧)

* React 和 Webpack 制作的简历自动演示效果。

## 教育经历

### **南京农业大学 - 机械工程**             

## 其他

cet-4

## 博客

**GitHub: **https://github.com/ShiningDan
**Animation Resume: https://shiningdan.github.io/react-animation-resume/**

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/ShiningDan/react-animation-resume)，打造你自己的简历！`;
		
		this.styleEditorContent = [`/*
* Inspired by http://strml.net/
* 
* Hello, 我是孟岳
*
* 我用 React 做了一份简易的动态简历
* 希望大家能够喜欢 :)
*/

/* 所以我们就开始吧！首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all 1s;
  transition: all 1s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: #425261; 
}
/* 文字直接显示在页面上，没有任何装饰，真的人反人类呢！所以我们来给文字加点装饰吧~~ */
.styleEditor {
  position: fixed; left: 0; top: 0;
  background-color: #303030;
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 作为一个程序员，我们不可以太沉闷哦~~，给自己的代码加一点色彩吧 */
.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #E86E75; }
.token.property{ color: #F78C6C; }
.token.punctuation{ color: #88DCFE; }
.token.function{ color: #82AAFF; }

/* 加一点 3D 效果，更加地酷炫 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0; 
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 不知道以上对代码框的修改你是否喜欢呢？ */

/* 接下来我给自己准备一个编辑器，用来存放我的简历内容 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}

/* 好了，我开始写简历了 */
`,
`
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 *           3          
 *           2          
 *           1          
 *          ok！
 */
`,
`
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h1{
  display: block;
  width: 80px;
  margin: 0 auto;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor h3{
	display: inline-block;
	margin: 0.5em 0;
}
.resumeEditor a{
	color: #000;
}
.resumeEditor ul{
	list-style: none;
}
.resumeEditor ul>li::before {
	content: "•";
	margin-left: 1em;
	margin-right: 0.5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
/*
* I hope you enjoyed this.
*/
`];
	}

	addToStyle(char) {
		this.setState({
			style: this.state.style + char,
		});
	}

	replaceStyle(style) {
		this.setState({
			style: style,
		});
	}

	replaceStyleEditorContent() {
		
	}

	showStyleEditorContent(n) {
		let lastContentLength = 0;
		if (n !== 0) {lastContentLength = this.state.style.length;}
		let style = this.styleEditorContent[n];
		let len = style.length;
		return new Promise((resolve, reject) => {
			let showStyle = function () {
				let currentLen = this.state.style.length - lastContentLength;
				if (currentLen < len) {
					let char = style.substring(currentLen, currentLen+1);
					this.refs.StyleEditor.addToContent(char);
					this.addToStyle(char);
					setTimeout(showStyle, this.interval);
				} else {
					resolve();
				}
			}.bind(this);
			showStyle();
		});
	}

	showResumeContent() {
		let content = this.resumeEditorContent;
		let len = content.length;
		return new Promise((resolve, reject) => {
			let showContent = function() {
				let currentLen = this.refs.ResumeEditor.getCurrentContentLength();
				if (currentLen < len) {
					let char = content.substring(currentLen, currentLen+1);
					this.refs.ResumeEditor.addToContent(char);
					setTimeout(showContent, this.interval);
				} else {
					resolve();
				}
			}.bind(this);
			showContent();
		});
	}

	setResumeMarkdown() {
		return new Promise((resolve, reject) => {
			setTimeout(this.refs.ResumeEditor.setIsMarkdown(true), this.interval);
			resolve();
		}); 
	}

	async startShow() {
		await this.showStyleEditorContent(0).then(function() {console.log('done! show Content 0')});
		await this.showResumeContent();
		await this.showStyleEditorContent(1).then(function() {console.log('done! show Content 1')});
		await this.setResumeMarkdown();
		await this.showStyleEditorContent(2).then(function() {console.log('done! show Content 2')});
	}

	componentDidMount() {
		this.startShow();
		console.log(111);
		// this.refs.StyleEditor.replaceContent(this.content[0]);
		// this.replaceStyle(this.content[0]); 
		// this.refs.ResumeEditor.replaceContent("");
	}

	render() {
		return (
			<div>
				<StyleEditor ref="StyleEditor" />
				<ResumeEditor ref="ResumeEditor" />
				<style>{this.state.style}</style>
			</div>);
	}
}
ReactDOM.render(<ReactClass />, document.getElementById("content"));