!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.experience=n():e.experience=n()}(self,(function(){return(()=>{var e={147:()=>{let e={NONE:0,PANNING:1,PINCHING:2};Object.freeze(e);let n,t,i,o=e.NONE;class s{constructor(e,n){this.x=e,this.y=n}}class r{constructor(){this.scale=1,this.panning=!1,this.pinching=!1,this.pinchingSensitivity=1.03,this.scrollingSensitivity=1.05,this.pinchingThreshold=4,this.previousPinch=0,this.scaleBounds=new s(.8,3),this.currentPos=new s(0,0),this.startPos=new s(0,0),this.widthDifference=0,this.heightDifference=0,this.defaultScrollTimer=1e3,this.scrollTimer}}let l=new r,a=new r;function c(e=0,n=0){t.style.transform="translate("+a.currentPos.x+"px, "+a.currentPos.y+"px) scale("+a.scale+")";let i=d(t);0==e&&(e=i.x),0==n&&(n=i.y);let o=t.getBoundingClientRect().width,s=t.getBoundingClientRect().height,r=o>window.innerWidth,l=s>window.innerHeight;if(r&&l){$("#img-overlay").find("#close").css("display","none");let t=$("#img-overlay").find("#close").css("top");$("#img-overlay").find("#scaledClose").css("top",t);let i=$("#img-overlay").find("#close").css("right");$("#img-overlay").find("#scaledClose").css("right",i),$("#img-overlay").find("#scaledClose").css("display","block");var c=(o-window.innerWidth)/2;a.currentPos.x=Math.min(Math.max(e,-c),c);var u=(s-window.innerHeight)/2;a.currentPos.y=Math.min(Math.max(n,-u),u)}else if(r){$("#img-overlay").find("#close").css("display","none"),$("#img-overlay").find("#scaledClose").css("display","block");let n=(window.innerHeight-s)/2,t=parseInt($("#img-overlay").find("#close").css("top"),10);if(n>=t){let e=n+t;$("#img-overlay").find("#scaledClose").css("top",`${e}px`),a.heightDifference=n}c=(o-window.innerWidth)/2,a.currentPos.x=Math.min(Math.max(e,-c),c)}else if(l){$("#img-overlay").find("#close").css("display","none"),$("#img-overlay").find("#scaledClose").css("display","block");let e=(window.innerWidth-o)/2,t=parseInt($("#img-overlay").find("#close").css("right"),10);if(e>=t){let n=e+t;$("#img-overlay").find("#scaledClose").css("right",`${n}px`),a.widthDifference=e}u=(s-window.innerHeight)/2,a.currentPos.y=Math.min(Math.max(n,-u),u)}else a.currentPos.y=0,$("#img-overlay").find("#close").css("display","block"),$("#img-overlay").find("#scaledClose").css("display","none"),a.currentPos.x=0;t.style.transform="translate("+a.currentPos.x+"px, "+a.currentPos.y+"px) scale("+a.scale+")"}function d(e){const n=window.getComputedStyle(e),t=new DOMMatrixReadOnly(n.transform);return{x:t.m41,y:t.m42}}function u(){return krpano=document.getElementById("krpanoSWFObject"),krpano?{startscene:krpano.get("xml.scene"),hlookat:(parseFloat(krpano.get("view.hlookat"))%360).toFixed(2),vlookat:parseFloat(krpano.get("view.vlookat")).toFixed(2)}:(console.warn("failed to get parameters."),null)}$(document).ready((function(){function d(e,n){a.startPos=new s(e-a.currentPos.x,n-a.currentPos.y)}function g(e,n){c(e-a.startPos.x,n-a.startPos.y),p()}function f(e,n=1.1){e>0?a.scale*=n:a.scale/=n,a.scale=Math.min(Math.max(a.scale,a.scaleBounds.x),a.scaleBounds.y),c(),p()}function p(){let e=t.getBoundingClientRect().width,n=t.getBoundingClientRect().height,i=e>window.innerWidth,o=n>window.innerHeight;clearTimeout(a.scrollTimer),i||o?$("#img-overlay").find("#scaledClose").css("display","none"):$("#img-overlay").find("#close").css("display","none"),a.scrollTimer=setTimeout((function(){i||o?$("#img-overlay").find("#scaledClose").fadeIn(200,"linear"):$("#img-overlay").find("#close").fadeIn(200,"linear")}),a.defaultScrollTimer)}n=document.getElementById("img-overlay"),t=document.getElementById("zoomed-img-wrapper"),i=document.getElementById("custom-img"),t.onmousedown=function(e){!function(e){e.preventDefault(),d(e.clientX,e.clientY),a.panning=!0}(e)},t.onmousemove=function(e){!function(e){a.panning&&(e.preventDefault(),g(e.clientX,e.clientY))}(e)},t.onmouseup=function(e){!function(e){e.preventDefault(),a.panning=!1}(e)},t.onwheel=function(e){!function(e){e.preventDefault(),f(e.wheelDelta?e.wheelDelta:-e.deltaY,l.scrollingSensitivity)}(e)},t.ontouchstart=function(n){!function(n){if(n.touches.length>=2)o=e.PINCHING;else if(1==n.touches.length){o=e.PANNING;var t=n.touches[0]||n.changedTouches[0];n.preventDefault(),d(t.clientX,t.clientY)}}(n)},t.ontouchmove=function(n){!function(n){if(o==e.PANNING){var t=n.touches[0]||n.changedTouches[0];g(t.clientX,t.clientY)}else o==e.PINCHING&&function(e){var n=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);0==a.previousPinch?a.previousPinch=n:Math.abs(n-a.previousPinch)>l.pinchingThreshold&&(e.preventDefault(),n<a.previousPinch?f(-1,l.pinchingSensitivity):f(1,l.pinchingSensitivity),a.previousPinch=n)}(n)}(n)},t.ontouchend=function(n){!function(n){if(n.touches.length>=2)o=e.PINCHING;else if(1===n.touches.length){var t=n.touches[0]||n.changedTouches[0];d(t.clientX,t.clientY),a.previousPinch=0,o=e.PANNING}else o=e.NONE}(n)},$(".shareButton").click((function(e){var n=u(),t=n?`${window.location.href.split("?")[0]}?${jQuery.param(n)}`:window.location.href.split("?")[0];navigator.share?navigator.share({title:`Experience the ${document.title} with me.`,url:t}):(console.warn("Could not find navigator, copying to clipboard."),navigator.clipboard?navigator.clipboard.writeText(window.location.href):window.prompt("Copy to clipboard: Ctrl+C, Enter",t))})),$("[data-window-show]").click((function(e){let n=JSON.parse($(this).attr("data-window-show"))[0].id;OpenWindow(n)})),$("[data-window-hide]").click((function(e){let n=JSON.parse($(this).attr("data-window-hide"))[0].id;CloseWindow(n)})),$("[data-window-toggle]").click((function(e){let n=JSON.parse($(this).attr("data-window-toggle"))[0].id;$(`#${n}`).css("display")&&"none"!=$(`#${n}`).css("display")?CloseWindow(n):OpenWindow(n)})),$("#img-overlay").click((function(e){"img-overlay"==e.target.id&&(CloseWindow("img-overlay"),a=new r,l=new r,setTimeout((()=>{$("#zoomed-img-wrapper").css("transform","translate(0px, 0px) scale(1)"),$("#custom-zoomed-img").attr("src","")}),250))})),$("#img-overlay").find("#close").click((function(){CloseWindow("img-overlay"),a=new r,l=new r,setTimeout((()=>{$("#zoomed-img-wrapper").css("transform","translate(0px, 0px) scale(1)"),$("#custom-zoomed-img").attr("src","")}),250)})),$("#img-overlay").find("#scaledClose").click((function(){CloseWindow("img-overlay"),a=new r,l=new r,setTimeout((()=>{$("#zoomed-img-wrapper").css("transform","translate(0px, 0px) scale(1)"),$("#custom-zoomed-img").attr("src","")}),250)})),$(".bg-veil").click((function(e){CloseWindow(e.target.parentElement.id)})),$(".custom-img").click((function(e){$("#img-overlay").find("#scaledClose").css("display","none"),$("#img-overlay").find("#close").css("display","flex"),$("#img-overlay").css("display","flex"),$("#custom-zoomed-img").attr("src",e.target.src),a.widthDifference=(window.innerWidth-t.getBoundingClientRect().width)/2,a.heightDifference=(window.innerHeight-t.getBoundingClientRect().height)/2,OpenWindow("img-overlay",200,"linear","zoomed - "+e.target.title)}))})),window.getKrpanoViewParameters=u,window.GetCurrentTranslation=d},781:()=>{window.ShowProgressBar=function(){progressBar=document.getElementById("progress-bar"),progressBar.style.visibility="visible"},window.HideProgressBar=function(){progressBar=document.getElementById("progress-bar"),progressBar.style.visibility="hidden"},window.UpdateProgressBar=function(e){progressBar=document.getElementById("progress-bar"),progressBar.value=Math.round(100*e)}},555:()=>{function e(e,n,t){console.log(t),"function"==typeof gtag?gtag("event",e,{event_category:n,event_label:t}):console.warn("gtag does not exist.")}window.IdIsValid=function(e){return $(`#${e}`).length>0},window.TryToGetTitle=function(e){return void 0!==$(`#${e}`).attr("title")&&!1!==$(`#${e}`).attr("title")?$(`#${e}`).attr("title"):e},window.HotspotAnalytics=function(n){e("moveTo","hotspot",n)},window.SendGAEvent=e},63:()=>{function e(e,t=200,i="linear",o=""){IdIsValid(e)?(SendGAEvent("open","window",""===o?TryToGetTitle(e):o),n(e,t,i)):console.warn(`Could not find ${e}`)}function n(e,n=200,t="linear"){$(`#${e}`).fadeIn(n,t)}function t(e,n=200,t="linear"){IdIsValid(e)?i(e,n,t):console.warn(`Could not find ${e}`)}function i(e,n=200,t="linear"){$(`#${e}`).fadeOut(n,t)}window.OpenWindow=e,window.OpenWindowUI=n,window.CloseWindow=t,window.ToggleWindow=function(n,i=200,o="linear"){IdIsValid(n)?"none"===$(`#${n}`).css("display")?e(n,i,n):t(n,i,o):console.warn(`Could not find ${n}`)},window.CloseWindowUI=i}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var s=n[i]={exports:{}};return e[i](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";t.r(i),t(555),t(63),t(781),t(147)})(),i})()}));