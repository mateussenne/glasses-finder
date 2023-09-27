"use strict";
exports.__esModule = true;
exports.GlassesCarousel = void 0;
var carousel_1 = require("@mantine/carousel");
var GlassesCard_1 = require("../GlassesCard");
var hooks_1 = require("@mantine/hooks");
exports.GlassesCarousel = function (_a) {
    var glasses = _a.glasses;
    var isMobile = hooks_1.useMediaQuery("(max-width: 767px)");
    return (React.createElement(carousel_1.Carousel, { slideSize: isMobile ? "100%" : "50%", w: isMobile && 500, height: 480, slideGap: isMobile ? "xs" : "md", loop: true, align: isMobile ? "start" : "center" }, glasses.map(function (g) {
        return (React.createElement(carousel_1.Carousel.Slide, { key: g.id },
            React.createElement(GlassesCard_1.GlassesCard, { glasses: g })));
    })));
};
