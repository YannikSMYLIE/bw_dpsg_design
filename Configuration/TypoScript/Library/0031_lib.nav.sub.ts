# Subnavigation in linker Spalte
lib.nav.sub = HMENU
lib.nav.sub {
    entryLevel = 1

    stdWrap.required = 1
    stdWrap.wrap = <ul>|</ul>

    1 = TMENU
    1 {

        NO = 1
        NO {
            wrapItemAndSub  = <li class="clearfix"><div class="icon"><i class="fa fa-caret-right fa-fw" aria-hidden="true"></i></div><div class="text">|</div></li>
            stdWrap.htmlSpecialChars = 0
            ATagTitle.field = abstract // description // subtitle // title
        }

        CUR < .NO
        CUR {
            wrapItemAndSub  = <li class="active clearfix"><div class="icon"><i class="fa fa-caret-right fa-fw" aria-hidden="true"></i></div><div class="text">|</div></li>
        }
        CURIFSUB < .NO
        CURIFSUB {
            wrapItemAndSub  = <li class="active clearfix"><div class="icon"><i class="fa fa-caret-down fa-fw" aria-hidden="true"></i></div><div class="text">|</div></li>
        }

        ACT < .CUR
		ACTIFSUB < .CURIFSUB
		
    }

    2 < .1
    2 {
        wrap = <ul>|</ul>

        NO.wrapItemAndSub = <li class="clearfix"><div class="icon"><i class="fa fa-caret-right fa-fw" aria-hidden="true"></i></div><div class="text">|</div></li>
        CUR.wrapItemAndSub = <li class="active clearfix"><div class="icon"><i class="fa fa-caret-right fa-fw" aria-hidden="true"></i></div><div class="text">|</div></li>

        IFSUB >
        CURIFSUB >
    }

    3 < .2

}