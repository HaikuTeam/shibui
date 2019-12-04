"use strict";
// TODO: hook up to spacing values
Object.defineProperty(exports, "__esModule", { value: true });
const prefabs_1 = require("@diez/prefabs");
const Palette_1 = require("./Palette");
// import { spacing } from './Layout';
exports.shadows = {
    button: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 1),
        radius: 8,
        color: Palette_1.colors.palette.seattle50.fade(0.35),
    }),
    card: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 0),
        radius: 15,
        color: Palette_1.colors.palette.seattle50.fade(0.5),
    }),
    cardOnDark: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 0),
        radius: 15,
        color: Palette_1.colors.palette.midnight.fade(0.5),
    }),
    cardHovered: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 0),
        radius: 40,
        color: Palette_1.colors.palette.seattle50.fade(0.42),
    }),
    cardHoveredOnDark: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 0),
        radius: 40,
        color: Palette_1.colors.palette.midnight.fade(0.42),
    }),
    modal: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 0),
        radius: 40,
        color: Palette_1.colors.palette.seattle50.fade(0.42),
    }),
    modalOnDark: new prefabs_1.DropShadow({
        offset: prefabs_1.Point2D.make(0, 0),
        radius: 40,
        color: Palette_1.colors.palette.graphite.fade(0.22),
    })
};
