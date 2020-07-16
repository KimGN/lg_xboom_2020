function layout() {
    //gnb nav
    var $allNav = $("#allNav");
    var $gnbNav = $allNav.find("nav");
    var $allMenuBtn = $("#allMenuBtn");
    var $navDimmed = $("#navDimmed");

    //nav btn open
    $allMenuBtn.click(function () {
        var _this = $(this);
        if(!$allNav.hasClass("nav_open")){
            $html.addClass("no_scroll");
            $allNav.addClass("nav_open");
            TweenMax.to($navDimmed, .3, {display:"block", opacity:.6});
            TweenMax.to($gnbNav, .3, {x:"0%", ease:esStep});
        } else {
            allNavClose();
        }
    });
    $navDimmed.click(function () {
        allNavClose();
    });

    //buy nav
    var $buyNav = $("#buyNav");
    var $buyDepth = $buyNav.find("nav");
    var $buyNavBtn = $("#buyNavBtn");

    //nav btn open
    $buyNavBtn.click(function () {
        var _this = $(this);
        if(!$buyNav.hasClass("nav_open")){
            $html.addClass("no_scroll");
            $buyNav.addClass("nav_open");
            TweenMax.to($navDimmed, .3, {display:"block", opacity:.6});
            TweenMax.to($buyDepth, .3, {x:"0%", ease:esStep});
        } else {
            allNavClose();
        }
    });

    //nav close
    $navDimmed.click(function () {
        allNavClose();
    });
    function allNavClose(){
        $html.removeClass("no_scroll");
        $("#allNav, #buyNav").removeClass("nav_open");
        TweenMax.to($navDimmed, .3, {display:"none", opacity:0});
        TweenMax.to($gnbNav, .3, {x:"-100%", ease:esStep});
        TweenMax.to($buyDepth, .3, {x:"100%", ease:esStep});
    }

    //cookie
    var _cookieNameFunctional = "UK_LGCOM_IMPROVEMENTS",
        _cookieNameSocial = "UK_LGCOM_SOCIAL_MEDIA",
        _cookieNameAnalysis = "UK_LGCOM_ANALYSIS_OF_SITE",
        _cookieNameAdvertising = "UK_LGCOM_ADVERTISING";

    var $cookieAll = $("#cookieAllPc"),
        $cookieAllAgree = $cookieAll.find("#allAgreeBtn");
    var $cookieClose = $cookieAll.find("#cookieClose");
    var $cookieSave = $cookieAll.find("#cookieSave");
    var $cookieOpenBtn = $cookieAll.find("#cookieOpenBtn");

    var $functionalAgree = document.getElementById("functionalAgree"),
        $socialAgree = document.getElementById("socialAgree"),
        $analysisAgree = document.getElementById("analysisAgree"),
        $advertisingAgree = document.getElementById("advertisingAgree");

    $cookieOpenBtn.click(function () {
        var _this = $(this);
        if(!_this.hasClass("open")){
            _this.addClass("open");
            TweenMax.to($cookieAll, .5, {height:430});
        } else {
            _this.removeClass("open");
            TweenMax.to($cookieAll, .5, {height:110});
        }
    });

    $cookieAllAgree.click(function(){
        setCookie(_cookieNameFunctional, "Y", 365);
        setCookie(_cookieNameSocial, "Y", 365);
        setCookie("analysisCookie", "Y", 365);
        setCookie(_cookieNameAnalysis, "Y", 365);
        setCookie(_cookieNameAdvertising, "Y", 365);
        window.location.reload();
    });

    if(getCookie(_cookieNameFunctional) === "Y" && getCookie(_cookieNameSocial) === "Y" && getCookie("analysisCookie") === "Y" && getCookie(_cookieNameAdvertising) === "Y"){

    } else {
        $cookieAll.addClass("cookie_open");
    }
    $cookieSave.click(function(){
        if($functionalAgree.checked === true){
            setCookie(_cookieNameFunctional, "Y", 365);
        } else {
            setCookie(_cookieNameFunctional, "N", 365);
        }
        if($socialAgree.checked === true){
            setCookie(_cookieNameSocial, "Y", 365);
        } else {
            setCookie(_cookieNameSocial, "N", 365);
        }
        if($analysisAgree.checked === true){
            setCookie("analysisCookie", "Y", 365);
            setCookie(_cookieNameAnalysis, "Y", 365);
        } else {
            setCookie("analysisCookie", "N", 365);
            setCookie(_cookieNameAnalysis, "N", 365);
        }
        if($advertisingAgree.checked === true){
            setCookie(_cookieNameAdvertising, "Y", 365);
        } else {
            setCookie(_cookieNameAdvertising, "N", 365);
        }
        window.location.reload();
    });
    if(getCookie(_cookieNameFunctional) === "Y"){
        $functionalAgree.checked = true;
    }
    if(getCookie(_cookieNameSocial) === "Y"){
        $socialAgree.checked = true;
    }
    if(getCookie("analysisCookie") === "Y" || getCookie(_cookieNameAnalysis) === "Y"){
        $analysisAgree.checked = true;
    }
    if(getCookie(_cookieNameAdvertising) === "Y"){
        $advertisingAgree.checked = true;
    }
}