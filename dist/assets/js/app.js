!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t){function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}$(document).ready((function(){new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.querySelectorAll(".faq__item").forEach((function(e){e.addEventListener("click",(function(){e.querySelector(".faq__answer").classList.toggle("active"),e.classList.toggle("active")}))}));var e,t=n(document.querySelectorAll(".anchor"));try{var r=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(t.s();!(e=t.n()).done;)r()}catch(e){t.e(e)}finally{t.f()}var o,i;function a(e){return""!=e}function u(e){return""!=e}o=document.querySelector(".header__menuBtn"),i=document.querySelector(".header__absMenu"),o.addEventListener("click",(function(){o.classList.toggle("active"),i.classList.toggle("active")})),$(".fancybox").fancybox(),$('input[name="phone"]').mask("+7 (999) 999-99-99"),$(".popupForm__form").submit((function(e){e.preventDefault();var t=$(this).find('input[name="phone"]').val(),n=$(this).find('input[name="name"]').val();a(n)?$(this).find('input[name="name"]').removeClass("error"):$(this).find('input[name="name"]').addClass("error"),u(t)?$(this).find('input[name="phone"]').removeClass("error"):$(this).find('input[name="phone"]').addClass("error"),u(t)&&a(n)?$.ajax({url:"sendMessage.php",type:"POST",data:{name:n,phone:t},success:function(){$.fancybox.close(),$.fancybox.open($("#thanksPopup")),setTimeout((function(){$.fancybox.close()}),2e3)}}):console.log("Ошибка")})),document.querySelectorAll(".svg").forEach((function(e){var t=e,n=t.getAttribute("class"),r=t.getAttribute("src"),o=new XMLHttpRequest;o.open("GET",r),o.responseType="document",o.onreadystatechange=function(e){var r=o.response.querySelector("svg");void 0!==n&&r.setAttribute("class",n),t.replaceWith(r)},o.send()}))}))},function(e,t,n){}]);