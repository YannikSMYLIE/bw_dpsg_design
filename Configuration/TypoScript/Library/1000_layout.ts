page = PAGE

page {
    # Template
    typeNum=0

    10 = FLUIDTEMPLATE
    10 {
        format = html

        layoutRootPaths {
            0 = EXT:bw_dpsg_design/Resources/Private/Layouts/
        }

        partialRootPaths {
            0 = EXT:bw_dpsg_design/Resources/Private/Partials/
        }

        templateRootPaths {
            0 = EXT:bw_dpsg_design/Resources/Private/Templates/
        }

        # Layouts
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
            key.data = pagelayout

            # Default Layout
            default = TEXT
            default.value = Default

            # Wenn Startseite
            pagets__1 = TEXT
            pagets__1.value = Homepage

            # Wenn Stufen
            pagets__2 = TEXT
            pagets__2.value = Stufen

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