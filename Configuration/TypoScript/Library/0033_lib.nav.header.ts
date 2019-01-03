# Navigation für Header und sehr wichtige Seiten

lib.nav.header = HMENU
lib.nav.header {
    special = directory
    special.value < settings.uidNavHeader.value
    wrap = <ul class="links d-none d-md-block">|</ul>

    1 = TMENU
    1 {
        NO = 1
        NO {
            allWrap = <li>|</li>
            stdWrap.htmlSpecialChars = 0
            ATagTitle.field = abstract // description // subtitle // title
        }
    }
}