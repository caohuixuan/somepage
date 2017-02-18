addEvent(window,"load",product_right);
function product_right(){
	var uls=document.getElementById("product_right_links");
	var divs=document.getElementById("product_right_");
    var links=uls.getElementsByTagName("li");
    for(var i=0;i<links.length;i++){
    	links[i].index=i;
    	links[i].onclick=function(e){
    		for(var j=0;j<links.length;j++){
    			links[j].style.background="url(images/butt_05.gif)";
    			links[j].style.color="#333333";
    			divs.children[j].style.display="none";
    		}
    		this.style.background="url(images/butt_03.gif) no-repeat";
    		this.style.color="#ffffff";
    		divs.children[this.index].style.display="block";
    	};
    }
}
