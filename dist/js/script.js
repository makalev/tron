$(function() {
	$('.close-over, .close-undermodal').on('click', function () {
		$('#comebacker').fadeOut(300); // 300 скорость исчезновения | disappear speed
		$('body').removeClass('comebackerhidden');
	});

	var comebacker = true;
	
	$(window).mouseout(function(e){
		if(e.pageY - $(window).scrollTop() < 1 && comebacker == true){
			$('#comebacker').fadeIn(300); 
			$('body').addClass('comebackerhidden');
			comebacker = false;
		}
	});
});