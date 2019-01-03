# Breadcrum Navigation Top
lib.breadcrumb = HMENU
lib.breadcrumb {
    special = rootline
    special.ringe = 0|-1

    wrap = <ol class="breadcrumb">|</ol>

    1 = TMENU
    1 {
        NO = 1
        NO {
            allWrap = <li class="breadcrumb-item">|</li>
            stdWrap.htmlSpecialChars = 1
            ATagTitle.field = abstract // description // subtitle // title
        }

        CUR < .NO
        CUR {
            allWrap = <li class="breadcrumb-item active">|</li>
            doNotLinkIt = 1
        }
    }
}