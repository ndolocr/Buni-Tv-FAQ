// JavaScript Document

$(document).ready(function(){

	$('.buni-about-header').click(function(){

		$(this).parent('div:first').find('.buni-about-hidden').slideToggle("slow");
		});
});