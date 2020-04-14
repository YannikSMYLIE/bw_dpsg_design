<?php
namespace BoergenerWebdesign\BwDpsgDesign\Domain\Model;
class NewsDefault extends \GeorgRinger\News\Domain\Model\NewsDefault {
    /**
     * @var string
     */
    protected $stufen;
    /**
     * @return array
     */
    public function getStufen() : array {
        return explode(",", $this -> stufen);
    }
    /**
     * @param string $stufen
     */
    public function setStufen(string $stufen) : void {
        $this -> stufen = $stufen;
    }

    /**
     * @var \TYPO3\CMS\Extbase\Domain\Model\FileReference
     */
    protected $backgroundImage = null;
    /**
     * @param \TYPO3\CMS\Extbase\Domain\Model\FileReference $backgroundImage
     */
    public function setBackgroundImage(\TYPO3\CMS\Extbase\Domain\Model\FileReference $backgroundImage) : void {
        $this -> backgroundImage = $backgroundImage;
    }
    /**
    * @return \TYPO3\CMS\Extbase\Domain\Model\FileReference
    */
    public function getBackgroundImage() {
        return $this->backgroundImage;
    }

}