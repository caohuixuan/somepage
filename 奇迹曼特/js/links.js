addEvent(window,'load',function(){
	var ul=document.getElementById("links_first");
	var lis=ul.getElementsByTagName("li");
	var links=ul.getElementsByTagName("a");
	var tips=ul.getElementsByTagName("span");
	//console.log(tips);
	for(var i=0;i<links.length;i++){
		links[i].index=i;
		addEvent(links[i],'mouseover',function(){
			for(var j=0;j<links.length;j++){
				tips[j].style.display="none";
			}
			//console.log(this.index);
			tips[this.index].style.display="block";
		});
	}
});