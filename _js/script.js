$(document).ready(function() {

var windowWidth = $(window).width();

//interview items
var interviewObjects = [
    {
        "index": "1",
         "link": "/interview/hatch-show-print",
         "name": "Hatch Show Print"
     }, 
    {
        "index": "2",
         "link": "/interview/aaron-draplin",
         "name": "Dan McCarthy"
     },
     {
        "index": "3",
         "link": "/interview/Laura-Baisden",
         "name": "Laura Baisden"
     }
];

for (var i = interviewObjects.length - 1; i >= 0; i--) {
    var page = interviewObjects[i];
    if(window.location.href.indexOf(page.link) >= 0){

        if(i - 1 >= 0){
            var previousPage = interviewObjects[i-1];
            $('<a href="' + previousPage.link + '">No. ' + previousPage.index  + ' | '  +  previousPage.name + ' <span class="tab-arrow left-arrow">&#8592;</span></a>').appendTo('.previous-tab')
        }else{
            $('.previous-tab').hide()
        }

        if(i + 1 < interviewObjects.length){
            var nextPage = interviewObjects[i+1];
            $('<a href="' + nextPage.link +'"><span class="tab-arrow">&#8594;</span>  '  +  nextPage.name +  ' | No. '  +  nextPage.index +'  </a>').appendTo('.next-tab')
        }else{
            $('.next-tab').hide()
        }
    }
};


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


//Add Class to Tabs on Scroll to Show Tabs
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 0) {
        $(".tab").addClass("tab-fade").removeClass("tab-start");
        $(".scroll-arrow-mod").addClass("arrow-fade").removeClass("arrow-start");
    } else {
        $(".tab").removeClass("tab-fade");
    }
});






