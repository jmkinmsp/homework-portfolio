$(document).ready(function() {


    $(".button").click(function(event) {
		event.preventDefault();
        alert("We're Not Ready For Sign-Ups (just yet)");
 
    });



    $('#nav_icon').click(function(){
    	event.preventDefault();
  		$('#slideout').toggleClass('on');
		});


    $('#nav_icon').click(function(){
    	event.preventDefault();
  		$('#slideout_blog').toggleClass('on');
	});

	$('#blog_categories').click(function(){
    	event.preventDefault();
  		$('#slidedown').toggleClass('on');
  		$('#blog_categories').toggleClass('on');
	});


    
    var showChar = 150;
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "< Show less";
    

    $('.posttext').each(function() {
    	
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
