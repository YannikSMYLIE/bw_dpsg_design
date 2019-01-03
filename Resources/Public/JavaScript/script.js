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