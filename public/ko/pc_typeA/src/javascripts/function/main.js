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






































