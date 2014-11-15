$(document).ready(function() {

var windowWidth = $(window).width();

  //randomize which ad is loaded on the site
  var images = ['big-box-ad-2.jpg', 'big-box-ad-3.jpg', 'big-box-ad.gif'];
  $('<img src="/_img/_ads/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.sponsored-content-img');

//Mobile nav toggling action-action-action
	$(".m-nav-toggle").click(function(){
		console.log("clicked");
			$(".nav-link-mod").toggleClass("visible");
	});

    $(window).bind("resize",function(){
        windowWidth = $(this).width();
        if (windowWidth <760){
        $(".nav-link-mod").removeClass('hidden')
        }
        else{
        $(".nav-link-mod").removeClass('visible')
        }
    })

// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

//Anchor Slide
	$("a.anchorLink").anchorAnimate();
});














