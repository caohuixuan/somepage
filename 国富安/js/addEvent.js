function addEvent(elem,eventType,func){
	try{
		if(elem!=null&&typeof elem=="object"){
			if(-[1,]){
				elem.addEventListener(eventType,func,false);
			}else{
				elem.attachEvent("on"+eventType,function(e){var e=e||window.event;func.call(e.srcElement)});
			}
		}else{
			throw new Error("对象为空或者不为对象");
		}
	}catch(e){
		alert(e.message);
	}
}
