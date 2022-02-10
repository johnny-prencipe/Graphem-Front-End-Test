$(document).ready(function () {
	$('#form').submit(function (event) {
		event.preventDefault();

		const input = $('input').first().val();
		if (input !== '') {
			$(this).fadeOut(300);
			$(this).prevAll('div').fadeOut(300);
			$(':submit').attr('disabled', true);
			$('div').before($(`<h1></h1>`).text(input));
			$('h1').css('color', 'red');
			return;
		}
		return;
	});
});
