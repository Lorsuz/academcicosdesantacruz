$(document).ready(function () {
	$('header').css('box-shadow', '0 0px 0px 0 rgba(0, 0, 0, 0.042)');
	$(window).scroll(function () {
		if ($(this).scrollTop() === 0) {
			$('header').css('box-shadow', '0 0px 0px 0 rgba(0, 0, 0, 0.042)');
		} else {
			$('header').css('box-shadow', '0 5px 10px 0 rgba(0, 0, 0, 0.042)');
		}
	});
});
