(function(){"use strict";
var E=[105,110,102,111,64,98,105,111,115,111,108,111,100,101,115,115,97,46,101,117];
var T=[43,51,56,54,51,55,54,57,49,54,55,55];
var D=[43,51,56,32,54,51,32,55,54,57,32,49,54,32,55,55];
var A=[75,111,109,112,111,122,105,116,111,114,97,32,78,105,115,104,99,104,121,110,115,107,111,104,111,32,66,108,118,100,32,49,54,44,32,65,112,116,32,51,56,60,98,114,62,54,53,48,49,56,32,79,100,101,115,97,44,32,85,107,114,97,105,110,101];
var s=function(a){return String.fromCharCode.apply(null,a)};
document.addEventListener("DOMContentLoaded",function(){
var q=function(x){return document.querySelectorAll(x)};
q("a[data-email-link]").forEach(function(l){l.href="mailto:"+s(E);if(l.dataset.emailDisplay==="email")l.textContent=s(E)});
q("a[data-tel-link]").forEach(function(l){l.href="tel:"+s(T)});
q("[data-tel-display]").forEach(function(e){e.textContent=s(D)});
q("[data-address-display]").forEach(function(e){e.innerHTML=s(A)});
var t=document.querySelector("input[name=t_token]");if(t)t.value=String(Date.now());
var b=document.querySelector("[data-burger]"),n=document.querySelector("[data-nav]");
if(b)b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
})})();