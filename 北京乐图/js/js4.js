function tab3(){
	var link=document.getElementById("content_4_links");
	var linksul=link.getElementsByTagName("ul")[0];
	var links=linksul.getElementsByTagName("li");
	links[0].firstChild.style.cssText="background-color:#DBE5EF;";
	for(var i=0;i<links.length;i++){
		links[i].index=i;
		links[i].onmouseover=function(){
			for(var j=0;j<links.length;j++){links[j].firstChild.style.cssText="background-color:#ffffff;"};
			this.firstChild.style.cssText="background-color:#DBE5EF;";
		};
		links[i].onclick=function(){
			for(var j=0;j<links.length;j++){
				links[j].firstChild.style.cssText="background-color:#ffffff;";
			    document.getElementById("content_4_list_content"+(links[j].index+1)).style.display="none";
			}
			this.firstChild.style.cssText="background-color:#ffffff;";
			document.getElementById("content_4_list_content"+(this.index+1)).style.display="block";
		    return false;
		};
	}
}
