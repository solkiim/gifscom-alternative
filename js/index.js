$(document).ready(function(){
	$("#dwi-image").animate({top: "+=380"}, 800);
	
	setTimeout(function () {
		$("#dwi-text").show()
	}, 850);
	
	setTimeout(function () {
		$('html, body').animate({
			scrollTop: $("#cool-stuff").offset().top
		}, 1000);
	}, 1500);
});