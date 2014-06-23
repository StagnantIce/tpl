/**
  * @copyright StagnantIce 2014
  * @email tria-aa@mail.ru
  * @skype StagnantIce
  * @url https://github.com/StagnantIce/tpl.git
  */ 

$.fn.tpl = function(params) {
	var $scope = $(this).clone();

	$.each(params, function(index, value){
		if (value === false) {
			$(index, $scope).empty();
		} else if ($.isArray(value)) {
			var a = [];
			$.each(value, function(i,v) {
				a.push( $('<div>').append($(index, $scope).clone().html($(index, $scope).tpl(v))).html() );
			});
			$(index, $scope).replaceWith(a.join(''));
		} else if ($.isFunction(value)) {
			$.proxy(value, $(index, $scope))();
		} else if ($.isPlainObject(value)) {
			$(index, $scope).replaceWith( $('<div>').append( $(index, $scope).clone().html($(index, $scope).tpl(value))).html() );
		} else {
			$(index, $scope).html(value);
		}
	});

	return $scope.html();
}