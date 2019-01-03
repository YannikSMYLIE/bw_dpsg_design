page = PAGE

page {
    # Template
    10 = FLUIDTEMPLATE
    10 {
        partialRootPath = EXT:bw_dpsg_design/Resources/Private/Partials/
        layoutRootPath = EXT:bw_dpsg_design/Resources/Private/Layouts/

        # Layouts
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = pagelayout

        # Default Layout
        default = TEXT
        default.value = EXT:bw_dpsg_design/Resources/Private/Templates/Default.html

        # Wenn Startseite
            pagets__1 = TEXT
            pagets__1.value = EXT:bw_dpsg_design/Resources/Private/Templates/Homepage.html

        # Wenn Stufen
            pagets__2 = TEXT
            pagets__2.value = EXT:bw_dpsg_design/Resources/Private/Templates/Stufen.html

        # Sonst
            pagets__3 < .default
        }

        # Variablen
        variables {
            jumbotron < styles.content.get
            jumbotron.select.where = colPos = 3

            left < styles.content.get
            left.select.where = colPos = 1

            main < styles.content.get
            main.select.where = colPos = 0

            right < styles.content.get
            right.select.where = colPos = 2
        }
    }

    # META
    meta {
        X-UA-Compatible = IE=edge,chrome=1
        X-UA-Compatible.httpEquivalent = 1

        viewport = width=device-width, initial-scale=1
    }
}