"use strict";var php=window.php||{};php.size={"screen-xs":!1,"screen-sm":!1,"screen-md":!1,"screen-lg":!1,current:!1},php["default"]={init:function(){window.colors={gray:"font-weight: bold; color: #1B2B34; background: #EDF4F5",red:"font-weight: bold; color: #CC0000; background: #EDF4F5",orange:"font-weight: bold; color: #FF9900; background: #EDF4F5",yellow:"font-weight: bold; color: #FAC863; background: #EDF4F5",green:"font-weight: bold; color: #2C6700; background: #EDF4F5",teal:"font-weight: bold; color: #5FB3B3; background: #EDF4F5",blue:"font-weight: bold; color: #6699CC; background: #EDF4F5",purple:"font-weight: bold; color: #C594C5; background: #EDF4F5",brown:"font-weight: bold; color: #AB7967; background: #EDF4F5"},php.debug=!0,php.debug&&(console.log("%cFront End Dev `Ilija Bradas`",window.colors.brown),console.log("%chttps://twitter.com/ilijabradas",window.colors.yellow)),this.toggleConsoleLog(!1),this.backGroundResponsiveSrc(".post-box .image-wrapper"),this.checkSize(),$(window).on("load",function(){})},checkSize:function(){$.each(php.size,function(e){php.size[e]=!1}),Modernizr.mq("only all and (max-width: 767px)")?(php.size["screen-xs"]=!0,php.size.current="screen-xs"):Modernizr.mq("only all and (min-width: 768px) and (max-width: 1199px)")?(php.size["screen-sm"]=!0,php.size.current="screen-sm"):Modernizr.mq("only all and (min-width: 1200px) and (max-width: 1607px)")?(php.size["screen-md"]=!0,php.size.current="screen-md"):Modernizr.mq("only all and (min-width: 1608px)")&&(php.size["screen-lg"]=!0,php.size.current="screen-lg")},toggleConsoleLog:function(e){var t=console;e?console=t:(t=console,console={},console.log=function(){})},setCookie:function(e,t){var i=$(".wrapper").data("time");if(i>0){var o=new Date;o.setTime(o.getTime()+60*parseInt(i)*1e3);var n="expires="+o.toUTCString();console.log(n),document.cookie=e+"="+t+"; "+n}},setCookieYearLast:function(e,t,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toUTCString();document.cookie=e+"="+t+"; "+n},getCookie:function(e){for(var t=e+"=",i=document.cookie.split(";"),o=0;o<i.length;o++){for(var n=i[o];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""},backGroundResponsiveSrc:function(e){php.debug&&console.log("php.default.imgResponsiveSrc"),$(e).each(function(e,t){if("screen-xs"===php.size.current){var i=$(t).attr("data-mobile-active-src");$(t).css({background:"url("+i+")"})}else if("screen-sm"===php.size.current){var o=$(t).attr("data-tablet-active-src");$(t).css({background:"url("+o+")"})}else{var n=$(t).attr("data-desktop-active-src");$(t).css({background:"url("+n+")"})}})},selectModal:function(e){$(e).off("shown.bs.modal hidden.bs.modal"),$(e).on("shown.bs.modal",function(){php["default"].modalActive=!0,$(e).modal("handleUpdate")}),$(e).on("hidden.bs.modal",function(){$('#service input[type="checkbox"]').each(function(e,t){$(t).prop("checked",!1)}),php["default"].modalActive=!1}),$(e).modal("show")},adaptiveHeight:function(e,t){var t=null,i=0;$(e).each(function(){$(this).height()>i&&(i=$(this).height())}),$(e).not(t).height(i)}},$(document).ready(function(){php["default"].init();var e=0;$(".post-box-content").each(function(){$(this).height()>e&&(e=$(this).height())}),$(".post-box-content").not(".post-box.main .post-box-content").height(e);var t=0;$(".post-box").each(function(){$(this).height()>t&&(t=$(this).height())}),$(".post-box.main").height(t),"screen-xs"!==php.size.current&&"screen-sm"!==php.size.current||$(".post-box").height(t);var i,o,n;i=window.navigator.userAgent,o=/msie|Trident.*rv[ :]*11\./gi,n=o.test(i),n&&$(".link.news .image-wrapper").each(function(){var e=$(this),t=e.find("img").attr("src");t&&e.css("background-image","url("+t+")").addClass("custom-object-fit")})}),$(window).on("resize",function(){php["default"].checkSize(),php["default"].backGroundResponsiveSrc(".active-news-box"),php.society.sizeCheck(),$(".post-box-content").not(".post-box.main .post-box-content").height("auto"),$(".post-box.main").height("auto"),$(".post-box").height("auto");var e=0;$(".post-box-content").each(function(){$(this).height()>e&&(e=$(this).height())}),$(".post-box-content").not(".post-box.main .post-box-content").height(e);var t=0;$(".post-box").each(function(){$(this).height()>t&&(t=$(this).height())}),$(".post-box.main").height(t),"screen-xs"!==php.size.current&&"screen-sm"!==php.size.current||$(".post-box").height(t)}),function(e){e.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],n=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+n+"</style>",o.appendChild(s.childNodes[1])}return t&&e.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var o=".fitvidsignore";i.ignore&&(o=o+", "+i.ignore);var n=e(this).find(t.join(","));n=n.not("object object"),n=n.not(o),n.each(function(){var t=e(this);if(!(t.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var i="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),n=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),s=i/n;if(!t.attr("name")){var a="fitvid"+e.fn.fitVids._count;t.attr("name",a),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),$('iframe[src*="youtube"]').parent().fitVids();var php=window.php||{};php.forum={init:function(){php.debug=!0,php.debug&&console.log("php.forum"),this.questionForum(),$(".tags-wrapper li:first-child").find("a").addClass("active");var e=$(".tags-wrapper li:first-child").find("a").text();$(".forum-box").each(function(t,i){var o=$(this).attr("data-active-tag");e===o?$(this).fadeIn("slow"):$(this).css("display","none")}),this.tagsForum(),this.ajaxLoad(),$(window).on("load",function(){})},questionForum:function(){$(".question").each(function(e,t){var i=$(this).text();if(i.length>80){var o=i.replace(i,i.substring(0,80)+"...");$(this).html(o)}})},tagsForum:function(){$(".tags-wrapper li a").on("click",function(e){e.preventDefault();var t=$(this).text();$(".tags-wrapper li a").removeClass("active"),$(this).addClass("active"),$(".forum-box").each(function(e,i){var o=$(this).attr("data-active-tag");t===o?$(this).fadeIn("slow"):$(this).css("display","none")})})},ajaxLoad:function(){$(document).on("click",".show-more .btn",function(e){var t=$(this);t.data("ajax")&&(e.preventDefault(),$.get(t.data("ajax"),function(e){var i=($(e).insertBefore(t.parent()),$(".tags-wrapper li").find("a.active").text());$(".forum-box").each(function(e,t){var o=$(this).attr("data-active-tag");i===o?$(this).fadeIn("slow"):$(this).css("display","none")});var o=t.parents(".forum-box-wrapper").find("[data-next-url]");o.length?(t.data("ajax",o.data("next-url")),t.attr("href",o.attr("href")),o.remove()):t.hide()}))})}},$(document).ready(function(){php.forum.init()});var php=window.php||{};php.header={init:function(e){php.debug&&console.log("php.header"),this.$header=e,this.primaryMenuToggleOpen(e),$(window).on("resize",function(){php.size.current!==e.size&&(e.size=php.size.current,$("nav").removeClass("expanded"))})},primaryMenuToggleOpen:function(e){e.on("click",".icon-menu",function(e){e.preventDefault(),$("nav").toggleClass("expanded"),$(".wrapper").toggleClass("menu-open"),$(".wrapper").hasClass("menu-open")?($("body").bind("touchmove",function(e){e.preventDefault()}),$("nav").bind("touchmove",function(e){e.stopPropagation()})):$("body").unbind("touchmove")})}},$(document).ready(function(){$("header").length&&php.header.init($("header"))});var php=window.php||{};php.history={init:function(){php.debug&&console.log("php.history"),this.historizeMe(),this.newHistoryData=this.newHistoryData||{}},historizeMe:function(){php.debug&&console.log("php.history.historizeMe - supported: "+Modernizr.history),$(document).on("click","[data-history]",function(){php.history.historyPush($(this).attr("href"))})},historyPush:function(e){if(Modernizr.history){if(!e)return void(php.debug&&console.log("php.history.historyPush error, no url provided"));this.newHistoryData.url=e,php.debug&&console.log("php.history.historyPush, data: ",this.newHistoryData),history.replaceState(this.newHistoryData,null,e),this.newHistoryData={}}}},$(document).ready(function(){$("[data-history]").length&&php.history.init()});var php=window.php||{};php.news={init:function(e){php.debug&&console.log("php.news"),this.newsShare(),this.newsClick(),$(window).on("resize",function(){php.size.current!==this.size&&(this.size=php.size.current,"screen-xs"===php.size.current||"screen-sm"===php.size.current?php.news.newsClick("reset"):php.news.newsClick())})},newsHover:function(){$(".image-wrapper").on("mouseenter",function(){$(this).find(".news-box-hover").addClass("active"),$(this).parent().siblings(".link .news").find(".news-box-hover").removeClass("active")}),$(".image-wrapper").on("mouseleave",function(){$(this).find(".news-box-hover").removeClass("active")})},newsShare:function(){$(".btn.btn-share").on("click",function(e){e.stopPropagation(),e.preventDefault(),console.log("Podeli")})},newsClick:function(e){e&&($(".image-wrapper").off("click"),$(".news-box-content .title").off("click")),"screen-md"!==php.size.current&&"screen-lg"!==php.size.current||($(".image-wrapper").on("click",function(e){e.preventDefault(),$(this).parent().siblings().removeClass("selected"),$(this).parent().addClass("selected"),$(this).parent().find(".news-box-hover").addClass("active"),$(this).parent().siblings().find(".news-box-hover").removeClass("active"),$(this).parent().find(".title").addClass("active"),$(this).parent().siblings().find(".title").removeClass("active"),php.news.mob=$(".selected").data("mobile-src"),php.news.tablet=$(".selected").data("tablet-src"),php.news.desktop=$(".selected").data("desktop-src"),php.news.title=$(".selected").find(".title").text(),php.news.details=$(".selected").find(".details").text(),php.news.author=$(".selected").find(".author").text(),php.news.links=$(".selected").attr("href"),$(".active-news-box").parent().attr("href",php.news.links),$(".active-news-box").attr("data-mobile-active-src",php.news.mob),$(".active-news-box").attr("data-tablet-active-src",php.news.tablet),$(".active-news-box").attr("data-desktop-active-src",php.news.desktop),$(".active-news-box-content .title").text(php.news.title),$(".active-news-box-content .details").text(php.news.details),$(".active-news-box-content .author").text(php.news.author),php["default"].backGroundResponsiveSrc(".active-news-box"),$(".selected").find(".news-box-hover").addClass("active"),$(".selected").find(".title").addClass("active")}),$(".news-box-content .title").on("click",function(){event.preventDefault(),$(this).parent().prev().parent().siblings().removeClass("selected"),$(this).parent().prev().parent().addClass("selected"),$(this).addClass("active"),$(this).parent().prev().parent().siblings().find(".title").removeClass("active"),$(this).parent().prev().find(".news-box-hover").addClass("active"),$(this).parent().prev().parent().siblings().find(".news-box-hover").removeClass("active"),php.news.mob=$(".selected").data("mobile-src"),php.news.tablet=$(".selected").data("tablet-src"),php.news.desktop=$(".selected").data("desktop-src"),php.news.title=$(".selected").find(".title").text(),php.news.details=$(".selected").find(".details").text(),php.news.author=$(".selected").find(".author").text(),php.news.links=$(".selected").attr("href"),$(".active-news-box").parent().attr("href",php.news.links),$(".active-news-box").attr("data-mobile-active-src",php.news.mob),$(".active-news-box").attr("data-tablet-active-src",php.news.tablet),$(".active-news-box").attr("data-desktop-active-src",php.news.desktop),$(".active-news-box-content .title").text(php.news.title),$(".active-news-box-content .details").text(php.news.details),$(".active-news-box-content .author").text(php.news.author),php["default"].backGroundResponsiveSrc(".active-news-box"),$(".selected").find(".news-box-hover").addClass("active"),$(".selected").find(".title").addClass("active")}))}},$(document).ready(function(){php.news.init(),php.news.mob=$(".selected").data("mobile-src"),php.news.tablet=$(".selected").data("tablet-src"),php.news.desktop=$(".selected").data("desktop-src"),php.news.title=$(".selected").find(".title").text(),php.news.details=$(".selected").find(".details").text(),php.news.author=$(".selected").find(".author").text(),php.news.links=$(".selected").attr("href"),$(".active-news-box").parent().attr("href",php.news.links),$(".active-news-box").attr("data-mobile-active-src",php.news.mob),$(".active-news-box").attr("data-tablet-active-src",php.news.tablet),$(".active-news-box").attr("data-desktop-active-src",php.news.desktop),$(".active-news-box-content .title").text(php.news.title),$(".active-news-box-content .details").text(php.news.details),$(".active-news-box-content .author").text(php.news.author),php["default"].backGroundResponsiveSrc(".active-news-box"),$(".selected").find(".news-box-hover").addClass("active"),$(".selected").find(".title").addClass("active")});var php=window.php||{};php.newsletter={init:function(){php.debug&&console.log("php.newsletter"),this.submitNewsLetter()},isValidEmailAddress:function(e){var t=new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);return t.test(e)},submitNewsLetter:function(){$("#submit").click(function(e){e.preventDefault();var t=$(this).parent().attr("action"),i=$("#email").val();return""!==i&&$("#email").parents("form").addClass("no-error"),""===i?($("#email").attr("placeholder","Polje email je obavezno"),$("#email").parents("form").addClass("error"),!1):php.newsletter.isValidEmailAddress(i)?(php.newsletter.isValidEmailAddress(i)&&$("#email").parents("form").removeClass("error").addClass("no-error"),$(this).attr("disabled","disabled"),void $.ajax({type:"POST",url:t,data:{email:i},cache:!1}).success(function(e){console.log(e),$("#submit").prop("disabled",!1),$("#email").val(""),$("#email").attr("placeholder","Tvoja email adresa"),$("#email").parents("form").removeClass("no-error")}).fail(function(e){console.log(e)})):($("#email").val(""),$("#email").attr("placeholder","Email adresa nije validna"),$("#email").parents("form").addClass("error"),!1)})}},$(document).ready(function(){php.newsletter.init()});var php=window.php||{};php.social={init:function(){php.debug=!0,php.debug&&console.log("php.social"),this.makeSlider(),$(window).on("load",function(){})},makeSlider:function(){php.debug&&console.log("php.social.makeSlider"),$(".slider-social").slick({lazyLoad:"ondemand",arrows:!1,autoplay:!0,autoplaySpeed:4e3,infinite:!0,adaptiveHeight:!0,slidesToShow:6,slidesToScroll:3,centerMode:!0,centerPadding:"40px",responsive:[{breakpoint:1600,settings:{slidesToShow:4,slidesToScroll:2,centerMode:!0,centerPadding:"40px"}},{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"200px"}},{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"100px"}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"50px"}}]})}},$(document).ready(function(){php.social.init()});var php=window.php||{};php.society={init:function(){php.debug=!0,php.debug&&console.log("php.society"),this.sizeCheck(),this.xCloseArticle(),$(window).on("load",function(){})},sizeCheck:function(){php.size.current!==this.size&&(this.size=php.size.current,php.debug&&console.log("php.society.sizeCheck:",php.size.current),this.articleHover("reset"),this.articleViewMore("reset"),"screen-xs"===php.size.current||"screen-sm"===php.size.current?this.articleViewMore():this.articleHover())},articleViewMore:function(e){return e?void $(document).off("click","article"):void $(document).on("click","article",function(e){php.debug&&console.log("php.society.articleViewMore"),e.preventDefault(),$(this).siblings().removeClass("active"),php.society.toggleHoverBox($(this))})},articleHover:function(e){return e?void $(document).off("mouseenter mouseleave","article"):($(document).on("mouseenter mouseleave","article",function(){php.debug&&console.log("php.society.articleHover"),$("article.active").removeClass("active");var e=$(this);php.society.toggleHoverBox(e)}),void $(document).on("mouseleave",".members",function(){$("article.active").removeClass("active")}))},xCloseArticle:function(){$(document).on("click",".hover-box .icon-close",function(e){php.debug&&console.log("php.society.articleHover"),e.preventDefault(),e.stopPropagation(),$(this).parents("article").removeClass("active")})},toggleHoverBox:function(e){e.toggleClass("active")}},$(document).ready(function(){php.society.init()});var php=window.php||{};php.videos={init:function(){php.debug=!0,php.debug&&console.log("php.videos"),this.makeSyncSliders(),$(".slider-thumbnail .slick-center").find(".slider-video-hover-box").removeClass("active"),$(".slider-thumbnail .slick-center").eq(0).find(".slider-video-hover-box").addClass("active"),this.addActiveToCenter(),this.onSlideChange(),this.makeVideoSlider(),$(window).on("load",function(){})},makeVideoSlider:function(){php.debug&&console.log("php.social.makeSlider"),$(".video-slider").slick({lazyLoad:"ondemand",arrows:!1,autoplay:!0,autoplaySpeed:4e3,infinite:!0,adaptiveHeight:!0,slidesToShow:6,slidesToScroll:3,centerMode:!1,centerPadding:"0",responsive:[{breakpoint:1600,settings:{slidesToShow:4,slidesToScroll:2,centerMode:!0,centerPadding:"40px"}},{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"200px"}},{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"100px"}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"50px"}}]})},makeSyncSliders:function(){php.debug&&console.log("php.videos.makeSyncSliders"),$(".slider-video").slick({slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!1,asNavFor:".slider-thumbnail",lazyLoad:"ondemand"}),$(".slider-thumbnail").slick({slidesToShow:4,slidesToScroll:1,centerMode:!0,arrows:!1,focusOnSelect:!0,centerPadding:"0px",asNavFor:".slider-video",lazyLoad:"ondemand",responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"50px"}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,centerMode:!0,centerPadding:"50px"}}]})},addActiveToCenter:function(){$(".slider-thumbnail .video-wrapper").each(function(e,t){$(this).on("click",function(e){e.preventDefault(),$(this).parent().siblings().find(".slider-video-hover-box").removeClass("active"),$(this).find(".slider-video-hover-box").addClass("active")})})},playVideo:function(){$(".btn-play").each(function(e,t){$(this).on("click",function(){$(this).removeClass("icon-play").addClass("icon-pause"),$(this).parent().find(".title").css("opacity",.1),$(this).parent().find(".description").css("opacity",.1);var e=$(this).parents(".video-wrapper").find("video").get(0);e.paused===!1?(e.pause(),$(this).removeClass("icon-pause").addClass("icon-play"),$(this).parent().find(".title").css("opacity",1),$(this).parent().find(".description").css("opacity",1)):e.play(),e.addEventListener("ended",function(){$(this).parent().find(".title").css("opacity",1),$(this).parent().find(".description").css("opacity",1),$(".btn-play").removeClass("icon-pause").addClass("icon-play"),e.load()})})})},onSlideChange:function(){$(".slider-video").on("beforeChange",function(e,t){var i=$(".slick-current").find("video").get(0);$(this).parent().find(".title").css("opacity",1),$(this).parent().find(".description").css("opacity",1),i.pause(),i.load(),$(".btn-play").removeClass("icon-pause").addClass("icon-play")})}},$(document).ready(function(){php.videos.init()});