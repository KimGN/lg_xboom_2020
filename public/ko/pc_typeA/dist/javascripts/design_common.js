"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var esOut = "Expo.easeOut";
var $window = $(window);
var winSc;
var $header = $("#header");
var $html = $("html");
var controller = null;

$window.load(function () {
    winW = $(this).width();
    winH = $(this).height();
    winSc = $(this).scrollTop();
    $(this).on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(this).scroll(function () {
        winSc = $(this).scrollTop();
    });
    layout();
    main();
    pn();
    pl();
    meridian();
    jellybean();
    scrollEvent();
    hashAnchor();
});

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
function jellybean() {
    var $jbContainer = $("#container.jellybean_container");
    if(!$jbContainer.length) return false;

    /* jb series scene 1 */
    var controller = new ScrollMagic.Controller({
        tweenChanges: true
    });
    var $jbSeries = $("#jbSeries");
    var $jbSeriesimg01 = $jbSeries.find(".jb_img02");

    var $jbSeriestxt01 = $jbSeries.find(".jb_txt h3"),
        $jbSeriestxt02 = $jbSeries.find(".jb_img03");

    var jbSeriesimg01 = TweenMax.to($jbSeriesimg01, .5, {top:0, left:0});
    var jbSeriestxt01 = TweenMax.to($jbSeriestxt01, .5, {opacity:0}),
        jbSeriestxt02 = TweenMax.to($jbSeriestxt02, .5, {opacity:1});


    var jbSeriesTime = new TimelineMax();
    jbSeriesTime.add([jbSeriesimg01, jbSeriestxt01, jbSeriestxt02]);

    var sceneJbSeries = new ScrollMagic.Scene({
        triggerElement: "#jbSeries",
        duration:3000,
        triggerHook:0
    })
        .setPin("#jbSeries")
        .setTween(jbSeriesTime)
        .addTo(controller);


    //jblist scene
    var $jblist = $("#jblist");

    $jblist.find("ul li").on("click" ,function () {
        var _index = $(this).index();
        listChainge(_index);
        console.log(_index);
    })
    function listChainge(index) {
        var _active = $jblist.find(".list_wrap div").eq(index);
        TweenMax.to(_active.siblings(), 1, {zIndex:0, opacity:0});
        TweenMax.to(_active, 1.5, {zIndex:1, opacity:1});
    }

    /* pl series scene 2 */


    var $meridianTech = $("#meridian_tech");
    var $meridianTechimg01 = $meridianTech.find(".tech_img01");

    var $meridianTechtxt01 = $meridianTech.find(".txt_wrap h3"),
        $meridianTechtxt02 = $meridianTech.find(".txt_wrap p");

    var meridianTechimg01 = TweenMax.to($meridianTechimg01, .5, {top:0, left:0});
    var meridianTechtxt01 = TweenMax.to($meridianTechtxt01, .5, {opacity:0, y:"-20%", delay:.5}),
        meridianTechtxt02 = TweenMax.to($meridianTechtxt02, .5, {opacity:1, y:0, delay:1});


    var meridianTechTime = new TimelineMax();
    meridianTechTime.add([meridianTechimg01, meridianTechtxt01, meridianTechtxt02]);

    var sceneMeridianTech = new ScrollMagic.Scene({
        triggerElement: "#meridian_tech",
        duration:4500,
        triggerHook:0
    })
        .setPin("#meridian_tech")
        .setTween(meridianTechTime)
        .addTo(controller);

    // sound_boost
    var $soundBoost = $("#sound_boost");
    var $soundBoostimg01 = $soundBoost.find(".sound_img02"),
        $soundBoostimg02 = $soundBoost.find(".sound_img03"),
        $soundBoostimg03 = $soundBoost.find(".sound_img04"),
        $soundBoostimg04 = $soundBoost.find(".sound_img05");

    var $soundBoosttxt01 = $soundBoost.find(".txt_wrap h3"),
        $soundBoosttxt02 = $soundBoost.find(".txt_wrap p");

    var soundBoostimg01 = TweenMax.to($soundBoostimg01, .2, {opacity:1, delay:.5}),
        soundBoostimg02 = TweenMax.to($soundBoostimg02, .2, {opacity:1, delay:1}),
        soundBoostimg03 = TweenMax.to($soundBoostimg03, .2, {opacity:1, delay:1.5}),
        soundBoostimg04 = TweenMax.to($soundBoostimg04, .2, {opacity:1, delay:2});
    var soundBoosttxt01 = TweenMax.to($soundBoosttxt01, .5, {opacity:1, y:0, delay:.5}),
        soundBoosttxt01_end = TweenMax.to($soundBoosttxt01, .5, {opacity:0, y:"-20%", delay:.5}),
        soundBoosttxt02 = TweenMax.to($soundBoosttxt02, .5, {opacity:1, y:0, delay:1});


    var soundBoostTime = new TimelineMax();
    soundBoostTime.add([soundBoostimg01, soundBoosttxt01, soundBoostimg02])
        .add([soundBoosttxt01_end, soundBoosttxt02,soundBoostimg03, soundBoostimg04]);

    var sceneSoundBoost = new ScrollMagic.Scene({
        triggerElement: "#sound_boost",
        duration:5500,
        triggerHook:0
    })
        .setPin("#sound_boost")
        .setTween(soundBoostTime)
        .addTo(controller);


    /* jb series scene 2 */
    var simplyController = new ScrollMagic.Controller({
        tweenChanges: true
    });



    //surround
    var $surround = $("#surround");
    var $surroundTxt01 = $surround.find(".txt_wrap h3"),
        $surroundTxt02 = $surround.find(".txt_wrap p"),
        $surroundTxt03 = $surround.find(".disc");

    var $surroundImg01 = $surround.find(".surround_img01"),
        $surroundImg02 = $surround.find(".surround_img02"),
        $surroundImg03 = $surround.find(".surround_img03");

    var surroundSceneTxt01 = TweenMax.to($surroundTxt01, 1, {y:-20, opacity:0}),
        surroundSceneTxt02 = TweenMax.to($surroundTxt02, 2, {y:0, opacity:1, delay:.5}),
        surroundSceneTxt03 = TweenMax.to($surroundTxt03, 2, {opacity:1, delay:.5});

    var surroundSceneImg01 = TweenMax.to($surroundImg01, 2, {x:"-50%"}),
        surroundSceneImg02 = TweenMax.to($surroundImg02, 2, {x:"-50%"}),
        surroundSceneImg03 = TweenMax.to($surroundImg03, 1, {opacity:1, delay:2});

    var surroundTime = new TimelineMax();
    surroundTime.add([surroundSceneImg01, surroundSceneImg02, surroundSceneImg03, surroundSceneTxt01, surroundSceneTxt02, surroundSceneTxt03]);

    var sceneSurround = new ScrollMagic.Scene({
        triggerElement: "#surround",
        duration:2500,
        triggerHook:0
    })
        .setPin("#surround")
        .setTween(surroundTime)
        .addTo(simplyController);

    //battery
    var $battery = $("#battery");
    var $batteryTxt01 = $battery.find(".txt_wrap h3"),
        $batteryTxt02 = $battery.find(".txt_wrap p"),
        $batteryTxt03 = $battery.find(".disc");

    var $batteryImg01 = $battery.find(".battery_img01"),
        $batteryImg03 = $battery.find(".battery_img03");

    var batterySceneTxt01 = TweenMax.to($batteryTxt01, 1, {y:0, opacity:1}),
        batterySceneTxt01_end = TweenMax.to($batteryTxt01, 1, {y:-20, opacity:0}),
        batterySceneTxt02 = TweenMax.to($batteryTxt02, 2, {y:0, opacity:1, delay:.5}),
        batterySceneTxt03 = TweenMax.to($batteryTxt03, 1, {opacity:1, delay:1.5});

    var batterySceneImg01 = TweenMax.to($batteryImg01, 2, {rotation:-20}),
        batterySceneImg02 = TweenMax.to($batteryImg03, 2, {y:"-50%"});

    var batteryTime = new TimelineMax();
    batteryTime.add([batterySceneTxt01, batterySceneImg01])
        .add([batterySceneTxt01_end, batterySceneTxt02, batterySceneImg02, batterySceneTxt03]);

    var batterySimply = new ScrollMagic.Scene({
        triggerElement: "#battery",
        duration:2000,
        triggerHook:0
    })
        .setPin("#battery")
        .setTween(batteryTime)
        .addTo(simplyController);

    //choice
    var $choice = $("#choice");
    var $choiceTxt01 = $choice.find(".txt_wrap h3");

    var $choiceImg01 = $choice.find(".choice_img02"),
        $choiceImg02 = $choice.find(".choice_img03"),
        $choiceImg03 = $choice.find(".choice_img04, .choice_img05"),
        $choiceImg04 = $choice.find(".choice_img06, .choice_img07, .choice_img08");

    var choiceSceneImg01 = TweenMax.to($choiceImg01, 1, {opacity:0}),
        choiceSceneImg02 = TweenMax.to($choiceImg02, 1, {opacity:1}),
        choiceSceneImg03 = TweenMax.staggerTo($choiceImg03, 1, {left:"0%", top:"0%"}, .2),
        choiceSceneImg04 = TweenMax.staggerTo($choiceImg04, 1, {left:"0%", bottom:"0%"}, .2);

    var choiceSceneTxt01 = TweenMax.to($choiceTxt01, 1, {y:"-50%", opacity:1});

    var choiceTime = new TimelineMax();
    choiceTime.add([choiceSceneImg01, choiceSceneImg02])
        .add([choiceSceneImg03, choiceSceneImg04])
        .add(choiceSceneTxt01);

    var choiceSimply = new ScrollMagic.Scene({
        triggerElement: "#choice",
        duration:2000,
        triggerHook:0
    })
        .setPin("#choice")
        .setTween(choiceTime)
        .addTo(simplyController);

    //goSoundRolling
    var $goSoundRolling = $("#goSound .slider_wrap");
    var $imgWrap = $goSoundRolling.find(".img_wrap"),
        $imgLi = $imgWrap.find("li");
    var $txtWrap = $goSoundRolling.find(".txt_wrap"),
        $txtLi = $txtWrap.find("li");
    var $indiBtn = $goSoundRolling.find(".indi_btn");
    var $prevBtn = $goSoundRolling.find(".prev_btn"),
        $nextBtn = $goSoundRolling.find(".next_btn");
    var _imgLength = $imgLi.length;

    var goSoundCrr = {};
    for(var i=0; i<_imgLength; i++){
        $indiBtn.append("<button type='button'><span></span></button>");
    }
    $indiBtn.find("button").eq(0).addClass("active");

    if(_imgLength <= 1){
        $goSoundRolling.find(".nav_btn").hide();
    }
    Object.defineProperty(goSoundCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _imgLength;
            TweenMax.to($imgLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($imgLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            TweenMax.to($txtLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($txtLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            $indiBtn.find("button").removeClass("active");
            $indiBtn.find("button").eq(_index).addClass("active");
            this.num = _index;
        }
    });
    $nextBtn.click(function () {
        goSoundCrr.number++;
    });
    $prevBtn.click(function () {
        goSoundCrr.number--;
    });
    $indiBtn.find("button").click(function () {
        var _this = $(this);
        var _index = _this.index();

        goSoundCrr.number = _index;
    });

    //choose select
    var $choose = $("#choose");
    var $colorBtn = $choose.find(".color_btn button");
    var $shopLink = $(".shop_link td");

    $colorBtn.click(function(){
        var _this = $(this);
        var _index = _this.index();
        var $colorImg = _this.parent().parent().siblings().find("img");
        var _shopIndex = _this.parent().parent().parent().index();

        TweenMax.to($colorImg, .1, {opacity:0});
        TweenMax.to($colorImg.eq(_index), .1, {opacity:1});

        _this.siblings().removeClass("active");
        _this.addClass("active");

        $shopLink.eq(_shopIndex).find("a").css({display:"none"});
        $shopLink.eq(_shopIndex).find("a").eq(_index).css({display:"inline-block"});
    });


    //water select
    var $water = $("#water");
    var $waterTxt01 = $water.find(".txt_wrap h3"),
        $waterTxt02 = $water.find(".txt_wrap p"),
        $waterTxt03 = $water.find(".txt_wrap span");

    var waterSceneTxt01 = TweenMax.to($waterTxt01, 1, {y:"-20%", opacity:0, delay:1}),
        // waterSceneTxt01_end = TweenMax.to($waterTxt01, 1, {y:"-20%", opacity:0}),
        waterSceneTxt02 = TweenMax.to($waterTxt02, 1, {y:"0%", opacity:1, delay:.5}),
        waterSceneTxt03 = TweenMax.to($waterTxt03, 1, {y:"0%", opacity:1, delay:.5});


    var waterTime = new TimelineMax();
    waterTime.add([waterSceneTxt01])
        .add([waterSceneTxt02 , waterSceneTxt03]);


    var waterSimply = new ScrollMagic.Scene({
        triggerElement: "#water",
        duration:2000,
        triggerHook:0
    })
        .setPin("#water")
        .setTween(waterTime)
        .addTo(simplyController);

    //wireless select
    var $wireless = $("#wireless");
    var $wirelessTxt01 = $wireless.find(".txt_wrap h3"),
        $wirelessTxt02 = $wireless.find(".txt_wrap p");

    var $wirelessImg01 = $wireless.find(".wireless_img01"),
        $wirelessImg02 = $wireless.find(".wireless_img02"),
        $wirelessImg03 = $wireless.find(".wireless_img03"),
        $wirelessImg04 = $wireless.find(".wireless_img04"),
        $wirelessImg05 = $wireless.find(".wireless_img05"),
        $wirelessImg06 = $wireless.find(".wireless_img06"),
        $wirelessImg07 = $wireless.find(".wireless_img07"),
        $wirelessImg08 = $wireless.find(".wireless_img08"),
        $wirelessImg09 = $wireless.find(".wireless_icon");

    var wirelessSceneImg01 = TweenMax.to($wirelessImg01, 2.5, {top:0, left:0}),
        wirelessSceneImg02 = TweenMax.to($wirelessImg02, 2.5, {top:0, left:0}),
        wirelessSceneImg03 = TweenMax.to($wirelessImg03, 2.5, {top:0, left:0}),
        wirelessSceneImg04 = TweenMax.to($wirelessImg04, 2.5, {top:0, left:0}),
        wirelessSceneImg05 = TweenMax.to($wirelessImg05, 2.5, {top:0, left:0}),
        wirelessSceneImg06 = TweenMax.to($wirelessImg06, 2.5, {top:0, left:0}),
        wirelessSceneImg07 = TweenMax.to($wirelessImg07, 2.5, {top:0, left:0}),
        wirelessSceneImg08 = TweenMax.to($wirelessImg08, 2.5, {top:0, left:0}),
        wirelessSceneImg09 = TweenMax.to($wirelessImg09, 2, {opacity:1, delay:1.5}, 3.2);

    var wirelessSceneTxt01 = TweenMax.to($wirelessTxt01, .8, {y:"-80%", opacity:0}),
        wirelessSceneTxt02 = TweenMax.to($wirelessTxt02, .8, {y:"-60%", opacity:1}, 3.8),
        wirelessSceneTxt02_end = TweenMax.to($wirelessTxt02, 1, {y:"-70%", opacity:0, delay:1}, 4.6);

    var wirelessTime = new TimelineMax();
    wirelessTime.add([
        wirelessSceneImg01, wirelessSceneImg02, wirelessSceneImg03, wirelessSceneImg04,
        wirelessSceneTxt01, wirelessSceneTxt02, wirelessSceneTxt02_end,
        wirelessSceneImg05, wirelessSceneImg06, wirelessSceneImg07, wirelessSceneImg08, wirelessSceneImg09
    ]);

    var wireless = new ScrollMagic.Scene({
        triggerElement: "#wireless",
        duration:3000,
        triggerHook:0
    })
        .setPin("#wireless")
        .setTween(wirelessTime)
        .addTo(simplyController);

    //simple select
    var $simple = $("#simple");
    var $simpleTxt01 = $simple.find(".txt_wrap h3"),
        $simpleTxt02 = $simple.find(".txt_wrap p");

    var $simpleImg01 = $simple.find(".simple_img01"),
        $simpleImg02 = $simple.find(".simple_img02"),
        $simpleImg03 = $simple.find(".message");

    var simpleSceneImg01 = TweenMax.to($simpleImg01, 1, {top:0, left:0}),
        simpleSceneImg02 = TweenMax.to($simpleImg02, .2, {opacity:1}),
        simpleSceneImg03 = TweenMax.to($simpleImg03, 1, {y:0, opacity:1, delay:.5});

    var simpleSceneTxt01 = TweenMax.to($simpleTxt01, 1, {y:"-70%", opacity:0}),
        simpleSceneTxt02 = TweenMax.to($simpleTxt02, 1, {y:"-50%", opacity:1, delay:1});

    var simpleTime = new TimelineMax();
    simpleTime.add([simpleSceneImg01])
        .add([simpleSceneTxt01, simpleSceneTxt02, simpleSceneImg03])
        .add([simpleSceneImg02]);


    var simpleSimply = new ScrollMagic.Scene({
        triggerElement: "#simple",
        duration:3500,
        triggerHook:0
    })
        .setPin("#simple")
        .setTween(simpleTime)
        .addTo(simplyController);

}
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
function main() {
    var $mainContainer = $("#container.main_container");
    if(!$mainContainer.length) return false;

    /* main scene 1*/
    var controller = new ScrollMagic.Controller({
        tweenChanges: true
    });

    var $meridianTitle = $("#meridianTitle"),
        $meridianTxt = $meridianTitle.find("h3"),
        $meridianLogo = $meridianTitle.find("img");

    var $scenePl = $("#scenePl");
    var $plImg = $scenePl.find(".pl_img"),
        $plImg01 = $plImg.find(".pl_img01"),
        $plImg02 = $plImg.find(".pl_img02"),
        $plImg03 = $plImg.find(".pl_img03");
    var $plWoofer = $plImg.find(".pl_woofer01, .pl_woofer02");
    var $plTxt = $scenePl.find(".pl_txt"),
        $plTxt01 = $plTxt.find(".pl_txt01"),
        $plTxt02 = $plTxt.find(".pl_txt02"),
        $plTxt03 = $plTxt.find(".pl_txt03");
    var $plBg = $scenePl.find(".pl_bg"),
        $plBg02 = $scenePl.find(".pl_bg02");
    var $plLink = $scenePl.find(".link_wrap");
    var _plSceneTimer1 = 1,
        _plSceneTimer2 = 1,
        _plSceneTimer3 = 1;

    //bg scene
    var plSceneBg = TweenMax.to($plBg, 2, {scale:1, opacity:1}),
        plSceneBg02 = TweenMax.to($plBg02, 2, {opacity:1, delay:1});

    //link scene
    var plLink = TweenMax.to($plLink, 1, {opacity:1, display:"block"});

    //image scene
    var plSceneImg01 = TweenMax.to($plImg01, _plSceneTimer1, {opacity:1, delay:.5}),
        plSceneImg02 = TweenMax.to($plImg02, _plSceneTimer2, {opacity:1}),
        plSceneImg03 = TweenMax.to($plImg03, _plSceneTimer3, {opacity:1}),
        plSceneImg04 = TweenMax.to($plImg03, 2, {scale:.7, y:"-47%"}),
        plSceneImg03_end = TweenMax.to($plImg.find(".pl_img01, .pl_img02"), .01, {display:"none"});

    //txt scene
    var plSceneTxt01 = TweenMax.to($plTxt01, _plSceneTimer1, {opacity:1, delay:.5}),
        plSceneTxt01_end = TweenMax.to($plTxt01, .3, {opacity:0, y:-40}),
        plSceneTxt02 = TweenMax.to($plTxt02, _plSceneTimer2, {opacity:1, delay:.5}),
        plSceneTxt02_end = TweenMax.to($plTxt02, .3, {opacity:0, y:-40}),
        plSceneTxt03 = TweenMax.to($plTxt03, _plSceneTimer3, {opacity:1, delay:.5}),
        plSceneTxt04 = TweenMax.to($plTxt03, 2, {fontSize:"4.8rem", top:"21%"});

    var plSceneTime = new TimelineMax();
    plSceneTime.to($meridianTxt, 1, {opacity:0})
                .to($meridianLogo, 1, {opacity:1})
                .to($meridianTitle, 1, {opacity:0, display:"none"})
                .add([plSceneImg01, plSceneTxt01])
                .add([plSceneImg02, plSceneTxt02, plSceneTxt01_end])
                .add([plSceneImg03, plSceneTxt03, plSceneTxt02_end])
                .add([plSceneImg04, plSceneTxt04, plSceneBg, plSceneImg03_end, plSceneBg02])
                .add(plLink);

    var scenePL = new ScrollMagic.Scene({
        triggerElement: "#scenePl",
        duration:7500,
        triggerHook:0
    })
    .on("progress", function (event) {
        if(event.progress > .8){
            $plWoofer.addClass("loop");
        } else {
            $plWoofer.removeClass("loop");
        }
    })
    .setPin("#scenePl")
    .setTween(plSceneTime)
    .addTo(controller)
}







































function meridian() {
    var $qualitySlide = $(".meri_content02 .slide_wrap");
    var $qualityImg = $qualitySlide.find(".slide_img ul"),
        $qualityImgLi = $qualityImg.find("li"),
        _qualityImgLength = $qualityImgLi.length;
    var $qualityindiBtn = $qualitySlide.find(".indi_btn");

    var $qualityPrevBtn = $qualitySlide.find(".prev_btn"),
        $qualityNextBtn = $qualitySlide.find(".next_btn");

    $qualityImgLi.each(function (i) {
        $(this).css({"left": i * 1280});
    });

    for(var i=0; i<_qualityImgLength; i++){
        $qualityindiBtn.append("<button type='button'><span>"+i+"</span></button>");
    }
    $qualityindiBtn.find("button").eq(0).addClass("active");

    if(_qualityImgLength <= 1){
        $qualitySlide.find(".nav_btn").hide();
    }

    var qualitySlideCrr = {};
    Object.defineProperty(qualitySlideCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            if(_index < 0 ) return false;
            if(_index > _qualityImgLength - 1 ) return false;
            $qualityPrevBtn.removeClass("off").addClass("on");
            $qualityNextBtn.removeClass("off").addClass("on");
            if(_index === 0) {
                $qualityPrevBtn.removeClass("on").addClass("off")
            }
            if(_index === _qualityImgLength - 1){
                $qualityNextBtn.removeClass("on").addClass("off")
            }
            TweenMax.to($qualityImgLi, .3, {opacity:.2});
            TweenMax.to($qualityImgLi.eq(_index), .3, {opacity:1});
            TweenMax.to($qualityImg, .3, {x: _index * -1280});

            $qualityindiBtn.find("button").removeClass("active");
            $qualityindiBtn.find("button").eq(_index).addClass("active");
            this.num = _index;
        }
    });
    $qualityPrevBtn.click(function () {
        qualitySlideCrr.number--;
    });
    $qualityNextBtn.click(function () {
        qualitySlideCrr.number++;
    });

    //goSoundRolling
    var $plRolling = $(".meri_content06 .slider_wrap");
    var $imgWrap = $plRolling.find(".img_wrap"),
        $imgLi = $imgWrap.find("li");
    var $txtWrap = $plRolling.find(".txt_wrap"),
        $txtLi = $txtWrap.find("li");
    var $indiBtn = $plRolling.find(".indi_btn");
    var $prevBtn = $plRolling.find(".prev_btn"),
        $nextBtn = $plRolling.find(".next_btn");
    var _imgLength = $imgLi.length;

    var plCrr = {};
    for(var i=0; i<_imgLength; i++){
        $indiBtn.append("<button type='button'><span></span></button>");
    }
    $indiBtn.find("button").eq(0).addClass("active");

    if(_imgLength <= 1){
        $plRolling.find(".nav_btn").hide();
    }
    Object.defineProperty(pl, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _imgLength;
            TweenMax.to($imgLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($imgLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            TweenMax.to($txtLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($txtLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            $indiBtn.find("button").removeClass("active");
            $indiBtn.find("button").eq(_index).addClass("active");
            this.num = _index;
        }
    });
    $nextBtn.click(function () {
        pl.number++;
    });
    $prevBtn.click(function () {
        pl.number--;
    });
    $indiBtn.find("button").click(function () {
        var _this = $(this);
        var _index = _this.index();

        pl.number = _index;
    });
}
function pl() {
    var $plContainer = $("#container.pl_container");
    if(!$plContainer.length) return false;

    /* pl series scene 1 */
    var controller = new ScrollMagic.Controller({
        tweenChanges: true
    });
    var $plSeries = $("#plSeries");
    var $plSeriesScene01 = $plSeries.find(".scene01"),
        $plSeriesScene02 = $plSeries.find(".scene02"),
        $plSeriesScene03 = $plSeries.find(".scene03");
    var $plImg03 = $plSeriesScene02.find(".pl_img03"),
        $plImg05 = $plSeriesScene03.find(".pl_img05");
    var $plTxt01 = $plSeriesScene02.find("h4"),
        $plTxt02 = $plSeriesScene02.find(".txt_wrap"),
        $plTxt03 = $plSeriesScene03.find("h4"),
        $plTxt04 = $plSeriesScene03.find("p");
    var $plBg = $plSeriesScene03.find(".boost_bg"),
        $plBg02 = $plBg.find("img").eq(1),
        $plBg03 = $plBg.find("img").eq(2),
        $plBg04 = $plBg.find("img").eq(3);

    var plSeriesScene01 = TweenMax.to($plSeriesScene01, 1, {y:"-100%"});
    var plSeriesScene02 = TweenMax.to($plSeriesScene02, 1, {y:"-100%"}),
        plSeriesSceneImg01 = TweenMax.to($plImg03, 2, {opacity:1}),
        plSeriesSceneTxt01 = TweenMax.to($plTxt01, 1, {y:0, opacity:1, display:"block", delay:1}),
        plSeriesSceneTxt01_end = TweenMax.to($plTxt01, 1, {y:-30, opacity:0, display:"none"}),
        plSeriesSceneTxt02 = TweenMax.to($plTxt02, 1, {y:0, opacity:1, display:"block"});
    var plSeriesScene03 = TweenMax.to($plSeriesScene03, 1, {y:"-200%"}),
        plSeriesScene02_end = TweenMax.to($plSeriesScene02, 1, {y:"-200%"}),
        plSeriesSceneImg02 = TweenMax.to($plImg05, 1, {opacity:1}),
        plSeriesSceneBg02 = TweenMax.to($plBg02, 1, {opacity:.5}),
        plSeriesSceneBg03 = TweenMax.to($plBg03, 1, {opacity:.5}),
        plSeriesSceneBg04 = TweenMax.to($plBg04, 1, {opacity:.5}),
        plSeriesSceneTxt03 = TweenMax.to($plTxt03, 1, {y:0, opacity:1, display:"block", delay:1}),
        plSeriesSceneTxt03_end = TweenMax.to($plTxt03, 1, {y:-30, opacity:0, display:"none"}),
        plSeriesSceneTxt04 = TweenMax.to($plTxt04, 1, {y:0, opacity:1, display:"block"});

    var plSeriesTime = new TimelineMax();
    plSeriesTime.add([plSeriesScene01, plSeriesScene02, plSeriesSceneImg01, plSeriesSceneTxt01])
        .add([plSeriesSceneTxt01_end, plSeriesSceneTxt02])
        .add([plSeriesScene03, plSeriesScene02_end])
        .add([plSeriesSceneImg02, plSeriesSceneBg02, plSeriesSceneTxt03])
        .add([plSeriesSceneBg03, plSeriesSceneTxt03_end, plSeriesSceneTxt04])
        .add(plSeriesSceneBg04);

    var scenePlSeries = new ScrollMagic.Scene({
        triggerElement: "#plSeries",
        duration:5500,
        triggerHook:0
    })
    .setPin("#plSeries")
    .setTween(plSeriesTime)
    .addTo(controller);

    /* pl series scene 2 */
    var $dualBass = $("#dualBass");
    var $videoDimmed01 = $dualBass.find(".video_dimmed01"),
        $videoDimmed02 = $dualBass.find(".video_dimmed02")
    var $dualWhiteVideo = $dualBass.find(".video_white"),
        $dualTxt = $dualBass.find(".txt_wrap"),
        $dualTxt01 = $dualTxt.find(".txt01 h3"),
        $dualTxt02 = $dualTxt.find(".txt01 p"),
        $dualTxt03 = $dualTxt.find(".txt02 h3"),
        $dualTxt04 = $dualTxt.find(".txt02 p");

    var dualSceneDimmed01 = TweenMax.to($videoDimmed01, .5, {opacity:0}),
        dualSceneDimmed02 = TweenMax.to($videoDimmed02, .5, {opacity:1});

    var dualSceneVideo = TweenMax.to($dualWhiteVideo, .5, {opacity:1});
    var dualSceneTxt01 = TweenMax.to($dualTxt01, 1, {opacity:0, y:-20}),
        dualSceneTxt02 = TweenMax.to($dualTxt02, .5, {opacity:0, y:-20, delay:.5}),
        dualSceneTxt03 = TweenMax.to($dualTxt03, 1, {opacity:1, y:0}),
        dualSceneTxt04 = TweenMax.to($dualTxt04, .5, {opacity:1, y:0, delay:.5});

    var dualBassTime = new TimelineMax();
    dualBassTime.add(dualSceneDimmed01)
                .add([dualSceneTxt01, dualSceneTxt02])
                .add([dualSceneVideo, dualSceneTxt03, dualSceneTxt04, dualSceneDimmed02]);

    var sceneDualBass = new ScrollMagic.Scene({
        triggerElement: "#dualBass",
        duration:2000,
        triggerHook:0
    })
    .on("progress", function (event) {
        if(event.progress > .8){
            $header.addClass("white_header");
        } else {
            $header.removeClass("white_header");
        }
    })
    .setPin("#dualBass")
    .setTween(dualBassTime)
    .addTo(controller);

    /* pl series scene 2 */
    var simplyController = new ScrollMagic.Controller({
        tweenChanges: true
    });

    var $simply = $("#simply");
    var $simplyTxt01 = $simply.find("h3"),
        $simplyTxt02 = $simply.find("p");
    var $simplyImgWrap = $simply.find(".img_wrap"),
        $simplyImg01 = $simply.find(".simply_img01"),
        $simplyImg02 = $simply.find(".simply_img02"),
        $simplyImg03 = $simply.find(".simply_img03");

    var simplySceneImgWrap = TweenMax.to($simplyImgWrap, 4, {y:"-515rem"});
    var simplySceneImg01 = TweenMax.to($simplyImg01, 1, {opacity:.2}),
        simplySceneImg02 = TweenMax.to($simplyImg02, 1, {opacity:1}),
        simplySceneImg02_end = TweenMax.to($simplyImg02, 1, {opacity:.2, delay:1}),
        simplySceneImg03 = TweenMax.to($simplyImg03, 1, {opacity:1, delay:1});

    var simplySceneTxt01 = TweenMax.to($simplyTxt01, 1, {y:"-65%", opacity:0}),
        simplySceneTxt02 = TweenMax.to($simplyTxt02, 1, {y:"-50%", opacity:1, delay:.5});

    var simplyTime = new TimelineMax();
    simplyTime.add([simplySceneImg01, simplySceneImgWrap, simplySceneImg02, simplySceneImg02_end, simplySceneImg03, simplySceneTxt01, simplySceneTxt02]);

    var sceneSimply = new ScrollMagic.Scene({
        triggerElement: "#simply",
        duration:2500,
        triggerHook:0
    })
    .setPin("#simply")
    .setTween(simplyTime)
    .addTo(simplyController);

    //surround
    var $surround = $("#surround");
    var $surroundTxt01 = $surround.find(".txt_wrap h3"),
        $surroundTxt02 = $surround.find(".txt_wrap p"),
        $surroundTxt03 = $surround.find(".disc");

    var $surroundImg01 = $surround.find(".surround_img01"),
        $surroundImg02 = $surround.find(".surround_img02"),
        $surroundImg03 = $surround.find(".surround_img03");

    var surroundSceneTxt01 = TweenMax.to($surroundTxt01, 1, {y:-20, opacity:0}),
        surroundSceneTxt02 = TweenMax.to($surroundTxt02, 2, {y:0, opacity:1, delay:.5}),
        surroundSceneTxt03 = TweenMax.to($surroundTxt03, 2, {opacity:1, delay:.5});

    var surroundSceneImg01 = TweenMax.to($surroundImg01, 2, {x:"-50%"}),
        surroundSceneImg02 = TweenMax.to($surroundImg02, 2, {x:"-50%"}),
        surroundSceneImg03 = TweenMax.to($surroundImg03, 1, {opacity:1, delay:2});

    var surroundTime = new TimelineMax();
    surroundTime.add([surroundSceneImg01, surroundSceneImg02, surroundSceneImg03, surroundSceneTxt01, surroundSceneTxt02, surroundSceneTxt03]);

    var sceneSurround = new ScrollMagic.Scene({
        triggerElement: "#surround",
        duration:2500,
        triggerHook:0
    })
    .setPin("#surround")
    .setTween(surroundTime)
    .addTo(simplyController);

    //battery
    var $battery = $("#battery");
    var $batteryTxt01 = $battery.find(".txt_wrap h3"),
        $batteryTxt02 = $battery.find(".txt_wrap p"),
        $batteryTxt03 = $battery.find(".disc");

    var $batteryImg01 = $battery.find(".battery_img01"),
        $batteryImg03 = $battery.find(".battery_img03");

    var batterySceneTxt01 = TweenMax.to($batteryTxt01, 1, {y:0, opacity:1}),
        batterySceneTxt01_end = TweenMax.to($batteryTxt01, 1, {y:-20, opacity:0}),
        batterySceneTxt02 = TweenMax.to($batteryTxt02, 2, {y:0, opacity:1, delay:.5}),
        batterySceneTxt03 = TweenMax.to($batteryTxt03, 1, {opacity:1, delay:1.5});

    var batterySceneImg01 = TweenMax.to($batteryImg01, 2, {rotation:-20}),
        batterySceneImg02 = TweenMax.to($batteryImg03, 2, {y:"-50%"});

    var batteryTime = new TimelineMax();
    batteryTime.add([batterySceneTxt01, batterySceneImg01])
                .add([batterySceneTxt01_end, batterySceneTxt02, batterySceneImg02, batterySceneTxt03]);

    var batterySimply = new ScrollMagic.Scene({
        triggerElement: "#battery",
        duration:2000,
        triggerHook:0
    })
    .setPin("#battery")
    .setTween(batteryTime)
    .addTo(simplyController);
    
    //choice
    var $choice = $("#choice");
    var $choiceTxt01 = $choice.find(".txt_wrap h3");

    var $choiceImg01 = $choice.find(".choice_img02"),
        $choiceImg02 = $choice.find(".choice_img03"),
        $choiceImg03 = $choice.find(".choice_img04, .choice_img05"),
        $choiceImg04 = $choice.find(".choice_img06, .choice_img07, .choice_img08");

    var choiceSceneImg01 = TweenMax.to($choiceImg01, 1, {opacity:0}),
        choiceSceneImg02 = TweenMax.to($choiceImg02, 1, {opacity:1}),
        choiceSceneImg03 = TweenMax.staggerTo($choiceImg03, 1, {left:"0%", top:"0%"}, .2),
        choiceSceneImg04 = TweenMax.staggerTo($choiceImg04, 1, {left:"0%", bottom:"0%"}, .2);

    var choiceSceneTxt01 = TweenMax.to($choiceTxt01, 1, {y:"-50%", opacity:1});

    var choiceTime = new TimelineMax();
    choiceTime.add([choiceSceneImg01, choiceSceneImg02])
                .add([choiceSceneImg03, choiceSceneImg04])
                .add(choiceSceneTxt01);

    var choiceSimply = new ScrollMagic.Scene({
        triggerElement: "#choice",
        duration:2000,
        triggerHook:0
    })
    .setPin("#choice")
    .setTween(choiceTime)
    .addTo(simplyController);

    //goSoundRolling
    var $goSoundRolling = $("#goSound .slider_wrap");
    var $imgWrap = $goSoundRolling.find(".img_wrap"),
        $imgLi = $imgWrap.find("li");
    var $txtWrap = $goSoundRolling.find(".txt_wrap"),
        $txtLi = $txtWrap.find("li");
    var $indiBtn = $goSoundRolling.find(".indi_btn");
    var $prevBtn = $goSoundRolling.find(".prev_btn"),
        $nextBtn = $goSoundRolling.find(".next_btn");
    var _imgLength = $imgLi.length;

    var goSoundCrr = {};
    for(var i=0; i<_imgLength; i++){
        $indiBtn.append("<button type='button'><span></span></button>");
    }
    $indiBtn.find("button").eq(0).addClass("active");

    if(_imgLength <= 1){
        $goSoundRolling.find(".nav_btn").hide();
    }
    Object.defineProperty(goSoundCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _imgLength;
            TweenMax.to($imgLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($imgLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            TweenMax.to($txtLi, .7, {opacity: 0, display: "none", ease: esStep});
            TweenMax.to($txtLi.eq(_index), .5, {opacity: 1, display: "block", ease: esStep});

            $indiBtn.find("button").removeClass("active");
            $indiBtn.find("button").eq(_index).addClass("active");
            this.num = _index;
        }
    });
    $nextBtn.click(function () {
        goSoundCrr.number++;
    });
    $prevBtn.click(function () {
        goSoundCrr.number--;
    });
    $indiBtn.find("button").click(function () {
        var _this = $(this);
        var _index = _this.index();

        goSoundCrr.number = _index;
    });

    //choose select
    var $choose = $("#choose");
    var $colorBtn = $choose.find(".color_btn button");
    var $shopLink = $(".shop_link td");

    $colorBtn.click(function(){
        var _this = $(this);
        var _index = _this.index();
        var $colorImg = _this.parent().parent().siblings().find("img");
        var _shopIndex = _this.parent().parent().parent().index();

        TweenMax.to($colorImg, .1, {opacity:0});
        TweenMax.to($colorImg.eq(_index), .1, {opacity:1});

        _this.siblings().removeClass("active");
        _this.addClass("active");

        $shopLink.eq(_shopIndex).find("a").css({display:"none"});
        $shopLink.eq(_shopIndex).find("a").eq(_index).css({display:"inline-block"});
    });


    //water select
    var $water = $("#water");
    var $waterTxt01 = $water.find(".txt_wrap h3"),
        $waterTxt02 = $water.find(".txt_wrap p"),
        $waterTxt03 = $water.find(".txt_wrap span");

    var waterSceneTxt01 = TweenMax.to($waterTxt01, 1, {y:"-20%", opacity:0, delay:1}),
        // waterSceneTxt01_end = TweenMax.to($waterTxt01, 1, {y:"-20%", opacity:0}),
        waterSceneTxt02 = TweenMax.to($waterTxt02, 1, {y:"0%", opacity:1, delay:.5}),
        waterSceneTxt03 = TweenMax.to($waterTxt03, 1, {y:"0%", opacity:1, delay:.5});


    var waterTime = new TimelineMax();
    waterTime.add([waterSceneTxt01])
            .add([waterSceneTxt02 , waterSceneTxt03]);


    var waterSimply = new ScrollMagic.Scene({
        triggerElement: "#water",
        duration:2000,
        triggerHook:0
    })
    .setPin("#water")
    .setTween(waterTime)
    .addTo(simplyController);

    //wireless select
    var $wireless = $("#wireless");
    var $wirelessTxt01 = $wireless.find(".txt_wrap h3"),
        $wirelessTxt02 = $wireless.find(".txt_wrap p");

    var $wirelessImg01 = $wireless.find(".wireless_img01"),
        $wirelessImg02 = $wireless.find(".wireless_img02"),
        $wirelessImg03 = $wireless.find(".wireless_img03"),
        $wirelessImg04 = $wireless.find(".wireless_img04"),
        $wirelessImg05 = $wireless.find(".wireless_img05"),
        $wirelessImg06 = $wireless.find(".wireless_img06"),
        $wirelessImg07 = $wireless.find(".wireless_img07"),
        $wirelessImg08 = $wireless.find(".wireless_img08"),
        $wirelessImg09 = $wireless.find(".wireless_icon");

    var wirelessSceneImg01 = TweenMax.to($wirelessImg01, 2.5, {top:0, left:0}),
        wirelessSceneImg02 = TweenMax.to($wirelessImg02, 2.5, {top:0, left:0}),
        wirelessSceneImg03 = TweenMax.to($wirelessImg03, 2.5, {top:0, left:0}),
        wirelessSceneImg04 = TweenMax.to($wirelessImg04, 2.5, {top:0, left:0}),
        wirelessSceneImg05 = TweenMax.to($wirelessImg05, 2.5, {top:0, left:0}),
        wirelessSceneImg06 = TweenMax.to($wirelessImg06, 2.5, {top:0, left:0}),
        wirelessSceneImg07 = TweenMax.to($wirelessImg07, 2.5, {top:0, left:0}),
        wirelessSceneImg08 = TweenMax.to($wirelessImg08, 2.5, {top:0, left:0}),
        wirelessSceneImg09 = TweenMax.to($wirelessImg09, 2, {opacity:1, delay:1.5}, 3.2);

    var wirelessSceneTxt01 = TweenMax.to($wirelessTxt01, .8, {y:"-80%", opacity:0}),
        wirelessSceneTxt02 = TweenMax.to($wirelessTxt02, .8, {y:"-60%", opacity:1}, 3.8),
        wirelessSceneTxt02_end = TweenMax.to($wirelessTxt02, 1, {y:"-70%", opacity:0, delay:1}, 4.6);

    var wirelessTime = new TimelineMax();
    wirelessTime.add([
        wirelessSceneImg01, wirelessSceneImg02, wirelessSceneImg03, wirelessSceneImg04,
        wirelessSceneTxt01, wirelessSceneTxt02, wirelessSceneTxt02_end,
        wirelessSceneImg05, wirelessSceneImg06, wirelessSceneImg07, wirelessSceneImg08, wirelessSceneImg09
    ]);

    var wireless = new ScrollMagic.Scene({
        triggerElement: "#wireless",
        duration:3000,
        triggerHook:0
    })
    .setPin("#wireless")
    .setTween(wirelessTime)
    .addTo(simplyController);

    //simple select
    var $simple = $("#simple");
    var $simpleTxt01 = $simple.find(".txt_wrap h3"),
        $simpleTxt02 = $simple.find(".txt_wrap p");

    var $simpleImg01 = $simple.find(".simple_img01"),
        $simpleImg02 = $simple.find(".simple_img02"),
        $simpleImg03 = $simple.find(".message");

    var simpleSceneImg01 = TweenMax.to($simpleImg01, 1, {top:0, left:0}),
        simpleSceneImg02 = TweenMax.to($simpleImg02, .2, {opacity:1}),
        simpleSceneImg03 = TweenMax.to($simpleImg03, 1, {y:0, opacity:1, delay:.5});

    var simpleSceneTxt01 = TweenMax.to($simpleTxt01, 1, {y:"-70%", opacity:0}),
        simpleSceneTxt02 = TweenMax.to($simpleTxt02, 1, {y:"-50%", opacity:1, delay:1});

    var simpleTime = new TimelineMax();
    simpleTime.add([simpleSceneImg01])
                .add([simpleSceneTxt01, simpleSceneTxt02, simpleSceneImg03])
                .add([simpleSceneImg02]);


    var simpleSimply = new ScrollMagic.Scene({
        triggerElement: "#simple",
        duration:3500,
        triggerHook:0
    })
    .setPin("#simple")
    .setTween(simpleTime)
    .addTo(simplyController);
}
function pn() {


}







































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