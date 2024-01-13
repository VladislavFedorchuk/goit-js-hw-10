import{i as d}from"./assets/vendor-0bfc0ba5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=document.getElementById("datetime-picker"),a=document.querySelector("[data-start]"),h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),C=document.querySelector("span[data-minutes]"),F=document.querySelector("span[data-seconds]");let f;u();const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>new Date?(f=t[0],S(),iziToast.show({icon:"icon-true",backgroundColor:"#82C43C",message:"You can start the countdown",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1})):(iziToast.show({icon:"icon-false",backgroundColor:"#EF4040",message:"Please choose a date in the future",messageColor:"#FFBEBE",messageSize:"16px",position:"topCenter",close:!1}),u())}};a.addEventListener("click",t=>{t.preventDefault();const n=setInterval(()=>{u();const r=f-Date.now(),s=v(r);r>0?(h.textContent=c(s.days),y.textContent=c(s.hours),C.textContent=c(s.minutes),F.textContent=c(s.seconds)):(clearInterval(n),iziToast.show({icon:"icon-true",backgroundColor:"#82C43C",message:"Date came, timer  has stopped",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1}))},1e3)});function u(){a.disable=!0,a.style.background="#cfcfcf",a.style.color="#989898"}function S(){a.disable=!1,a.style.background="#4e75ff",a.style.color="#fff"}function v(t){const o=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:m,seconds:p}}function c(t){return String(t).padStart(2,"0")}flatpickr(g,b);const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();const n=l.elements.delay.value,r=l.elements.state.value;function s(){return new Promise((e,o)=>{setTimeout(()=>{r==="fulfilled"&&e(),o()},n)})}s().then(e=>w(n)).catch(e=>k(n))});function k(t){d.show({icon:"icon-false",backgroundColor:"#FC5A5A",message:`Rejected promise in ${t} ms`,messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1})}function w(t){d.show({icon:"icon-false",backgroundColor:"#82C43C",message:`Fulfilled promise in ${t} ms`,messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1})}
//# sourceMappingURL=commonHelpers3.js.map
