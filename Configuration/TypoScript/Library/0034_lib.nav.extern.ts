# Meta-Navigation

# Externe Seiten
lib.nav.extern = HMENU
lib.nav.extern {
    special = directory
    special.value  < settings.uidNavExtern.value
    wrap = <ul>|</ul>

    1 = TMENU
    1 {
        NO = 1
        NO {
            allWrap = <li>|</li>
            stdWrap.htmlSpecialChars = 1
            ATagTitle.field = abstract // description // subtitle // title
        }

        CUR < .NO
        CUR {
            allWrap = <li class="active">|</li>
        }
    }
}