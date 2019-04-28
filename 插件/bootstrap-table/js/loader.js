
/***
  *  页面加载等待页面
  *  DOM 传入dom节点 默认在该节点中间显示加载等待框
  *  title 等待提示内容
  *  DOMHeight 设置显示等待框的位置 eg 传入320，在160px左右显示加载等待框
  */ 
function showLoad( DOM, title, DOMHeight){
	if(DOM.length != 1){
		console.log("请获取正确的加载对象,并且在当前页面是唯一的");
		return ;
	}
	var DOMName = DOM.eq(0).get(0).tagName;
	var width = DOM.width();
	var height = DOM.height() || "200";
	var title = title || "正在加载数据,请稍等...";
	var P_Height = DOMHeight|| height;
	var leftW = 300;
	var topW = height/2-38;
	leftW = width/2-100;
	
	DOM.attr("savePosition",DOM.css("position"));
	 
	var _htmlBg = "<div id='loadingBg' style='position:absolute;top:0;left:0;width:100%;height:100%;background:#E0ECFF;opacity:0.6;filter:alpha(opacity=60);z-index:9999;'>"
		+"</div>";
	var _htmlPic = "<div id='loading_box' style='position:absolute;top:0;left:0;width:100%;min-height:"+P_Height+"px;line-height:"+P_Height+"px;text-align:center;'> <div id='loadingPic' style='display:inline-block;cursor:wait;width:180px;height:44px;line-height:21px;padding:10px 5px 10px 43px;"
	+"background:#fff url(./images/loading.gif) no-repeat scroll 7px 4px;border:1px solid #8CBEDA;border-radius:3px;color:#37a;font-size:12px;font-weight:bold;z-index:10000;'>"+title+"</div></div>";
	
	DOM.css("position", "relative");
/*	var $_htmlBg  = $(_htmlBg);
	DOM.append($_htmlBg);*/
	
	var $_htmlPic  = $(_htmlPic);

	DOM.append($_htmlPic);

	if( DOMName == "BODY"){	//禁止滚动条滚动事件
		$(window).scroll (function (){
		    $ (this).scrollTop (0)
		});
	}else{
		DOM.scroll (function (){
		    $(this).scrollTop (0)
		});
	}
}

//隐藏
function hideLoad(DOM){	//传入父元素
	if(DOM!=null && DOM.parent()!=null){
		if( DOM.get(0).tagName === "BODY"){//恢复滚动条滚动事件
			$ (window).unbind ('scroll');
		}else{
			DOM.unbind("scroll");
		}
		DOM.css("position", DOM.attr("savePosition") );
		DOM.find("#loading_box").remove();
	}
}
 