function hashAnchor() {
    var hash = location.hash;
    if(hash !== undefined){
        if(hash !== ""){
            var _offsetTop = $(hash).offset().top;
            setTimeout(function () {
                $window.scrollTop(_offsetTop);
            },100)
        }
    }
}