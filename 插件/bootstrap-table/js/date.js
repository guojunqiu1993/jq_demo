//明天:getDay(1); 昨天:getDay(-1);
function getDay(days){
	var now = new Date();
    now.setDate(now.getDate()+days);
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
	return year + "-" + month + "-" + date;
}

function getDayATime(days) {
	var now = new Date();
    now.setDate(now.getDate()+days);
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
    return year+"-"+month+"-"+date+" "+(hour<10?"0"+hour:hour)+":"+(minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second)
}

function getMonth(type, months) {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	if (months != 0) {
		// 如果本月为12月，年份加1，月份为1，否则月份加1。
		if (month == 12 && months > 0) {
			year++;
			month = 1;
		} else if (month == 1 && months < 0) {
			year--;
			month = 12;
		} else {
			month = month + months;
		}
	}
	var date = d.getDate();
	var firstday = year + "-" + month + "-" + 1;
	var lastday = "";
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
			|| month == 10 || month == 12) {
		lastday = year + "-" + month + "-" + 31;
	} else if (month == 2) {
		// 判断是否为闰年（能被4整除且不能被100整除 或 能被100整除且能被400整除）
		if ((year % 4 == 0 && year % 100 != 0)
				|| (year % 100 == 0 && year % 400 == 0)) {
			lastday = year + "-" + month + "-" + 29;
		} else {
			lastday = year + "-" + month + "-" + 28;
		}
	} else {
		lastday = year + "-" + month + "-" + 30;
	}
	var day = "";
	if (type == "s") {
		day = firstday;
	} else {
		day = lastday;
	}
	return day;
}


//获取当前时间的前几分钟或者后几分钟 1 -1
function getMinutes(min) {
	var myDate = new Date((new Date).getTime() + (min * 60 * 1000));
	var year = myDate.getFullYear();
	var month = myDate.getMonth()+1;
	var date = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	return year+"-"+(month<10?"0"+month:month)+"-"+(date<10?"0"+date:date)+" "+(hour<10?"0"+hour:hour)+":"+(minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second);
}
//获取当前时间前几秒钟或则后几秒钟 1 -1
function getSecond(second){
	var myDate = new Date((new Date).getTime() + (second * 1000));
	var year = myDate.getFullYear();
	var month = myDate.getMonth()+1;
	var date = myDate.getDate();
	var hour = myDate.getHours();
	var minute = myDate.getMinutes();
	var second = myDate.getSeconds();
	return year+"-"+(month<10?"0"+month:month)+"-"+(date<10?"0"+date:date)+" "+(hour<10?"0"+hour:hour)+":"+(minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second);
}

//获取前几个小时或者后几个小时 1 -1
function getHour(hour) {
	return getMinutes(hour * 60);
}


/**
 * 获取当前月的第一天
 */
function getCurrentMonthFirst(){
	var date=new Date();
	date.setDate(1);
	return date;
}
/**
 * 获取当前月的最后一天
 */
function getCurrentMonthLast(){
	var date=new Date();
	var currentMonth=date.getMonth();
	var nextMonth=++currentMonth;
	var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
	var oneDay=1000*60*60*24;
	return new Date(nextMonthFirstDay-oneDay);
}

function getStrDate(d){
	var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
	return year + "-" + month + "-" + date;
}

//日期转换格式转换----函数  
function formatDate(date,format) {  
      var o = {  
        "M+" : date.getMonth()+1, //month  
        "d+" : date.getDate(),    //day  
        "h+" : date.getHours(),   //hour  
        "m+" : date.getMinutes(), //minute  
        "s+" : date.getSeconds(), //second  
        "q+" : Math.floor((date.getMonth()+3)/3),  //quarter  
        "S" : date.getMilliseconds() //millisecond  
      }  
      if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(date.getFullYear()+"").substr(4 - RegExp.$1.length));  
      for(var k in o) if(new RegExp("("+ k +")").test(format))  
          format = format.replace(RegExp.$1,  
          RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));  
      return format;  
   }

//字符串转日期
function strToDate(strTime){
	return new Date(strTime.replace(/-/g,"/"));
}

