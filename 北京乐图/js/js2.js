function tab1(){
	var link=document.getElementsByClassName("content_2_links")[0];
	var linkul=link.getElementsByTagName("ul")[0];
	var links=linkul.getElementsByTagName("li");
	links[0].firstChild.style.cssText="background: url(img/jtda-hover_07.png) no-repeat;color:#ffffff;";
	for(var i=0;i<links.length;i++){
		links[i].index=i;
		links[i].onclick=function(){
			for(var j=0;j<links.length;j++){
				links[j].firstChild.style.cssText="background: null;color:#187EC6;";
			    document.getElementById("content_2_content"+(j+1)).style.display="none";
			}
		    this.firstChild.style.cssText="background: url(img/jtda-hover_07.png) no-repeat;color:#ffffff;";
		    document.getElementById("content_2_content"+(this.index+1)).style.display="block";
		    document.getElementById("content_2_banner_1").firstElementChild.src="img/banner2_"+(this.index+1)+".png";
		};
	}
}
