
$(document).ready(function() {
 	$('.ryu').mouseenter(function() {
 		$('.ryu-still').hide();
    	$('.ryu-ready').show();
  	})
  	.mouseleave(function() {
    	$('.ryu-ready').hide();
    	$('.ryu-still').show();
  	})
  	.mousedown(function() {
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
  			{'left': '1070px'},
  			500,
  			function() {
  				$(this).hide();
  				$(this).css('left', '570px');
  			});
  	})
  	.mouseup(function() {
  		$('.ryu-action').hide();
  		$('.ryu-ready').show();
  	})
    $(document).keydown(function(e) {
      if(e.which == 88){
      $('.ryu-action').hide();  
      $('.ryu-cool').show()
      }
    })
    $(document).keyup(function(e) {
      if(e.which == 88){
      $('.ryu-action').hide()
      $('.ryu-ready').show();  
      }
    })  
});

function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}