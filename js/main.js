!function(e,t){var n=function(e){return t.querySelector(e)},i=t.body,s=n("html"),o=n("#gotop"),a=n("#menu"),r=n("#header"),c=n("#mask"),l=n("#menu-toggle"),d=n("#menu-off"),f=n("#loading"),u=e.requestAnimationFrame,v=navigator.userAgent,h=v.indexOf("Mobile")!==-1||v.indexOf("Android")!==-1||v.indexOf("iPhone")!==-1||v.indexOf("iPad")!==-1||v.indexOf("KFAPWI")!==-1,L=h?"touchstart":"click",g=function(){},p=function(e){var t=e.offsetLeft,n=e.offsetTop;if(e.offsetParent){var i=arguments.callee(e.offsetParent);t+=i.x,n+=i.y}return{x:t,y:n}},m=v.indexOf("Firefox")!==-1?t.documentElement:i,E={goTop:function(){var e=m.scrollTop;e>400?(m.scrollTop=e-400,u(arguments.callee)):m.scrollTop=0},toggleGotop:function(t){t>e.innerHeight/2?o.classList.add("in"):o.classList.remove("in")},toggleMenu:function(t){t?(a.classList.remove("hide"),e.innerWidth<1241&&(c.classList.add("in"),a.classList.add("show"),s.classList.add("lock"))):(a.classList.remove("show"),c.classList.remove("in"),s.classList.remove("lock"))},fixedHeader:function(e){e>r.clientHeight?r.classList.add("fixed"):r.classList.remove("fixed")},fixedToc:function(){function t(t){for(var n=0,s=c.length;n<s;n++)if(t>p(c[n]).y-a){i.querySelector("li.active").classList.remove("active");var o=i.querySelector('a[href="#'+c[n].id+'"]').parentNode;o.classList.add("active"),o.offsetTop>=i.clientHeight-a?i.scrollTop=o.offsetTop-i.clientHeight+parseInt(e.innerHeight/3):i.scrollTop=0}t<p(c[0]).y&&(i.querySelector("li.active").classList.remove("active"),i.querySelector('a[href="#'+c[0].id+'"]').parentNode.classList.add("active"))}var i=n("#post-toc");if(!i||!i.children.length)return g;var s=p(i),o=s.y,a=r.clientHeight,c=n("#post-content").querySelectorAll("h1, h2, h3, h4, h5, h6");return i.querySelector('a[href="#'+c[0].id+'"]').parentNode.classList.add("active"),[].forEach.call(i.querySelectorAll('a[href*="#"]'),function(e){e.addEventListener("click",function(e){e.preventDefault(),m.scrollTop=p(n('[id="'+decodeURIComponent(this.hash).substr(1)+'"]')).y-a+10})}),function(e){e>o-a?i.classList.add("fixed"):i.classList.remove("fixed"),t(e)}}(),share:function(){function i(t){e.open(encodeURI(r.replace("{service}",t)))}function s(){c.classList.add("in"),l.classList.add("in")}function o(){l.classList.remove("in"),c.classList.remove("in")}var a,r,l=n("#global-share"),d=n("#menu-share"),f=t.createElement("div"),u=n(".share-sns");f.innerHTML=BLOG_SHARE.summary,a=f.innerText,f=void 0,r="http://www.jiathis.com/send/?webid={service}&url="+BLOG_SHARE.url+"&title="+BLOG_SHARE.title+"&summary="+a+"&pic="+location.protocol+"//"+location.host+BLOG_SHARE.pic,[].forEach.call(u,function(e){e.addEventListener("click",function(){i(this.dataset.service)},!1)}),d.addEventListener(L,function(){s()},!1),c.addEventListener(L,function(){o()},!1)},search:function(){n("#search").addEventListener(L,function(){n("#search-wrap").classList.toggle("in")})},reward:function(){function e(){c.classList.add("in"),o.classList.add("ready"),setTimeout(function(){o.classList.add("in"),t.addEventListener(L,s)},0)}function i(){c.classList.remove("in"),o.classList.remove("in"),setTimeout(function(){o.classList.remove("ready"),t.removeEventListener(L,s)},300)}function s(e){o.contains(e.target)||i()}var o=n("#reward"),a=n("#rewardBtn"),r=n("#rewardOff");o&&(a.addEventListener(L,function(){return o.classList.contains("in")?i():e()}),r.addEventListener(L,i))}(),fixNavMinH:function(){return function(){var e=n(".nav");e.style.minHeight=e.parentNode.clientHeight-e.nextElementSibling.offsetHeight+"px"}}()};e.addEventListener("load",function(){E.fixNavMinH(),f.classList.remove("active")}),e.addEventListener("resize",function(){E.fixNavMinH(),E.toggleMenu()}),o.addEventListener(L,function(){u(E.goTop)},!1),l.addEventListener(L,function(e){E.toggleMenu(!0),e.preventDefault()},!1),d.addEventListener(L,function(){a.classList.add("hide")},!1),c.addEventListener(L,function(){E.toggleMenu()},!1),t.addEventListener("scroll",function(){var e=m.scrollTop;E.toggleGotop(e),E.fixedHeader(e),E.fixedToc(e)},!1),n("#post-toc")&&n("#post-toc").addEventListener("mousewheel",function(e){var t=this.scrollTop,n=this.scrollHeight,i=this.clientHeight,s=e.deltaY,o=s>0&&n-i-t<=s,a=s<0&&t<=-s;(a||o)&&e.preventDefault()},!1),"undefined"!=typeof BLOG_SHARE&&E.share(),Waves.init(),Waves.attach(".global-share li",["waves-block"]),Waves.attach(".article-tag-list-link, #page-nav a, #page-nav span",["waves-button"])}(window,document);