"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefabs_1 = require("@diez/prefabs");
const Palette_1 = require("./Palette");
const Shadows_1 = require("./Shadows");
const Localization_1 = require("./Localization");
const Margin_1 = require("./components/Margin");
/**
 * All of rich language features of TypeScript are at your disposal; for example,
 * you can define an object to keep track of your fonts.
 */
const Fonts = {
    SourceSansPro: {
        Regular: prefabs_1.Font.fromFile('assets/SourceSansPro-Regular.ttf'),
    },
};
/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
const typography = {
    heading1: new prefabs_1.Typograph({
        font: Fonts.SourceSansPro.Regular,
        fontSize: 24,
        color: Palette_1.colors.paletteMapped.text,
    }),
    body: new prefabs_1.Typograph({
        font: Fonts.SourceSansPro.Regular,
        fontSize: 18,
        color: Palette_1.colors.paletteMapped.text,
        alignment: "center" /* Center */,
    }),
    caption: new prefabs_1.Typograph({
        font: Fonts.SourceSansPro.Regular,
        fontSize: 14,
        color: Palette_1.colors.paletteMapped.text,
    }),
};
/**
 * In addition to colors and typography, you can also collect other types of
 * design language primitives in components as well — such as images, icons &
 * animations.
 */
const images = {
    logo: prefabs_1.Image.responsive('assets/logo.png', 52, 48),
    masthead: prefabs_1.Image.responsive('assets/masthead.png', 208, 88),
};
/**
 * You can even collect your own custom components.
 */
const layoutValues = {
    spacingSmall: 5,
    spacingMedium: 25,
    spacingLarge: 40,
    contentMargin: new Margin_1.Margin({
        top: 40,
        left: 10,
        right: 10,
        bottom: 10,
    }),
};
exports.designLanguage = {
    colors: Palette_1.colors,
    images,
    loadingAnimation: prefabs_1.Lottie.fromJson('assets/loadingAnimation.json', false),
    localization: Localization_1.copywriting,
    layoutValues,
    shadows: Shadows_1.shadows,
    typography,
};
