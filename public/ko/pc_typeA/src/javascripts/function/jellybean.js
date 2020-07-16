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