<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TSconfig/Page.tsconfig">'
);

// Einstellungen einlesen und als cObject speichern
/*
$settings = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);
$cObjectPlain = "";
foreach($settings as $key => $setting) {
	$cObjectPlain .= "settings.".$key." = TEXT\n";
	$cObjectPlain .= "settings.".$key.".value = ".$setting."\n";
}
// Das Coverfoto einlesen
$cover = explode(",", $settings["uidsHeaderImages"]);
if(count($cover) > 0 && (int)$cover[0] > 0) {
	$imgUid = $cover[rand(0, count($cover) - 1)];
}
$cObjectPlain .= "settings.uidHeaderImage = TEXT\n";
$cObjectPlain .= "settings.uidHeaderImage.value = ".$imgUid."\n";
//var_dump($cObjectPlain); die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup($cObjectPlain);*/