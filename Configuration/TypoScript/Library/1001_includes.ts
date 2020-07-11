page = PAGE

page {
    # CSS
    includeCSS {
        dpsg = EXT:bw_dpsg_design/Resources/Public/Css/dpsg.css
        width = EXT:bw_dpsg_design/Resources/Public/Css/width.css

        bootstrap = EXT:bw_dpsg_design/Resources/ThirdParty/bootstrap/css/bootstrap.css
        bootstrap.disableCompression = 1

        fancybox = https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css
    }

    # JavaScript
    includeJS {
        jquery = EXT:bw_dpsg_design/Resources/ThirdParty/jquery/jquery-3.3.1.min.js
        jquery.disableCompression = 1
		
        bootstrap = EXT:bw_dpsg_design/Resources/ThirdParty/bootstrap/js/bootstrap.bundle.js
        bootstrap.disableCompression = 1

        fontawesome = EXT:bw_dpsg_design/Resources/ThirdParty/fontawesome/all.min.js
        fontawesome.disableCompression = 1

        fancybox = https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js

        script = EXT:bw_dpsg_design/Resources/Public/JavaScript/script.js
    }
    includeJSFooter {

    }
}