# Navigation für SocialMedia und Kontaktaufnahmefunktion

lib.nav.socialmedia = HMENU
lib.nav.socialmedia {
    special = directory
    special.value < settings.uidNavSocialMedia.value
    wrap = <ul class="socialMedia">|</ul>

    1 = TMENU
    1 {
        NO = 1
        NO {
            allWrap = <li>|</li>
            stdWrap.htmlSpecialChars = 0
            ATagTitle.field = abstract // description // subtitle // title
			altTarget = _blank
        }
    }
}
