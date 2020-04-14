<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'DPSG Template für TYPO3',
    'description' => 'Ein Template für TYPO3 im Corperated Design der Deutschen Pfadfinderschaft Sankt Georg.',
    'category' => 'plugin',
    'author' => 'Yannik Boergener',
    'author_email' => 'kontakt@boergener.de',
    'state' => 'stable',
    'internal' => '',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '9.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.13-9.5.99',
            'mask' => '4.1.0-4.1.99',
            'ws_scss' => '1.1.0-1.1.99',
        ],
        'conflicts' => [],
        'suggests' => [
            'news' => '7.3.1-7.3.99'
        ],
    ],
];
