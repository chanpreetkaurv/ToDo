!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){const e=document.createElement("template");e.innerHTML='\n      <style>\n      @import \'../css/font-awesome.css\';\n      @import \'../css/style.css\';\n      </style>\n      <div class="header">\n      <div class="clear">\n          <i class="fa fa-refresh"></i>\n      </div>\n      <div id="date"></div>\n  </div>';const t=new Date;this.shadowRoot.appendChild(e.content.cloneNode("true")),this.shadowRoot.querySelector(".clear").addEventListener("click",this.clearData),this.shadowRoot.getElementById("date").innerHTML=t.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})}disconnectedCallback(){this.shadowRoot.querySelector("clear").removeEventListener("click",this.clearData)}clearData(e){localStorage.clear(),location.reload()}}window.customElements.define("header-component",n)}]);