"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefabs_1 = require("@diez/prefabs");
const Palette_1 = require("./Palette");
const Fonts = {
    SourceSansPro: {
        Regular: prefabs_1.Font.fromFile('assets/SourceSansPro-Regular.ttf'),
    },
};
/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
exports.typography = {
    heading1: new prefabs_1.Typograph({
        font: Fonts.SourceSansPro.Regular,
        fontSize: 24,
        color: Palette_1.palette.colorsMapped.text,
    }),
    body: new prefabs_1.Typograph({
        font: Fonts.SourceSansPro.Regular,
        fontSize: 18,
        color: Palette_1.palette.colorsMapped.text,
        alignment: "center" /* Center */,
    }),
    caption: new prefabs_1.Typograph({
        font: Fonts.SourceSansPro.Regular,
        fontSize: 14,
        color: Palette_1.palette.colorsMapped.text,
    }),
};
