(window.webpackJsonpnekotube=window.webpackJsonpnekotube||[]).push([[0],{12:function(e,t,a){e.exports=a(30)},17:function(e,t,a){},18:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),i=a.n(l),r=(a(17),a(2)),c=a(3),s=a(5),d=a(4),m=a(6),u=(a(18),a(7)),v=a.n(u),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={keyword:""},a.onInputChangeHandler=function(e){console.log("event : "+e),console.log("event.target.value : "+e.target.value),a.setState({keyword:e.target.value}),a.props.onKeywordChanged(e.target.value)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light mb-3 p-3"},o.a.createElement("h2",{className:"mb-0"},o.a.createElement("span",{className:"bg-warning text-white p-2 mr-2"},"\u697d"),o.a.createElement("span",{className:"d-none d-md-inline",style:{fontFamily:"Mansalva"}},"RakusTube")),o.a.createElement("form",{className:"form-group my-2 my-lg-0 ml-sm-2 "},o.a.createElement("input",{onChange:this.onInputChangeHandler,value:this.state.keyword,className:"form-control form-control-lg mr-sm-2",type:"text",placeholder:"\u691c\u7d22...","aria-label":"\u691c\u7d22..."})))}}]),t}(n.Component),h=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},e.children))},g=function(e){return o.a.createElement("li",{className:"list-group-item",onClick:function(){return e.onVideoClicked(e.video)}},o.a.createElement("div",{className:"video-list media"},o.a.createElement("div",{className:"media-left"},o.a.createElement("img",{className:"mr-3",src:e.video.snippet.thumbnails.default.url})),o.a.createElement("div",{className:"media-body"},o.a.createElement("h5",{className:"media-heading"},e.video.snippet.title))))},f=function(e){var t=e.videos.map((function(t){if(e.selectedVideo!==t)return o.a.createElement(g,{video:t,key:t.id.videoId,onVideoClicked:e.onVideoClicked})}));return o.a.createElement("ul",{className:"col-md-4 list-group"},t)},b=function(e){if(!e.video)return o.a.createElement("div",{className:"video col-md-8"},"\u52d5\u753b\u3092\u8aad\u8fbc\u4e2d\u3067\u3059");var t="https://www.youtube.com/embed/"+e.video.id.videoId;return o.a.createElement("div",{className:"video col-md-8"},o.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},o.a.createElement("iframe",{className:"embed-responsive-item",src:t})),o.a.createElement("div",{className:"info"},o.a.createElement("h2",null,e.video.snippet.title),o.a.createElement("p",null,e.video.snippet.description)))},y="AIzaSyCRSohMeFJEwyVFYio9aox4ZnFojDOCPGQ",E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={videos:[],selectedVideo:null},a.onVideoClickedHandler=function(e){console.log("onVideoClickHandler"),console.log("video : "+e),a.setState({selectedVideo:e})},a.onKeywordChangedHandler=function(e){console.log("onKeywordChangedHandler"),console.log("keyword : "+e);var t=e.replace(/\s+/g,"");""===t&&(t="\u30e9\u30af\u30b9\u30d1\u30fc\u30c8\u30ca\u30fc\u30ba"),v()({key:y,term:t},(function(e){a.setState({videos:e,selectedVideo:e[0]})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),v()({key:y,term:"\u30e9\u30af\u30b9\u30d1\u30fc\u30c8\u30ca\u30fc\u30ba"},(function(t){e.setState({videos:t,selectedVideo:t[2]})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{onKeywordChanged:this.onKeywordChangedHandler}),o.a.createElement(h,null,o.a.createElement(b,{video:this.state.selectedVideo}),o.a.createElement(f,{videos:this.state.videos,onVideoClicked:this.onVideoClickedHandler,selectedVideo:this.state.selectedVideo})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.6a94a8c1.chunk.js.map