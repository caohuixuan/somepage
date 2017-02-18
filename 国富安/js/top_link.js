addEvent(window,"load",function(){
	var toplink=document.getElementById("top_2").children[0];
	var toplinks=toplink.children;
	for(var i=0;i<toplinks.length;i++){
		toplinks[i].onmouseover=function(){
		     this.children[1].style.display="block";
		};
		toplinks[i].onmouseout=function(){
		     this.children[1].style.display="none";
		};
	}
	var topsecond=document.getElementById("top_links_second");
	for(var j=0;j<topsecond.children.length;j++){
		topsecond.children[j].onmouseover=function(){
			this.children[0].style.display="block";
		};
		topsecond.children[j].onmouseout=function(){
			this.children[0].style.display="none";
		};
	}
});