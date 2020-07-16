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