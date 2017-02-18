addEvent(window,"load",function(){
	var img=document.getElementById("banner_1");
	var bannerimg=img.children[0].children[0];
	var ff=document.getElementById("banner_2");
	var focus=ff.getElementsByTagName("span");
	//console.log(focus.length);
	var tip;
	for(var i=0;i<focus.length;i++){
		focus[i].index=i;
		addEvent(focus[i],"click",function(){
			for(var j=0;j<focus.length;j++){
				focus[j].style.background="url(images/dot_06.png) no-repeat";
			}
			this.style.background="url(images/dot_08.png) no-repeat";
			tip=this.index;
			//console.log(this.index);
			bannerimg.src="images/banner_"+this.index+".jpg";
			//console.log(this.index);
		});
	}
	var k=1;
	setInterval(function(){
		for(var t=0;t<focus.length;t++){
			focus[t].style.background="url(images/dot_06.png) no-repeat";
		}
		if(tip!=undefined){
	    		k=tip;
	    		tip=undefined;
	    	}
		focus[k].style.background="url(images/dot_08.png) no-repeat";
		bannerimg.src="images/banner_"+k+".jpg";
		if(k>=3){
			k=-1;
		}
		k++;
	},2000);
});