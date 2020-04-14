# Hauptnavigation
page {
    10 {
        dataProcessing {
            30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            30 {
                levels = 2
                entryLevel = 0
                expandAll = 1
                as = nav_main
                titleField = nav_title // title
            }
        }
    }
}

# Unterseiten
page {
    10 {
        dataProcessing {
            40 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            40 {
                entryLevel = 1
                expandAll = 1
                levels = 2
                as = nav_sub
                titleField = nav_title // title
            }
        }
    }
}