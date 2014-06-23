/**
  * @copyright StagnantIce 2014
  * @email tria-aa@mail.ru
  * @skype StagnantIce
  * @url https://github.com/StagnantIce/tpl.git
  */ 

$.fn.outerHtml = function(s) {
	var $obj = $(this).clone();
	var s = s || $obj.html();
	return $('<div>').append($obj.html(s)).html();
}
  
$.fn.tpl = function(params) {
	var $scope = $(this).clone();

	$.each(params, function(index, value){
		if (value === false) {
			$(index, $scope).empty();
		} else if ($.isArray(value)) {
			var a = [];
			$.each(value, function(i,v) {
				a.push( $(index, $scope).outerHtml($(index, $scope).tpl(v) ) );
			});
			$(index, $scope).replaceWith(a.join(''));
		} else if ($.isFunction(value)) {
			$.proxy(value, $(index, $scope))();
		} else if ($.isPlainObject(value)) {
			$(index, $scope).replaceWith( $(index, $scope).outerHtml($(index, $scope).tpl(value) ) );
		} else {
			$(index, $scope).html(value);
		}
	});

	return $scope.html();
}