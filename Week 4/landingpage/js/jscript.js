$(document).ready(function(){


	$( ".readmore" ).click(function() {
 	 	$("#show-this-on-click").slideDown();
 	 	$(".readless").show();
 	 	$(".readmore").hide();
});

	$(".readless.hide").click(function() {
		$(".hide").slideUp();
		$(".readless").hide();
		$(".readmore").show();
});

	$( ".learnmore" ).click(function() {
  		$("span").slideDown();
  		$(".learnmore").hide();
});
})