//获得时间戳
function getDateTimeStamp(dateStr) {
	return Date.parse(dateStr.replace(/-/gi, "/"));
}


//字符串转时间yyyy-MM-dd hh:mm
function string2Date(dateStr) {
	return formatDate(strToDate(dateStr),"yyyy-MM-dd hh:mm");
}

function getDateTime2(diffDay,tody){
	tody.setDate(tody.getDate() + diffDay);// 获取diffDay天后的日期
	var nian = tody.getFullYear();
	var month = tody.getMonth() + 1;
	var day = tody.getDate();
	var hour = tody.getHours();
	var minute = tody.getMinutes();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	return nian + "-" + month + "-" + day + " " + hour + ":" + minute;
}


function getDateTime(diffDay, paramsDate){
	var tody = new Date();
	if (paramsDate) {
		tody = paramsDate
	}
	tody.setDate(tody.getDate() + diffDay);// 获取diffDay天后的日期
	var nian = tody.getFullYear();
	var month = tody.getMonth() + 1;
	var day = tody.getDate();
	var hour = tody.getHours();
	var minute = tody.getMinutes();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	return nian + "-" + month + "-" + day + " " + hour + ":" + minute;
}

function getDateFormat(diffDay){
	var tody = new Date();
	tody.setDate(tody.getDate() + diffDay);// 获取diffDay天后的日期
	var nian = tody.getFullYear();
	var month = tody.getMonth() + 1;
	var day = tody.getDate();
	var hour = tody.getHours();
	var minute = tody.getMinutes();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	return nian + "-" + month + "-" + day;
}


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


//日期转换
function getDateDiff(dateTimeStamp) {
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0) {
		return formatDate(new Date(dateTimeStamp),"yyyy-MM-dd hh:mm");
	}
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	if(dayC >= 1 && dayC <= 3) {
		result = parseInt(dayC) + "天前";
	} else if(hourC >= 1 && hourC <= 24) {
		result = parseInt(hourC) + "小时前";
	} else if(minC >= 1  && minC <= 59) {
		return parseInt(minC) + "分钟前";
	} else{
		return formatDate(new Date(dateTimeStamp),"yyyy-MM-dd hh:mm");
	}	
	return result += formatDate(new Date(dateTimeStamp)," hh:mm");
}

//日期转换mm-dd hh:mm
function getDateDiff2(dateTimeStamp) {
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0) {
		return;
	}
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	if(dayC >= 1 && dayC <= 3) {
		result = parseInt(dayC) + "天前";
	} else if(hourC >= 1 && hourC <= 24) {
		result = parseInt(hourC) + "小时前";
	} else if(minC >= 1  && minC <= 59) {
		return parseInt(minC) + "分钟前";
	} else{
		return formatDate(new Date(dateTimeStamp),"MM-dd hh:mm");
	}	
	return result += formatDate(new Date(dateTimeStamp)," hh:mm");
}


//获取当前日期多少天 day为负即多少天前，为正就是多少天后 格式为 yyyy-mm-dd
function getNowFormatDates(day) {
    var date = new Date();
    date.setDate(date.getDate()+day);
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//返回两个日期之间的字符串
function resultDayBetween(startTime,endTime){
	var title = '';
	if(startTime){
		title += '('+startTime.substr(0,10)+'至'+endTime.substr(0,10)+')';
	}else{
		startTime = strToDate2(endTime,7);
		title += '('+strToDate2(endTime,7)+'至'+endTime.substr(0,10)+')';
	}
	return title;
}

//初始化 datetimepicker控件
function initDatetimepicker(begin,end){
	$(begin).val(getDay(-3));
	$(end).val(getDay(0));
	$(end).datetimepicker({
		lang : 'ch',
		format : 'Y-m-d',
		timepicker : false,
		maxDate:getDay(0),
		minDate:$(begin).val(),
		onChangeDateTime:function(){
			$(begin).datetimepicker({
				maxDate:$(end).val()
			})
		}
	});
	$(begin).datetimepicker({
		lang : 'ch',
		format : 'Y-m-d',
		timepicker : false,
		maxDate:$(end).val(),
		onChangeDateTime:function(){
			$(end).datetimepicker({
				minDate:$(begin).val()
			})
		}
	});
}
