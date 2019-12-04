"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefabs_1 = require("@diez/prefabs");
const Palette_1 = require("./Palette");
const Icons_1 = require("./Icons");
const Images_1 = require("./Images");
const Layout_1 = require("./Layout");
const Shadows_1 = require("./Shadows");
const Typography_1 = require("./Typography");
const Localization_1 = require("./Localization");
// import {Margin} from './components/Margin';
exports.designLanguage = {
    palette: Palette_1.palette,
    icons: Icons_1.icons,
    images: Images_1.images,
    loadingAnimation: prefabs_1.Lottie.fromJson('assets/loadingAnimation.json', false),
    localization: Localization_1.copywriting,
    layout: Layout_1.layout,
    shadows: Shadows_1.shadows,
    typography: Typography_1.typography,
};
