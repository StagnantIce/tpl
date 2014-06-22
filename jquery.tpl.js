/**
  * @copyright StagnantIce 2014
  * @email tria-aa@mail.ru
  * @skype StagnantIce
  * @url https://github.com/StagnantIce/tpl.git
  */ 

$.fn.tpl = function(params) {
	var $scope = $(this).hide().clone().show();

	$.each(params, function(index, value){
		if (value === false) {
			$(index, $scope).empty();
		} else if ($.isArray(value)) {
			var a = [];
			$.each(value, function(i,v) {
				a.push($(index, $scope).tpl(v));
			});
			$(index, $scope).replaceWith(a.join(''));
		} else if ($.isPlainObject(value)) {
			$(index, $scope).replaceWith( $(index, $scope).tpl(value) );
		} else {
			$(index, $scope).html(value);
		}
	});
	
	return $scope.html();
}
