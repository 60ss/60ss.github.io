function $(e) {
	var win = 	window,
		doc = 	document,
		html = 	doc.documentElement,
		body = 	doc.body||doc.getElementsByTagName("body")[0],
		pageOffset = win.pageYOffset!==undefined,
		CSS1Compat=((doc.compatMode||"")==="CSS1Compat");
	if( e.self==window ) {
		return {
			width:  win.innerWidth||body.clientWidth,
			height: win.innerHeight||body.clientHeight,
			scrollTop: pageOffset?win.pageYOffset:CSS1Compat?body.scrollTop:0,
			scrollLeft: pageOffset?win.pageXOffset:CSS1Compat?body.scrollLeft:0
		}
	}
	else
		if( e==document ){
			return {
				width: window.innerWidth||body.clientWidth||html.clientWidth,
				height: window.innerHeight||body.clientHeight||html.clientHeight
			}
		}
	else
	{
		if( typeof e === "string" ) {
			var e = document.querySelectorAll(e)[0];
		}
		var rect = e.getBoundingClientRect();
		return {
			self: e,
			width: e.innerWidth||e.clientWidth,
			height: e.innerHeight||e.clientHeight,
			top: e.offsetTop,
			left: e.offsetLeft,
			topScroll: rect.top,
			bottomScroll: rect.bottom,
			leftScroll: rect.left,
			rightScroll: rect.right
		}
	}
};