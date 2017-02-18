window.onload=function(){
	var links=document.getElementById("links");
	var as=links.getElementsByTagName("li");
	var contents=document.getElementById("content_links");
	var contentlinks=contents.children;
	as[0].firstChild.style.cssText="background:url(img/nav-hover_03.png) no-repeat;color:#187EC6";
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onclick=function(){
			for(var j=0;j<as.length;j++){
				as[j].firstChild.style.cssText="background:none;color:#ffffff";
				contentlinks[j].style.display="none";
			}
			this.firstChild.style.cssText="background:url(img/nav-hover_03.png) no-repeat;color:#187EC6";
			contentlinks[this.index].style.display="block";
		};
	}
	tab1();
	tab2();
	tab3();
};
