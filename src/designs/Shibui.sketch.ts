/**
* Copyright 2019 Haiku Systems Inc.
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
* http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { Color, File, Font, GradientStop, Image, LinearGradient, Point2D, Typograph } from "@diez/prefabs";

const shibuiColors = {
    fuss: Color.rgba(233, 52, 242, 1),
    tiger: Color.rgba(241, 93, 74, 1),
    marigold: Color.rgba(255, 172, 57, 1),
    clover: Color.rgba(163, 206, 50, 1),
    cyan: Color.rgba(4, 182, 203, 1),
    amethyst: Color.rgba(137, 52, 255, 1),
    seattle: Color.rgba(200, 203, 207, 1),
    ivory: Color.rgba(250, 251, 252, 1),
    graphite: Color.rgba(34, 43, 57, 1),
    midnight: Color.rgba(7, 14, 24, 1)
};

const shibuiGradients = {
    untitledColor: new LinearGradient({ stops: [GradientStop.make(0, Color.rgba(255, 255, 255, 0.5)), GradientStop.make(1, Color.rgba(0, 0, 0, 0.5))], start: Point2D.make(0.5, 0), end: Point2D.make(0.5, 1) })
};

export const shibuiFonts = {
    PoppinsExtraBold: {
        Regular: Font.fromFile("assets/Shibui.sketch.contents/fonts/Poppins-ExtraBold.ttf")
    },
    PoppinsMedium: {
        Regular: Font.fromFile("assets/Shibui.sketch.contents/fonts/Poppins-Medium.ttf")
    },
    Poppins: {
        Regular: Font.fromFile("assets/Shibui.sketch.contents/fonts/Poppins-Regular.ttf")
    }
};

const shibuiTypography = {
    heading1: new Typograph({ color: Color.rgba(7, 14, 24, 1), font: shibuiFonts.PoppinsExtraBold.Regular, fontSize: 66 }),
    heading2: new Typograph({ color: Color.rgba(7, 14, 24, 1), font: shibuiFonts.PoppinsExtraBold.Regular, fontSize: 41 }),
    heading3: new Typograph({ color: Color.rgba(7, 14, 24, 1), font: shibuiFonts.PoppinsMedium.Regular, fontSize: 36 }),
    body: new Typograph({ color: Color.rgba(7, 14, 24, 1), font: shibuiFonts.Poppins.Regular, fontSize: 18 })
};

export const shibuiSlicesFiles = {
    diezLogoAlt: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo-alt.png" }),
    diezLogoAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo-alt@2x.png" }),
    diezLogoAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo-alt@3x.png" }),
    diezLogoAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo-alt@4x.png" }),
    diezLogo: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo.png" }),
    diezLogo2x: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo@2x.png" }),
    diezLogo3x: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo@3x.png" }),
    diezLogo4x: new File({ src: "assets/Shibui.sketch.contents/slices/diez-logo@4x.png" }),
    animatorLogo: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo.png" }),
    animatorLogo2x: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo@2x.png" }),
    animatorLogo3x: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo@3x.png" }),
    animatorLogo4x: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo@4x.png" }),
    animatorLogoAlt: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo-alt.png" }),
    animatorLogoAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo-alt@2x.png" }),
    animatorLogoAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo-alt@3x.png" }),
    animatorLogoAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/animator-logo-alt@4x.png" }),
    brandbookLogo: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo.png" }),
    brandbookLogo2x: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo@2x.png" }),
    brandbookLogo3x: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo@3x.png" }),
    brandbookLogo4x: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo@4x.png" }),
    brandbookLogoAlt: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo-alt.png" }),
    brandbookLogoAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo-alt@2x.png" }),
    brandbookLogoAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo-alt@3x.png" }),
    brandbookLogoAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/brandbook-logo-alt@4x.png" }),
    haikuLogoAlt: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo-alt.png" }),
    haikuLogoAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo-alt@2x.png" }),
    haikuLogoAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo-alt@3x.png" }),
    haikuLogoAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo-alt@4x.png" }),
    haikuSymbolAlt: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol-alt.png" }),
    haikuSymbolAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol-alt@2x.png" }),
    haikuSymbolAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol-alt@3x.png" }),
    haikuSymbolAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol-alt@4x.png" }),
    haikuLogo: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo.png" }),
    haikuLogo2x: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo@2x.png" }),
    haikuLogo3x: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo@3x.png" }),
    haikuLogo4x: new File({ src: "assets/Shibui.sketch.contents/slices/haiku-logo@4x.png" }),
    haikuSymbol: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol.png" }),
    haikuSymbol2x: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol@2x.png" }),
    haikuSymbol3x: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol@3x.png" }),
    haikuSymbol4x: new File({ src: "assets/Shibui.sketch.contents/slices/Haiku-symbol@4x.png" }),
    iconDismiss: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss.png" }),
    iconDismiss2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss@2x.png" }),
    iconDismiss3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss@3x.png" }),
    iconDismiss4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss@4x.png" }),
    iconDismissAlt: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss-alt.png" }),
    iconDismissAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss-alt@2x.png" }),
    iconDismissAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss-alt@3x.png" }),
    iconDismissAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-dismiss-alt@4x.png" }),
    iconCheckmark: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark.png" }),
    iconCheckmark2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark@2x.png" }),
    iconCheckmark3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark@3x.png" }),
    iconCheckmark4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark@4x.png" }),
    iconCheckmarkAlt: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark-alt.png" }),
    iconCheckmarkAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark-alt@2x.png" }),
    iconCheckmarkAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark-alt@3x.png" }),
    iconCheckmarkAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-checkmark-alt@4x.png" }),
    iconHeart: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart.png" }),
    iconHeart2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart@2x.png" }),
    iconHeart3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart@3x.png" }),
    iconHeart4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart@4x.png" }),
    iconHeartAlt: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart-alt.png" }),
    iconHeartAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart-alt@2x.png" }),
    iconHeartAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart-alt@3x.png" }),
    iconHeartAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-heart-alt@4x.png" }),
    iconFork: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork.png" }),
    iconFork2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork@2x.png" }),
    iconFork3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork@3x.png" }),
    iconFork4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork@4x.png" }),
    iconForkAlt: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork-alt.png" }),
    iconForkAlt2x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork-alt@2x.png" }),
    iconForkAlt3x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork-alt@3x.png" }),
    iconForkAlt4x: new File({ src: "assets/Shibui.sketch.contents/slices/icon-fork-alt@4x.png" })
};

export const shibuiSlices = {
    diezLogoAlt: Image.responsive("assets/Shibui.sketch.contents/slices/diez-logo-alt.png", 756, 230),
    diezLogo: Image.responsive("assets/Shibui.sketch.contents/slices/diez-logo.png", 756, 230),
    animatorLogo: Image.responsive("assets/Shibui.sketch.contents/slices/animator-logo.png", 550, 114),
    animatorLogoAlt: Image.responsive("assets/Shibui.sketch.contents/slices/animator-logo-alt.png", 550, 114),
    brandbookLogo: Image.responsive("assets/Shibui.sketch.contents/slices/brandbook-logo.png", 643, 121),
    brandbookLogoAlt: Image.responsive("assets/Shibui.sketch.contents/slices/brandbook-logo-alt.png", 643, 121),
    haikuLogoAlt: Image.responsive("assets/Shibui.sketch.contents/slices/haiku-logo-alt.png", 128, 45),
    haikuSymbolAlt: Image.responsive("assets/Shibui.sketch.contents/slices/Haiku-symbol-alt.png", 39.49298465902157, 44.00898614090481),
    haikuLogo: Image.responsive("assets/Shibui.sketch.contents/slices/haiku-logo.png", 128, 45),
    haikuSymbol: Image.responsive("assets/Shibui.sketch.contents/slices/Haiku-symbol.png", 39.49298465902157, 44.00898614090481),
    iconDismiss: Image.responsive("assets/Shibui.sketch.contents/slices/icon-dismiss.png", 15, 15),
    iconDismissAlt: Image.responsive("assets/Shibui.sketch.contents/slices/icon-dismiss-alt.png", 15, 15),
    iconCheckmark: Image.responsive("assets/Shibui.sketch.contents/slices/icon-checkmark.png", 14, 12),
    iconCheckmarkAlt: Image.responsive("assets/Shibui.sketch.contents/slices/icon-checkmark-alt.png", 14, 12),
    iconHeart: Image.responsive("assets/Shibui.sketch.contents/slices/icon-heart.png", 17, 16),
    iconHeartAlt: Image.responsive("assets/Shibui.sketch.contents/slices/icon-heart-alt.png", 17, 16),
    iconFork: Image.responsive("assets/Shibui.sketch.contents/slices/icon-fork.png", 11, 14),
    iconForkAlt: Image.responsive("assets/Shibui.sketch.contents/slices/icon-fork-alt.png", 11, 14)
};

export const shibuiTokens = {
    colors: shibuiColors,
    gradients: shibuiGradients,
    typography: shibuiTypography
};
