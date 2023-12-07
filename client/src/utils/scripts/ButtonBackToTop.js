$(document).ready(function () {
	$('#back-to-top').css('opacity', '0');
	$(window).scroll(function () {
		if ($(this).scrollTop() === 0) {
			$('#back-to-top').css('opacity', '0');
		} else {
			$('#back-to-top').css('opacity', '1');
		}
	});

	$('#back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
	});
});
