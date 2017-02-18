function tab2(){
	var link=document.getElementById("content_3_links");
	var linksul=link.getElementsByTagName("ul")[0];
	var links=linksul.getElementsByTagName("li");
	links[0].firstChild.style.cssText="background-color:#DBE5EF;color:#ffffff";
	for(var i=0;i<links.length;i++){
		links[i].index=i;
		links[i].onmouseover=function(){
			for(var j=0;j<links.length;j++){links[j].firstChild.style.cssText="background-color:#EFF3F6;color:#79B1E2";}
			this.firstChild.style.cssText="background-color:#DBE5EF;color:#ffffff";
		};
		links[i].onclick=function(){
			for(var j=0;j<links.length;j++){
				links[j].firstChild.style.cssText="background-color:#EFF3F6;color:#79B1E2";
			    document.getElementById("content_3_list"+(links[j].index+1)).style.display="none";
			}
			this.firstChild.style.cssText="background-color:#DBE5EF;color:#ffffff";
			document.getElementById("content_3_list"+(this.index+1)).style.display="block";
		};
	}
}
