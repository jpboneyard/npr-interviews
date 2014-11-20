$(document).ready(function() {

var windowWidth = $(window).width();


//randomize which ad is loaded on the site
var imageObjects = [
    {"img": "big-box-ad-2.gif", "link":"http://google.com"}, 
    {"img": "big-box-ad-3.gif", "link":"http://amazon.com"},
    {"img": "big-box-ad.gif", "link":"http://jakprints.com"}
];

var imgObject =  imageObjects[Math.floor(Math.random() * imageObjects.length)]
$('<a href="' + imgObject.link + '" target="_blank"><img src="/_img/_ads/' + imgObject.img + '"></a>').appendTo('.sponsored-content-img');


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


//Fade Topper Image
var divs = $('.fade-me');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - st/1200) });
});


//Input Article Title Text into Follow Header
var str = $( ".interview-name" ).text();
$( ".social-name" ).html( str );












