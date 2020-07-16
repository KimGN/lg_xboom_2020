function scrollEvent() {
    var $discoverBtn = $("#discoverBtn");
    $(window).scroll(function () {
        headerFix();
    });
    function headerFix() {
        if (winSc > 50) {
            $header.addClass("fixed");
            $discoverBtn.fadeOut();
        } else {
            $header.removeClass("fixed");
            $discoverBtn.fadeIn();
        }
    }
    headerFix();
}