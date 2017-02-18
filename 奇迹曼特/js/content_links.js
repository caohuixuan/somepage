addEvent(window,"load",function(){
	var links=document.getElementById("content1_links");
	var imgs=links.children;
	for(var i=0;i<imgs.length;i++){
		imgs[i].index=i;
		addEvent(imgs[i],"click",function(){
			for(var j=0;j<imgs.length;j++){
				document.getElementById("content1_"+j).style.display="none";
			}
			document.getElementById("content1_"+this.index).style.display="block";
		});
	}
});