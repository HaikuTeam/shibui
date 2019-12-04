import {DropShadow, Image, Lottie, Toward, Typograph, Font, LinearGradient, Point2D, TextAlignment} from '@diez/prefabs';
import {colors} from './Palette';
import {shadows} from './Shadows';
import {copywriting} from './Localization';
// import {Margin} from './components/Margin';

/**
 * All of rich language features of TypeScript are at your disposal; for example,
 * you can define an object to keep track of your fonts.
 */
const Fonts = {
  SourceSansPro: {
    Regular: Font.fromFile('assets/SourceSansPro-Regular.ttf'),
  },
}

/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
const typography = {
  heading1: new Typograph({
    font: Fonts.SourceSansPro.Regular,
    fontSize: 24,
    color: colors.paletteMapped.text,
  }),

  body: new Typograph({
    font: Fonts.SourceSansPro.Regular,
    fontSize: 18,
    color: colors.paletteMapped.text,
    alignment: TextAlignment.Center,
  }),

  caption: new Typograph({
    font: Fonts.SourceSansPro.Regular,
    fontSize: 14,
    color: colors.paletteMapped.text,
  }),
}

/**
 * In addition to colors and typography, you can also collect other types of
 * design language primitives in components as well — such as images, icons &
 * animations.
 */
const images = {
  logo: Image.responsive('assets/logo.png', 52, 48),
  masthead: Image.responsive('assets/masthead.png', 208, 88),
}




export const designLanguage = { 
  colors,
  images,
  loadingAnimation: Lottie.fromJson('assets/loadingAnimation.json', false),
  localization: copywriting,
  layout,
  shadows,
  typography,
}
