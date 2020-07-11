/*
$(window).scroll(function() {
    // Container
    const logo_container = $('header .logo_container');
    const logo_container_height = logo_container.css("height").replace("px", "");
    // Navbar
    const navbar = $('header nav');
    const navbar_height = navbar.css("height").replace("px", "");
    const navbar_margin_bottom = navbar.css("margin-bottom").replace("px", "");

    const topOffset = $(window).scrollTop();
    if(topOffset >= logo_container_height) {
        navbar.addClass("navbar-fixed-top");
        logo_container.css("margin-bottom", (Number(navbar_height) + Number(navbar_margin_bottom)) + "px");
    } else {
        navbar.removeClass("navbar-fixed-top");
        logo_container.css("margin-bottom", "0px");
    }

    //alert(topOffset);
});*/

// Lazy Load Bilder
const lazyLoads = [];
$(document).ready(function() {
    const divs = $('*[data-lazy-img-bg]');

    divs.each(function() {
        lazyLoads.push($(this));
    });
    workOnLazyLoad();
    workOnLazyLoad();
    workOnLazyLoad();
    workOnLazyLoad();
});
function workOnLazyLoad() {
    if(!lazyLoads.length) {
        return;
    }
    const div = lazyLoads.shift();
    console.log(div);
    const width = div.width();

    let url = div.attr("data-lazy-img-bg");
    if(width > 500) {
        url = div.attr("data-lazy-img-bg-700");
    } else if(width > 300) {
        url = div.attr("data-lazy-img-bg-500");
    } else if(width > 100) {
        url = div.attr("data-lazy-img-bg-300");
    }

    $('<img/>').attr('src', url).on('load', function() {
        $(this).remove();
        div.css("background-image", "url('" + url + "')").hide().fadeIn();
        workOnLazyLoad();
    });
}