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
