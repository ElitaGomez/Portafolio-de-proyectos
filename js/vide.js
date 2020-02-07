/*
 *  Vide - v0.3.5
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;g>h&&(c=f[h],-1===c.search(/^(http|https|ftp):\/\//)&&-1!==c.search(":"));h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||("false"===e?!1:e)),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;b>d;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.jpg">').load(d)}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d,this.init()}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0};e.prototype.init=function(){var b,e=this,g=c(e.settings.position),h="";e.$wrapper=a("<div>").css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":g.x+" "+g.y}),b=e.path,"object"==typeof e.path&&(e.path.poster?b=e.path.poster:e.path.mp4?b=e.path.mp4:e.path.webm?b=e.path.webm:e.path.ogv&&(b=e.path.ogv)),"detect"===e.settings.posterType?d(b,function(a){e.$wrapper.css("background-image","url("+a+")")}):"none"!==e.settings.posterType&&e.$wrapper.css("background-image","url("+b+"."+e.settings.posterType+")"),"static"===e.$element.css("position")&&e.$element.css("position","relative"),e.$element.prepend(e.$wrapper),"object"==typeof e.path?(e.path.mp4&&(h+='<source src="'+e.path.mp4+'.mp4" type="video/mp4">'),e.path.webm&&(h+='<source src="'+e.path.webm+'.webm" type="video/webm">'),e.path.ogv&&(h+='<source src="'+e.path.ogv+'.ogv" type="video/ogv">'),e.$video=a("<video>"+h+"</video>")):e.$video=a('<video><source src="'+e.path+'.mp4" type="video/mp4"><source src="'+e.path+'.webm" type="video/webm"><source src="'+e.path+'.ogv" type="video/ogg"></video>'),e.$video.prop({autoplay:e.settings.autoplay,loop:e.settings.loop,volume:e.settings.volume,muted:e.settings.muted,defaultMuted:e.settings.muted,playbackRate:e.settings.playbackRate,defaultPlaybackRate:e.settings.playbackRate}).css({margin:"auto",position:"absolute","z-index":-1,top:g.y,left:g.x,"-webkit-transform":"translate(-"+g.x+", -"+g.y+")","-ms-transform":"translate(-"+g.x+", -"+g.y+")","-moz-transform":"translate(-"+g.x+", -"+g.y+")",transform:"translate(-"+g.x+", -"+g.y+")",visibility:"hidden"}).one("canplaythrough."+f,function(){e.resize()}).one("playing."+f,function(){e.$video.css("visibility","visible"),e.$wrapper.css("background-image","none")}),e.$element.on("resize."+f,function(){e.settings.resizing&&e.resize()}),e.$wrapper.append(e.$video)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$video[0].videoHeight,b=this.$video[0].videoWidth,c=this.$wrapper.height(),d=this.$wrapper.width();this.$video.css(d/b>c/a?{width:d+2,height:"auto"}:{width:"auto",height:c+2})}},e.prototype.destroy=function(){this.$element.off(f),this.$video&&this.$video.off(f),delete a[f].lookup[this.index],this.$element.removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize."+f,function(){for(var b,c=a[f].lookup.length,d=0;c>d;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload."+f,function(){return!1}),a(document).find("[data-"+f+"-bg]").each(function(b,c){var d=a(c),e=d.data(f+"-options"),g=d.data(f+"-bg");d[f](g,e)})})});