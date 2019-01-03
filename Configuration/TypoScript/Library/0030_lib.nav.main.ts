# Hauptnavigation
lib.nav.main = COA
lib.nav.main {
    10 = HMENU
    10 {

        1 = TMENU
        1 {
            expAll = 1
            NO = 1
            NO {
                wrapItemAndSub = <li class="nav-item">|</li>
                stdWrap.htmlSpecialChars = 1
				ATagParams = class="nav-link"
                ATagTitle.field = astract // description // subtitle // title
            }

            CUR < .NO
            CUR {
                wrapItemAndSub = <li class="nav-item active">|</li>
            }

            IFSUB < .NO
            IFSUB {
                wrapItemAndSub = <li class="nav-item dropdown">|</li>
                ATagParams = class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                stdWrap.noTrimWrap = || <span class="caret"></span>|
            }

            ACTIFSUB < .IFSUB
            ACTIFSUB.ATagParams = class="nav-link dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

            CURIFSUB < .ACTIFSUB
        }

        2 < .1
        2 {
            wrap = <div class="dropdown-menu">|</div>
            NO {
                wrapItemAndSub = 
                stdWrap.htmlSpecialChars = 1
				ATagParams = class="nav-link"
                ATagTitle.field = astract // description // subtitle // title
            }
            CUR < .NO
			

            IFSUB >
            CURIFSUB >
            ACTIFSUB >

            SPC = 1
            SPC.allWrap = <li role="seperator" class="divider">|</li>
        }
    }

}