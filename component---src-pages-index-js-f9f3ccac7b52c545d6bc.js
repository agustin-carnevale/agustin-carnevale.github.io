(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var l=+new Date;!!t&&l<t+n?(clearTimeout(a),a=setTimeout((function(){t=l,e()}),n)):(t=l,e())}};t.default=n},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var n=a("Ijbi"),l=a("EbDI"),r=a("Bnag");e.exports=function(e){return n(e)||l(e)||r()}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("7oih"),s=a("YIkO"),o=a.n(s),i=a("dwco"),c=a.n(i);var m=function(e){return e.children},u=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){c.a.polyfill()},r.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,r=n.element,s=n.offset,o=n.timeout;if(l&&r)switch(l){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,s,o):console.log("Element not found: "+r)},r.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},r.render=function(){return l.a.createElement(m,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},n}(l.a.Component),f=a("TUGy"),d=a.n(f),p=a("obyI"),h=a.n(p);var E=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Skills",href:"skills"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Trainings",href:"trainings"},{content:"Interests",href:"interests"},{content:"Languages",href:"languages"}]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.tabs;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},h.a.firstName," ",h.a.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:d.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement(o.a,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.href,n=e.content;return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(u,{type:"id",element:a},l.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},n}(n.Component),v=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{className:"mb-0 my-name"},h.a.firstName,l.a.createElement("span",{className:"text-primary"},h.a.lastName)),l.a.createElement("div",{className:"subheading mb-5"},h.a.address," ·",l.a.createElement("a",{href:"mailto:"+h.a.email},h.a.email)),l.a.createElement("p",{className:"lead mb-5"},"Agustin Carnevale is a computer science passionate with an enterprising mind, currently focused on JavaScript technologies. He has 4+ years of solid experience in software engineering and IT related areas. He has been involved in the design, development and testing of websites as well as stand-alone applications in multiple legacy and current programming languages. He has a strong formal education base, on which he continues expanding his knowledge and learning new technologies and techniques."),l.a.createElement("div",{className:"social-icons"},h.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.a.createElement("a",{key:a,href:a,target:"_blank"},l.a.createElement("i",{className:"fab "+t}))})))))},g=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Experience"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Senior Web Developer (remote position, full-time)"),l.a.createElement("div",{className:"subheading mb-3"},"Sellry Inc. ,Colorado, USA."),l.a.createElement("p",null,"● E-commerce sites/apps development. Cutting edge technologies. High performance headless websites.",l.a.createElement("br",null),"● Technologies: Gatsby, React (Context, Hooks), Emotion (styled-components), GraphQL, Shopify. (JAMStack)")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Oct. 2019 – Present"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Software Engineer (remote position, full-time)"),l.a.createElement("div",{className:"subheading mb-3"},"KYND Ltd. ,London, UK."),l.a.createElement("p",null,"● FullStack JavaScript Engineer: React, Redux, Router, Node/Express, Postgresql.",l.a.createElement("br",null),"● Development of App and API as products for the cybersecurity industry.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Oct. 2018 – May. 2019"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Junior Advanced Web UI Developer"),l.a.createElement("div",{className:"subheading mb-3"},"Globant ,Buenos Aires, Argentina"),l.a.createElement("p",null,"● Front-end technologies including: React, React-Redux, HTML5, CSS3/4.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Apr. 2018 – Sep 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Web developer/designer"),l.a.createElement("div",{className:"subheading mb-3"},"Freelancer"),l.a.createElement("p",null,"● Working with clients from Fiverr and other platforms.",l.a.createElement("br",null),"● Setting up of online stores on Shopify.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Mar. 2017 – May. 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Junior Developer"),l.a.createElement("div",{className:"subheading mb-3"},"Metrogames S.A. ,Buenos Aires, Argentina"),l.a.createElement("p",null,"● He was part of a team that developed games for Facebook.",l.a.createElement("br",null),"● Main language he worked with: ActionScript.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Sep. 2010 – Feb. 2011"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Intern"),l.a.createElement("div",{className:"subheading mb-3"},"Conexia S.A. ,Buenos Aires, Argentina"),l.a.createElement("p",null,"● He helped in the maintenance of web applications related to the Health System in Argentina (HealthCare Insurance, ART, etc..).",l.a.createElement("br",null),"● Languages he worked with: Java and PostgreSQL as database engine.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Oct. 2008 – Mar. 2009")))))},b=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"College Education"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"UBA - FCEN (Universidad de Buenos Aires)"),l.a.createElement("div",{className:"subheading mb-3"},"BS in Computer Science"),l.a.createElement("div",null,"Computer Science - approved till 3rd year"),l.a.createElement("p",null,"Average: 9.50 (out of 10)")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Aug. 2008 – Aug. 2010"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"ITBA (Instituto Tecnológico de Buenos Aires)"),l.a.createElement("div",{className:"subheading mb-3"},"Informatics Engineering"),l.a.createElement("div",null,"Informatics Engineering - 1 third of the carrer completed"),l.a.createElement("p",null,"Average: 7.50 (out of 10)")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Mar. 2006 – Mar. 2008")))))},y=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Skills"),l.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-html5"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-css3-alt"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-js-square"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-node-js"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-npm"}))),l.a.createElement("div",{className:"subheading mb-3"},"Knowledge and main focus on:"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"JavaScript (ES6/+)"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"HTML5 - CSS3/4, Styled-Components"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Gatsby (React framework), JAMStack"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"React, Redux, Router, Redux-Form"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Node, Express"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"GraphQL"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Postgresql"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"JS Testing, Jest, Puppeteer"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Server Side Rendering"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Serverless API’s, Apps with AWS"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Docker and Kubernetes"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Git"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"CI (Continuous Integration)"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Amazon Web Services"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Tools: Jira, ActiveCollab / Slack / InVision / Keybase / Lokalise"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Methodologies, Scrum, Kanban"))))},N=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,"● Web Development latest, more advanced technologies",l.a.createElement("br",null),"● High performance sites/apps",l.a.createElement("br",null),"● Optimization",l.a.createElement("br",null),"● CyberSecurity",l.a.createElement("br",null),"● Low level programming stuff: Intel Assembly, C, C++.")))},w=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"trainings"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Trainings"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Course: “Docker and Kubernetes: The Complete Guide” (22 hours)"),l.a.createElement("p",null,"Description:",l.a.createElement("br",null),"Build, test, and deploy Docker applications with Kubernetes while using production-style development workflows. Github, Travis-CI, AWS Elastic Beanstalk, and Docker Hub as deployment pipeline. Integration of AWS ElastiCache for Redis and AWS Relational Database Service (RDS) for Postgres.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Nov. 2018 - Dec. 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Course: “AWS Serverless API's and Apps” (10 hours)"),l.a.createElement("p",null,"Description:",l.a.createElement("br",null),"Serverless computing with API Gateway, Lambda functions and DynamoDB. Cognito for users pool and authentication. Static SPA hosting with S3. CloudFront for content delivery optimization.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Nov. 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Course: “Server Side Rendering with React and Redux” (10 hours)"),l.a.createElement("p",null,"Description:",l.a.createElement("br",null),"Architectural considerations. Webpack-powered app. Secure data loading and state rehydration techniques. Routing with react-router and express. Error handling and authentication.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Oct. 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Course: “Node JS: Advanced Concepts” (20 hours)"),l.a.createElement("p",null,"Description:",l.a.createElement("br",null),"Caching data with Redis, speed up through clustering. Testing with Jest and Puppeteer. Image upload using AWS S3 service for storage. Integration of Travis for CI.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Sep. 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Course: “Node with React: Fullstack Web Development” (25 hours)"),l.a.createElement("p",null,"Description:",l.a.createElement("br",null),"Built from scratch and deployed a complete web app with NodeJS, Express, MongoDB, React, Redux, Redux-Form, Router. Including authentication with Google OAuth, billing/payments with Stripe, and email handling with SendGrid. Heroku for deployment.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Jul. 2018 – Aug. 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Course: “Complete Web Development with HTML5, CSS3,JS, jQuery, Ajax, PHP and MySQL” (50 hours)"),l.a.createElement("p",null,"Description:",l.a.createElement("br",null),"Full website creation integrating AdminLTE, PayPal, GoogleMaps, etc.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Nov. 2017 – Feb. 2018")))))},x=function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"languages"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Languages"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-book text-warning"}),"Spanish (native)"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-book text-warning"}),"English (intermediate+/advanced)"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-book text-warning"}),"French & Italian (very basic understanding)"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-book text-warning"}),"Learning Russian"))))};t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(E,null),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement(v,null),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(y,null),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(g,null),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(b,null),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(w,null),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(N,null),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(x,null)))}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=l.apply(null,n);s&&e.push(s)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},TUGy:function(e,t,a){e.exports=a.p+"static/avatar-1fda620ca2c890998d188c289551f456.png"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},YIkO:function(e,t,a){"use strict";a("V+eJ"),a("dZ+Y"),a("bWfx"),a("2Spj"),a("LK8F"),a("HAE/");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),r=n(a("lSNA")),s=n(a("RIqP")),o=n(a("lwsE")),i=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),u=n(a("W8MJ")),f=n(a("7W2i")),d=n(a("17x9")),p=n(a("q1tI")),h=n(a("TSYQ")),E=n(a("Fxm3"));var v=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.element]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,l=e.length;n<l;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],l=e||this.state.targetItems,r=!1,o=0,i=l.length;o<i;o++){var c=l[o],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=o===i-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,s.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,l=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var r=e.getBoundingClientRect(),s=n?t.height:window.innerHeight,o=this._getScrollDimension().scrollTop,i=o+s,c=n?r.top+o-t.top+l:r.top+o+l,m=c+e.offsetHeight;return c<i&&m>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,E.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,s=a.className,o=a.scrolledPastClassName,i=a.style,c=0,m=p.default.Children.map(n,(function(t,a){var n;if(!t)return null;var s=t.type,i=o&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,r.default)(n,"".concat(t.props.className),t.props.className),(0,r.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return p.default.createElement(s,(0,l.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,r.default)({},"".concat(s),s));return p.default.createElement(t,{className:u,style:i},m)}}]),t}(p.default.Component);t.default=v},a1gu:function(e,t,a){var n=a("cDf5"),l=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}},cDf5:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var a,n=e.HTMLElement||e.Element,l=468,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||i,scrollIntoView:n.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var a=d(this),n=a.getBoundingClientRect(),l=this.getBoundingClientRect();a!==t.body?(h.call(this,a,a.scrollLeft+l.left-n.left,a.scrollTop+l.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function u(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function f(e){var t=m(e,"Y")&&u(e,"Y"),a=m(e,"X")&&u(e,"X");return t||a}function d(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,r,o,i=(s()-t.startTime)/l;o=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*o)),n=t.startX+(t.x-t.startX)*a,r=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(a,n,l){var o,c,m,u,f=s();a===t.body?(o=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=r.scroll):(o=a,c=a.scrollLeft,m=a.scrollTop,u=i),p({scrollable:o,method:u,startTime:f,startX:c,startY:m,x:n,y:l})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Agustin Carnevale Resume",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/my-resume",firstName:"Agustin",lastName:"Carnevale",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/agustin-carnevale"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/agustin-carnevale-1254a6140/"}],email:"agustin387@hotmail.com",address:"Buenos Aires, Argentina."}}}]);
//# sourceMappingURL=component---src-pages-index-js-f9f3ccac7b52c545d6bc.js.map