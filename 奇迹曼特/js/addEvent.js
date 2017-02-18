function addEvent(elem,eventType,func){
	try{
		if(elem!=null&&typeof elem=='object'){
			if(-[1,]){
				elem.addEventListener(eventType,func,false);
			}else{
				elem.attachEvent("on"+eventType,function(e){var e=e||window.event;func.call(e.srcElement)});
			}
		}else{
			throw new Error("不为对象或者对象为空");
		}
	}catch(e){
		alert(e.message);
	}
}
