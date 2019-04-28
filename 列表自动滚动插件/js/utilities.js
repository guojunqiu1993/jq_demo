
String.prototype.format = function(){    
	var args = arguments;    
	return this.replace(/\{(\d+)\}/g, function(m,i){
		return args[i];
	});    
};


/*tpl 模板函数 用法*/
/*
*	var arr = [	
*		{title:"01深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"02深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"03深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"04深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"05深耕产融结合 经贸资本撬动城市新生 深耕产融结合",source:"腾讯新闻"},
*		{title:"06深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"07深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"08深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*		{title:"09深耕产融结合 经贸资本撬动城市新生 深耕产融结合",time:"2017-12-23",source:"腾讯新闻"},
*	  ];
*	
*	var renderObj = {
*		mode:"append",
*		renderArr: arr,
*		templateDom: "#classfyMessage-tmpl",
*	}
*	
*	$(".classifieds_content ._scrollBox").tpl(renderObj);
*
**/


(function($){
	String.prototype.strFormat = function(){
		var arg = arguments[0];
		return this.replace( /\{(\w+)\}/g , function(m, i){
			return arg[i]+"" || "暂无数据";
		});
	}
	
	$.fn.tpl = function(renderObj){ 
		this.that = this;
		renderObj = jQuery.extend({
            mode : "replace", //有替换模式 添加模式
            beforeHtml : '',
            afterHtml : '',
            callback : undefined,
        }, renderObj);
		
        return this.each(function() {
            $.fn.tpl.render( $(this), renderObj );
        });
    };

    $.fn.tpl.render = function($this,renderObj){ 
		var tpl = $(renderObj.templateDom).html();
		var	tpl_arr = [];
		var _html = '';
		
		renderObj.renderArr.forEach(function(item,index){
			tpl_arr.push( tpl.strFormat(item) );
		});
		
		_html = renderObj.beforeHtml + tpl_arr.join("") + renderObj.afterHtml;
		
		switch (renderObj.mode){
			case "replace": 
				$this.html(_html).ready(function(){
					renderObj.callback != undefined ? renderObj.callback() : renderObj.callback = null;
				});
				break;
			case "append": 
				$this.append(_html).ready(function(){
					renderObj.callback != undefined ? renderObj.callback() : renderObj.callback = null;
				});
				break;
		}
	};
})(jQuery);


(function($){
	
	var nodatatpl = 	"<div class='nodata' style='line-height:{0};'>\
					<img style='width:{1};' class='nodata-pic' src='../ams/common/img/no-data-white.png' />\
				</div>";
	
	$.fn.nodata = function(renderObj){ 
		this.that = this;
		renderObj = jQuery.extend({
            picWidth: "30%",
            boxHeight: "0",
        }, renderObj);
		
        return this.each(function() {
            $.fn.nodata.render( $(this), renderObj );
        });
    };

    $.fn.nodata.render = function($this,renderObj){
    	var _nodataHeight = renderObj.boxHeight != 0 ? renderObj.boxHeight : $this.outerHeight()+"px";
    	var _picWidth = renderObj.picWidth;
    	$this.html( nodatatpl.format( _nodataHeight,_picWidth ) );
	};
	
})(jQuery);


var i=0,j=0;  //判断点击次数寄存
var closetimer = null;  //延时函数寄存
function Button1_Click(callback){   //botton点击事件
    i++;  //记录点击次数
    console.log(j++,i);
    closetimer = window.setTimeout(function(){
    	if(i>1){   //如果点击次数超过1
    	    window.clearTimeout(closetimer);  //清除延时函数
    	    closetimer = null;  //设置延时寄存为null
    	    //添加操作代码        
    	    i=0;  //重置点击次数为0
    	}else{  //如果点击次数为1
    	   callback();
    	    i=0;  //重置点击次数为0
    	}
    },200);  
}




















