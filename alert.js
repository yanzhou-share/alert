/**
*
*jq.alert('可以这样');
*
*jq.alert({
*  title:'测试',
*	text:'也可以这样设置'
*	duration:5000
*});
*
*/
var jq = (function($){
	var _this = {}
	
		,timer = null
	
		,defaultsOptions = {
				title 		: '',
				text  		: '',
				duration	: 3000	
		}
		
		,_options = {}
		
		,$str = $('<div style="position:fixed;top:10px;z-index:99999;left:50%;padding:5px;"><h4 class="alert-heading"></h4><p style="margin:0;"></p></div>');
	
	_this.alert = _show;
	
	function _show(o){
		if(typeof o === "string")	o = {text:o};
		
		_options = 	_extendOptions(o);
		
		_rander();
		
		_position();
		
		timer = setTimeout(function(){
					_close();
				},_options.duration);
	}	
	
	function _close(){
		_clear();
	}
	
	function _clear(){
		if(!!timer)
		{
			clearTimeout(timer);
			timer = null;
		}
		
		$str.fadeOut();
	}
	
	function _position(){
		var _w = $str.width();
		
		$str.css({marginLeft:-(_w/2)});
	}
	
	function _rander(){
		$str.find('h4').text(_options.title);
		$str.find('p').text(_options.text);
		
		$(document.body).append($str);
	}
	
	function _extendOptions(o){
		return $.extend({}, defaultsOptions, o);
	}
	
	return _this;
	
})(jQuery);
