# Meta-Navigation

# Externe Seiten
lib.nav.footer = HMENU
lib.nav.footer {
    special = directory
    special.value  < settings.uidNavFooter.value
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