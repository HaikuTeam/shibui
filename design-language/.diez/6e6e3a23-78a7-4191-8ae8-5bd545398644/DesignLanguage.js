"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefabs_1 = require("@diez/prefabs");
const Palette_1 = require("./Palette");
const Layout_1 = require("./Layout");
const Shadows_1 = require("./Shadows");
const Typography_1 = require("./Typography");
const Localization_1 = require("./Localization");
// import {Margin} from './components/Margin';
const images = {
    logo: prefabs_1.Image.responsive('assets/logo.png', 52, 48),
    masthead: prefabs_1.Image.responsive('assets/masthead.png', 208, 88),
};
exports.designLanguage = {
    colors: Palette_1.colors,
    images,
    loadingAnimation: prefabs_1.Lottie.fromJson('assets/loadingAnimation.json', false),
    localization: Localization_1.copywriting,
    layout: Layout_1.layout,
    shadows: Shadows_1.shadows,
    typography: Typography_1.typography,
};
