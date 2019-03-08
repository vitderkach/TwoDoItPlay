// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const appbar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector(".mdc-top-app-bar"));
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
const lists = document.querySelectorAll(".mdc-list");
lists.forEach(list => mdc.list.MDCList.attachTo(list));
const textFields = document.querySelectorAll(".mdc-text-field");
textFields.forEach(textField => mdc.textField.MDCTextField.attachTo(textField));
const textFieldIcons = document.querySelectorAll(".mdc-text-field__icon");
textFieldIcons.forEach(icon => mdc.textField.MDCTextFieldIcon.attachTo(icon));
const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector(".mdc-tab-bar"));
const menu = mdc.menu.MDCMenu.attachTo(document.querySelector(".mdc-menu"));
const menuButton = document.getElementById("menubuttongenre");
const drawerObject = document.querySelector(".mdc-drawer");
const fixedBar = document.querySelector(".fixedbar");
const iconButtonRipples = document.querySelectorAll(".mdc-icon-button");
const favoriteToggleButtons = document.querySelectorAll(".add-to-favorites");
favoriteToggleButtons.forEach(favoriteToggleButton =>
    mdc.iconButton.MDCIconButtonToggle.attachTo(favoriteToggleButton));
menuButton.onclick = function () {
    menu.open = true;
}
window.addEventListener("scroll", ScrollHeaderElements, false);

const switchBlocks = document.querySelectorAll(".switch-block");
switchBlocks.forEach(switchBlock => switchBlock.addEventListener("click", switchBlockOption.bind(this, switchBlock)));

const itemGalleryLeftButton = document.querySelector(".slideshow__button--left");
const itemGalleryRightButton = document.querySelector(".slideshow__button--right");
const itemGalleryContent = document.querySelector(".slideshow__content");
console.log(itemGalleryContent);
const itemGalleryCollection = document.querySelector(".slideshow__collection");

const descriptioSwitchBlock = document.querySelector(".description__switchBlock");
const itemDescriptionContent = document.querySelector(".description__content");
const itemDescriptionButtonText = document.querySelector(".description__buttontext");
descriptioSwitchBlock.addEventListener("click", ClickDescriptioSwitchBlock.bind(this, itemDescriptionContent), false);
itemGalleryLeftButton.addEventListener("mousedown", function () {
    leftButtonDelay = setInterval(ScrollItemGalleryToLeft.bind(this, itemGalleryContent, itemGalleryCollection), 100);
});
itemGalleryLeftButton.addEventListener("mouseup", function () {
    clearInterval(leftButtonDelay);

});
itemGalleryLeftButton.addEventListener("mouseout", function () {
    clearInterval(leftButtonDelay);

});

itemGalleryRightButton.addEventListener("mousedown", function () {
    rightButtonDelay = setInterval(ScrollItemGalleryToRight.bind(this, itemGalleryCollection), 100);
});
itemGalleryRightButton.addEventListener("mouseup", function () {
    clearInterval(rightButtonDelay);

});
itemGalleryRightButton.addEventListener("mouseout", function () {
    clearInterval(rightButtonDelay);

});

function ScrollHeaderElements() {
    var appBarOffsetTop = appbar.foundation_.currentAppBarOffsetTop_;
    drawer.root_.style.paddingTop = appBarOffsetTop + 64 + "px";
    fixedBar.style.paddingTop = appBarOffsetTop + 64 + "px";
}


function ScrollItemGalleryToLeft(content, collection) {
    var leftPos = Number.parseInt(collection.style.left);
    if (!Number.isInteger(leftPos)) {
        leftPos = 0;
    }


    if (leftPos - 10 > (content.offsetWidth - collection.offsetWidth)) {
        var leftPos = leftPos - 10 + "px"
        collection.style.left = leftPos;

    }

}

var leftButtonDelay;
var rightButtonDelay;

function ScrollItemGalleryToRight(collection) {
    var leftPos = Number.parseInt(collection.style.left);
    if (!Number.isInteger(leftPos)) {
        leftPos = 0;
    }
    if (leftPos < 0) {
        var leftPos = leftPos + 10 + "px";
        collection.style.left = leftPos;
    }
}

function ClickDescriptioSwitchBlock(content) {
    content.classList.toggle("description__content--hidden");
}

function switchBlockOption(switchBlock) {
    var options = switchBlock.querySelectorAll(".switch-block__option");
    console.log(options);
    options.forEach(option => option.classList.toggle("switch-block__option--invisible"));

}