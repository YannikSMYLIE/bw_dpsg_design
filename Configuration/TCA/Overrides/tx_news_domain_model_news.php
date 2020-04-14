<?php
defined('TYPO3_MODE') or die();

$temporaryColumns = array (
    'background_image' => array (
        'exclude' => 0,
        'label' => 'LLL:EXT:bw_dpsg_design/Resources/Private/Language/locallang.xlf:tx_news_domain_model_news.background_image',
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
            'background_image',
            [
                'appearance' => [
                    'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'
                ],
                // custom configuration for displaying fields in the overlay/reference table
                // to use the image overlay palette instead of the basic overlay palette
                'overrideChildTca' => [
                    'maxitems' => 1,
                    'types' => [
                        '0' => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                    ],
                ],
            ],
            $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']
        ),
    ),
    'stufen' => [
        'label' => 'LLL:EXT:bw_dpsg_design/Resources/Private/Language/locallang.xlf:tx_news_domain_model_news.stufen',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectMultipleSideBySide',
            'items' => [
                ['Wölflinge', 'woelflinge'],
                ['Jungpfadfinder', 'jungpfadfinder'],
                ['Pfadfinder', 'pfadfinder'],
                ['Rover', 'rover'],
                ['Leiterrunde', 'leiterrunde'],
            ],
        ],
    ],
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tx_news_domain_model_news',
    $temporaryColumns
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'tx_news_domain_model_news',
    'background_image',
    '',
    'after:fal_media'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'tx_news_domain_model_news',
    'stufen',
    '',
    'after:title'
);