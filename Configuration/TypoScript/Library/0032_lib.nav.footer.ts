# Internet Seiten Links
page {
    10 {
        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            10 {
                special = directory
                special.value = {$plugin.tx_bwdpsgdesign.settings.navigation.footer_left}
                levels = 1
                as = nav_footer_left
                titleField = nav_title // title
            }
        }
    }
}

# Externe Dienste
page {
    10 {
        dataProcessing {
            20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            20 {
                special = directory
                special.value = {$plugin.tx_bwdpsgdesign.settings.navigation.footer_extern}
                levels = 1
                as = nav_footer_extern
                titleField = nav_title // title
            }
        }
    }
}