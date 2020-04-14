# Breadcrum Navigation Top
page {
    10 {
        dataProcessing {
            50 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            50 {
                special = rootline
                special.ringe = 0|-1
                as = breadcrum
                titleField = nav_title // title
            }
        }
    }
}