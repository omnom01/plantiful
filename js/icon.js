var element = document.getElementById("scroll");

window.onscroll = function setOpacity() {
    var scrollAmount = window.scrollY;
    var scaledScrollAmount = scrollAmount / 273;

    if (scaledScrollAmount > 0.9) {
        element.style.opacity = 0;
    } else {
        element.style.opacity = 1 - scaledScrollAmount;
    }
}

element.addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight);
});