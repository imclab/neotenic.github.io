protobowl_auth_build = 'Wed Jun 05 2013 20:41:38 GMT-0400 (EDT)';

window.Modernizr=function(e,t,o){function n(e){p.cssText=e}function i(e,t){return typeof e===t}var a,r,s,u="2.6.1",l={},h=!0,c=t.documentElement,d="modernizr",f=t.createElement(d),p=f.style,m=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y={},g=[],b=g.slice,w=function(e,o,n,i){var a,r,s,u=t.createElement("div"),l=t.body,h=l?l:t.createElement("body");if(parseInt(n,10))for(;n--;)s=t.createElement("div"),s.id=i?i[n]:d+(n+1),u.appendChild(s);return a=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),u.id=d,(l?u:h).innerHTML+=a,h.appendChild(u),l||(h.style.background="",c.appendChild(h)),r=o(u,e),l?u.parentNode.removeChild(u):h.parentNode.removeChild(h),!!r},v={}.hasOwnProperty;s=i(v,"undefined")||i(v.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return v.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var o=b.call(arguments,1),n=function(){if(this instanceof n){var i=function(){};i.prototype=t.prototype;var a=new i,r=t.apply(a,o.concat(b.call(arguments)));return Object(r)===r?r:a}return t.apply(e,o.concat(b.call(arguments)))};return n}),y.touch=function(){var o;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?o=!0:w(["@media (",m.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){o=9===e.offsetTop}),o};for(var k in y)s(y,k)&&(r=k.toLowerCase(),l[r]=y[k](),g.push((l[r]?"":"no-")+r));return l.addTest=function(e,t){if("object"==typeof e)for(var n in e)s(e,n)&&l.addTest(n,e[n]);else{if(e=e.toLowerCase(),l[e]!==o)return l;t="function"==typeof t?t():t,h&&(c.className+=" "+(t?"":"no-")+e),l[e]=t}return l},n(""),f=a=null,function(e,t){function o(e,t){var o=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return o.innerHTML="x<style>"+t+"</style>",n.insertBefore(o.lastChild,n.firstChild)}function n(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=y[e[p]];return t||(t={},m++,e[p]=m,y[m]=t),t}function a(e,o,n){if(o||(o=t),h)return o.createElement(e);n||(n=i(o));var a;return a=n.cache[e]?n.cache[e].cloneNode():f.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),a.canHaveChildren&&!d.test(e)?n.frag.appendChild(a):a}function r(e,o){if(e||(e=t),h)return e.createDocumentFragment();o=o||i(e);for(var a=o.frag.cloneNode(),r=0,s=n(),u=s.length;u>r;r++)a.createElement(s[r]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(o){return g.shivMethods?a(o,e,t):t.createElem(o)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function u(e){e||(e=t);var n=i(e);return g.shivCSS&&!l&&!n.hasCSS&&(n.hasCSS=!!o(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),h||s(e,n),e}var l,h,c=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,p="_html5shiv",m=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(o){l=!0,h=!0}}();var g={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:h,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:r};e.html5=g,u(t)}(this,t),l._version=u,l._prefixes=m,l.testStyles=w,c.className=c.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+g.join(" "):""),l}(this,this.document),function(e,t,o){function n(e){return"[object Function]"==y.call(e)}function i(e){return"string"==typeof e}function a(){}function r(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=g.shift();b=1,e?e.t?p(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):b=0}function u(e,o,n,i,a,u,l){function h(t){if(!f&&r(c.readyState)&&(w.r=f=1,!b&&s(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&p(function(){k.removeChild(c)},50);for(var n in x[o])x[o].hasOwnProperty(n)&&x[o][n].onload()}}var l=l||d.errorTimeout,c=t.createElement(e),f=0,y=0,w={t:n,s:o,e:a,a:u,x:l};1===x[o]&&(y=1,x[o]=[]),"object"==e?c.data=o:(c.src=o,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){h.call(this,y)},g.splice(i,0,w),"img"!=e&&(y||2===x[o]?(k.insertBefore(c,v?null:m),p(h,l)):x[o].push(c))}function l(e,t,o,n,a){return b=0,t=t||"j",i(e)?u("c"==t?$:_,e,t,this.i++,o,n,a):(g.splice(this.i++,0,e),1==g.length&&s()),this}function h(){var e=d;return e.loader={load:l,i:0},e}var c,d,f=t.documentElement,p=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,g=[],b=0,w="MozAppearance"in f.style,v=w&&!!t.createRange().compareNode,k=v?f:m.parentNode,f=e.opera&&"[object Opera]"==y.call(e.opera),f=!!t.attachEvent&&!f,_=w?"object":f?"script":"img",$=f?"script":_,E=Array.isArray||function(e){return"[object Array]"==y.call(e)},C=[],x={},A={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,o,n,e=e.split("!"),i=C.length,a=e.pop(),r=e.length,a={url:a,origUrl:a,prefixes:e};for(o=0;r>o;o++)n=e[o].split("="),(t=A[n.shift()])&&(a=t(a,n));for(o=0;i>o;o++)a=C[o](a);return a}function r(e,i,a,r,s){var u=t(e),l=u.autoCallback;u.url.split(".").pop().split("?").shift(),u.bypass||(i&&(i=n(i)?i:i[e]||i[r]||i[e.split("/").pop().split("?")[0]]),u.instead?u.instead(e,i,a,r,s):(x[u.url]?u.noexec=!0:x[u.url]=1,a.load(u.url,u.forceCSS||!u.forceJS&&"css"==u.url.split(".").pop().split("?").shift()?"c":o,u.noexec,u.attrs,u.timeout),(n(i)||n(l))&&a.load(function(){h(),i&&i(u.origUrl,s,r),l&&l(u.origUrl,s,r),x[u.url]=2})))}function s(e,t){function o(e,o){if(e){if(i(e))o||(c=function(){var e=[].slice.call(arguments);d.apply(this,e),f()}),r(e,c,t,0,l);else if(Object(e)===e)for(u in s=function(){var t,o=0;for(t in e)e.hasOwnProperty(t)&&o++;return o}(),e)e.hasOwnProperty(u)&&(!o&&!--s&&(n(c)?c=function(){var e=[].slice.call(arguments);d.apply(this,e),f()}:c[u]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(d[u])),r(e[u],c,t,u,l))}else!o&&f()}var s,u,l=!!e.test,h=e.load||e.both,c=e.callback||a,d=c,f=e.complete||a;o(l?e.yep:e.nope,!!h),h&&o(h)}var u,l,c=this.yepnope.loader;if(i(e))r(e,0,c,0);else if(E(e))for(u=0;u<e.length;u++)l=e[u],i(l)?r(l,0,c,0):E(l)?d(l):Object(l)===l&&s(l,c);else Object(e)===e&&s(e,c)},d.addPrefix=function(e,t){A[e]=t},d.addFilter=function(e){C.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",c=function(){t.removeEventListener("DOMContentLoaded",c,0),t.readyState="complete"},0)),e.yepnope=h(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,o,n,i,u,l){var h,c,f=t.createElement("script"),i=i||d.errorTimeout;f.src=e;for(c in n)f.setAttribute(c,n[c]);o=l?s:o||a,f.onreadystatechange=f.onload=function(){!h&&r(f.readyState)&&(h=1,o(),f.onload=f.onreadystatechange=null)},p(function(){h||(h=1,o(1))},i),u?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,o,n,i,r,u){var l,i=t.createElement("link"),o=u?s:o||a;i.href=e,i.rel="stylesheet",i.type="text/css";for(l in n)i.setAttribute(l,n[l]);r||(m.parentNode.insertBefore(i,m),p(o,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csscalc",function(e,t,o){return t="width:",o="calc(10px);",e=document.createElement("div"),e.style.cssText=t+Modernizr._prefixes.join(o+t),!!e.style.length}),!function(e){e(function(){"use strict";e.support.transition=function(){var e=function(){var e,t=document.createElement("bootstrap"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(e in o)if(void 0!==t.style[e])return o[e]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";function t(){e(n).each(function(){o(e(this)).removeClass("open")})}function o(t){var o,n=t.attr("data-target");return n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),o=n&&e(n),o&&o.length||(o=t.parent()),o}var n="[data-toggle=dropdown]",i=function(t){var o=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){o.parent().removeClass("open")})};i.prototype={constructor:i,toggle:function(){var n,i,a=e(this);if(!a.is(".disabled, :disabled"))return n=o(a),i=n.hasClass("open"),t(),i||n.toggleClass("open"),a.focus(),!1},keydown:function(t){var i,a,r,s,u;if(/(38|40|27)/.test(t.keyCode)&&(i=e(this),t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled"))){if(r=o(i),s=r.hasClass("open"),!s||s&&27==t.keyCode)return 27==t.which&&r.find(n).focus(),i.click();a=e("[role=menu] li:not(.divider):visible a",r),a.length&&(u=a.index(a.filter(":focus")),38==t.keyCode&&u>0&&u--,40==t.keyCode&&u<a.length-1&&u++,~u||(u=0),a.eq(u).focus())}}};var a=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var o=e(this),n=o.data("dropdown");n||o.data("dropdown",n=new i(this)),"string"==typeof t&&n[t].call(o)})},e.fn.dropdown.Constructor=i,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.dropdown.data-api",t).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",n,i.prototype.toggle).on("keydown.dropdown.data-api",n+", [role=menu]",i.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,o){this.options=o,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,o=e.Event("show");this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(e("body").addClass("modal-open"),this.isShown=!0,this.escape(),this.backdrop(function(){var o=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),o&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1).focus(),t.enforceFocus(),o?t.$element.one(e.support.transition.end,function(){t.$element.trigger("shown")}):t.$element.trigger("shown")}))},hide:function(t){t&&t.preventDefault(),t=e.Event("hide"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,e("body").removeClass("modal-open"),this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]===e.target||t.$element.has(e.target).length||t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,o=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(o),t.hideModal()})},hideModal:function(){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=e.support.transition&&o;this.$backdrop=e('<div class="modal-backdrop '+o+'" />').appendTo(document.body),"static"!=this.options.backdrop&&this.$backdrop.click(e.proxy(this.hide,this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),n?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,e.proxy(this.removeBackdrop,this)):this.removeBackdrop()):t&&t()}},e.fn.modal=function(o){return this.each(function(){var n=e(this),i=n.data("modal"),a=e.extend({},e.fn.modal.defaults,n.data(),"object"==typeof o&&o);i||n.data("modal",i=new t(this,a)),"string"==typeof o?i[o]():a.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e(function(){e("body").on("click.modal.data-api",'[data-toggle="modal"]',function(t){var o=e(this),n=o.attr("href"),i=e(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=i.data("modal")?"toggle":e.extend({remote:!/#/.test(n)&&n},i.data(),o.data());t.preventDefault(),i.modal(a).one("hide",function(){o.focus()})})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,o,n){var i,a;this.type=t,this.$element=e(o),this.options=this.getOptions(n),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(i="hover"==this.options.trigger?"mouseenter":"focus",a="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this))),this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,t,this.$element.data()),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var o=e(t.currentTarget)[this.type](this._options).data(this.type);return o.options.delay&&o.options.delay.show?(clearTimeout(this.timeout),o.hoverState="in",this.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show),void 0):o.show()},leave:function(t){var o=e(t.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),o.options.delay&&o.options.delay.hide?(o.hoverState="out",this.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide),void 0):o.hide()},show:function(){var e,t,o,n,i,a,r;if(this.hasContent()&&this.enabled){switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),a="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(a),e.remove().css({top:0,left:0,display:"block"}).appendTo(t?this.$element:document.body),o=this.getPosition(t),n=e[0].offsetWidth,i=e[0].offsetHeight,t?a.split(" ")[1]:a){case"bottom":r={top:o.top+o.height,left:o.left+o.width/2-n/2};break;case"top":r={top:o.top-i,left:o.left+o.width/2-n/2};break;case"left":r={top:o.top+o.height/2-i/2,left:o.left-n};break;case"right":r={top:o.top+o.height/2-i/2,left:o.left+o.width}}e.css(r).addClass(a).addClass("in")}},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function t(){var t=setTimeout(function(){o.off(e.support.transition.end).remove()},500);o.one(e.support.transition.end,function(){clearTimeout(t),o.remove()})}var o=this.tip();return o.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?t():o.remove(),this},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,o=this.options;return e=t.attr("data-original-title")||("function"==typeof o.title?o.title.call(t[0]):o.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},e.fn.tooltip=function(o){return this.each(function(){var n=e(this),i=n.data("tooltip"),a="object"==typeof o&&o;i||n.data("tooltip",i=new t(this,a)),"string"==typeof o&&i[o]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!0}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),o=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content > *")[this.options.html?"html":"text"](o),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,o=this.options;return e=t.attr("data-content")||("function"==typeof o.content?o.content.call(t[0]):o.content)},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),e.fn.popover=function(o){return this.each(function(){var n=e(this),i=n.data("popover"),a="object"==typeof o&&o;i||n.data("popover",i=new t(this,a)),"string"==typeof o&&i[o]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',o=function(o){e(o).on("click",t,this.close)};o.prototype.close=function(t){function o(){n.trigger("closed").remove()}var n,i=e(this),a=i.attr("data-target");a||(a=i.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),n=e(a),t&&t.preventDefault(),n.length||(n=i.hasClass("alert")?i:i.parent()),n.trigger(t=e.Event("close")),t.isDefaultPrevented()||(n.removeClass("in"),e.support.transition&&n.hasClass("fade")?n.on(e.support.transition.end,o):n.slideUp("normal",function(){o()}))},e.fn.alert=function(t){return this.each(function(){var n=e(this),i=n.data("alert");i||n.data("alert",i=new o(this)),"string"==typeof t&&i[t].call(n)})},e.fn.alert.Constructor=o,e(function(){e("body").on("click.alert.data-api",t,o.prototype.close)})}(window.jQuery),!function(e){"use strict";var t=function(t,o){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,o)};t.prototype.setState=function(e){var t="disabled",o=this.$element,n=o.data(),i=o.is("input")?"val":"html";e+="Text",n.resetText||o.data("resetText",o[i]()),o[i](n[e]||this.options[e]),setTimeout(function(){"loadingText"==e?o.addClass(t).attr(t,t):o.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")},e.fn.button=function(o){return this.each(function(){var n=e(this),i=n.data("button"),a="object"==typeof o&&o;i||n.data("button",i=new t(this,a)),"toggle"==o?i.toggle():o&&i.setState(o)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e(function(){e("body").on("click.button.data-api","[data-toggle^=button]",function(t){var o=e(t.target);o.hasClass("btn")||(o=o.closest(".btn")),o.button("toggle")})})}(window.jQuery),!function(e){"use strict";var t=function(t,o){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,o),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=e(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var t;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(t=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,t?this.process(t):this)},process:function(t){var o=this;return t=e.grep(t,function(e){return o.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){for(var t,o=[],n=[],i=[];t=e.shift();)t.toLowerCase().indexOf(this.query.toLowerCase())?~t.indexOf(this.query)?n.push(t):i.push(t):o.push(t);return o.concat(n,i)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var o=this;return t=e(t).map(function(t,n){return t=e(o.options.item).attr("data-value",n),t.find("a").html(o.highlighter(n)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(){var t=this.$menu.find(".active").removeClass("active"),o=t.next();o.length||(o=e(this.$menu.find("li")[0])),o.addClass("active")},prev:function(){var e=this.$menu.find(".active").removeClass("active"),t=e.prev();t.length||(t=this.$menu.find("li").last()),t.addClass("active")},listen:function(){this.$element.on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),(e.browser.chrome||e.browser.webkit||e.browser.msie)&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this))},move:function(e){if(this.shown){switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()}},keydown:function(t){this.suppressKeyPressRepeat=!~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){this.suppressKeyPressRepeat||this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},blur:function(){var e=this;setTimeout(function(){e.hide()},150)},click:function(e){e.stopPropagation(),e.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")}},e.fn.typeahead=function(o){return this.each(function(){var n=e(this),i=n.data("typeahead"),a="object"==typeof o&&o;i||n.data("typeahead",i=new t(this,a)),"string"==typeof o&&i[o]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e(function(){e("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var o=e(this);o.data("typeahead")||(t.preventDefault(),o.typeahead(o.data()))})})}(window.jQuery);var assertion,auth,auth_cookie,logged_in,switch_socket;assertion=null,auth=null,auth_cookie=function(e){var t,o,n,i;e?jQuery.cookie("protoauth",e):"undefined"!=typeof e&&jQuery.cookie("protoauth","");try{i=jQuery.cookie("protoauth").split("&"),n=i[0],t=i[1],auth=JSON.parse(decodeURIComponent(t))}catch(a){o=a,auth=null}return $("body").toggleClass("authenticated",!!auth),$("#userinfo").is(":hidden")||!!auth===$("#user").is(":hidden")?$("#userinfo").fadeOut("normal",function(){return auth?($("#signin").hide(),$(".user-name").text(auth.email),$("#user").show(),$("#userinfo").fadeIn()):($("#signin").show(),$("#user").hide(),$("#userinfo").fadeIn())}):void 0},auth_cookie(),$(document).ready(function(){var e;return("undefined"!=typeof protobowl_config&&null!==protobowl_config?protobowl_config.auth:void 0)?"undefined"!=typeof navigator&&null!==navigator?null!=(e=navigator.id)?e.watch({loggedInUser:null!=auth?auth.email:void 0,onlogin:function(e){return assertion=e,connected()&&has_connected?me.link(assertion):void 0},onlogout:function(){return assertion=null,auth&&verbAnnotation({verb:"logging out of the current authenticated session"}),auth_cookie(null),switch_socket()}}):void 0:void 0:void 0}),logged_in=function(e){var t;return assertion=null,"okay"!==(null!=e?e.status:void 0)?(verbAnnotation({verb:"server rejected login request: "+(null!=e?e.reason:void 0)}),"undefined"!=typeof navigator&&null!==navigator?null!=(t=navigator.id)?t.logout():void 0:void 0):(auth||me.accelerate_cleanup(),verbAnnotation({verb:"logging in and beginning a new authenticated session"}),"function"==typeof auth_cookie&&auth_cookie(e.cookie),switch_socket())},switch_socket=function(){return sock?(sock.hide_disconnect=!0,sock.socket.disconnect(),room.users={},sock.socket.reconnect(),sock.hide_disconnect=!1):void 0},$("a[href='#signin']").click(function(e){var t;return"undefined"!=typeof navigator&&null!==navigator&&null!=(t=navigator.id)&&t.request(),e.preventDefault()}),$("a[href='#logout']").click(function(e){var t;return"undefined"!=typeof navigator&&null!==navigator&&null!=(t=navigator.id)&&t.logout(),e.preventDefault()});