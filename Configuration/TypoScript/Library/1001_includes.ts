page = PAGE

page {
    # CSS
    includeCSS {
        dpsg = EXT:bw_dpsg_design/Resources/Public/Css/dpsg.css

        bootstrap = EXT:bw_dpsg_design/Resources/ThirdParty/bootstrap/css/bootstrap.css
        bootstrap.disableCompression = 1
    }

    # JavaScript
    includeJS {
        jquery = EXT:bw_dpsg_design/Resources/ThirdParty/jquery/jquery-3.3.1.min.js
        jquery.disableCompression = 1
		
        bootstrap = EXT:bw_dpsg_design/Resources/ThirdParty/bootstrap/js/bootstrap.bundle.js
        bootstrap.disableCompression = 1

        fontawesome = EXT:bw_dpsg_design/Resources/ThirdParty/fontawesome/all.min.js
        fontawesome.disableCompression = 1

        script = EXT:bw_dpsg_design/Resources/Public/JavaScript/script.js
    }
    includeJSFooter {

    }
}