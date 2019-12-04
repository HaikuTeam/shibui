import { Color, Toward, LinearGradient, Point2D } from '@diez/prefabs';
import { shibuiTokens } from './designs/Shibui.sketch';
/**
 * Our design language's base colors. While these are all exported, please prefer the semantic mappings. e.g. `PrimaryButtonColor`
 */
const base = {
  fuss: shibuiTokens.colors.fuss,
  tiger: shibuiTokens.colors.tiger,
  marigold: shibuiTokens.colors.marigold,
  clover: shibuiTokens.colors.clover,
  cyan: shibuiTokens.colors.cyan,
  amethyst: shibuiTokens.colors.amethyst,
  seattle: shibuiTokens.colors.seattle,
}

const colorScale = .07

const colors = {
  fuss10: base.fuss.lighten(colorScale * 4),
  fuss20: base.fuss.lighten(colorScale * 3),
  fuss30: base.fuss.lighten(colorScale * 2),
  fuss40: base.fuss.lighten(colorScale),
  fuss50: base.fuss,
  fuss60: base.fuss.darken(colorScale),
  fuss70: base.fuss.darken(colorScale * 2),
  fuss80: base.fuss.darken(colorScale * 3),
  fuss90: base.fuss.darken(colorScale * 4),
  tiger10: base.tiger.lighten(colorScale * 4),
  tiger20: base.tiger.lighten(colorScale * 3),
  tiger30: base.tiger.lighten(colorScale * 2),
  tiger40: base.tiger.lighten(colorScale),
  tiger50: base.tiger,
  tiger60: base.tiger.darken(colorScale),
  tiger70: base.tiger.darken(colorScale * 2),
  tiger80: base.tiger.darken(colorScale * 3),
  tiger90: base.tiger.darken(colorScale * 4),
  marigold10: base.marigold.lighten(colorScale * 4),
  marigold20: base.marigold.lighten(colorScale * 3),
  marigold30: base.marigold.lighten(colorScale * 2),
  marigold40: base.marigold.lighten(colorScale),
  marigold50: base.marigold,
  marigold60: base.marigold.darken(colorScale),
  marigold70: base.marigold.darken(colorScale * 2),
  marigold80: base.marigold.darken(colorScale * 3),
  marigold90: base.marigold.darken(colorScale * 4),
  clover10: base.clover.lighten(colorScale * 4),
  clover20: base.clover.lighten(colorScale * 3),
  clover30: base.clover.lighten(colorScale * 2),
  clover40: base.clover.lighten(colorScale),
  clover50: base.clover,
  clover60: base.clover.darken(colorScale),
  clover70: base.clover.darken(colorScale * 2),
  clover80: base.clover.darken(colorScale * 3),
  clover90: base.clover.darken(colorScale * 4),
  cyan10: base.cyan.lighten(colorScale * 4),
  cyan20: base.cyan.lighten(colorScale * 3),
  cyan30: base.cyan.lighten(colorScale * 2),
  cyan40: base.cyan.lighten(colorScale),
  cyan50: base.cyan,
  cyan60: base.cyan.darken(colorScale),
  cyan70: base.cyan.darken(colorScale * 2),
  cyan80: base.cyan.darken(colorScale * 3),
  cyan90: base.cyan.darken(colorScale * 4),
  amethyst10: base.amethyst.lighten(colorScale * 4),
  amethyst20: base.amethyst.lighten(colorScale * 3),
  amethyst30: base.amethyst.lighten(colorScale * 2),
  amethyst40: base.amethyst.lighten(colorScale),
  amethyst50: base.amethyst,
  amethyst60: base.amethyst.darken(colorScale),
  amethyst70: base.amethyst.darken(colorScale * 2),
  amethyst80: base.amethyst.darken(colorScale * 3),
  amethyst90: base.amethyst.darken(colorScale * 4),
  seattle10: base.seattle.lighten(colorScale * 4),
  seattle20: base.seattle.lighten(colorScale * 3),
  seattle30: base.seattle.lighten(colorScale * 2),
  seattle40: base.seattle.lighten(colorScale),
  seattle50: base.seattle,
  seattle60: base.seattle.darken(colorScale),
  seattle70: base.seattle.darken(colorScale * 2),
  seattle80: base.seattle.darken(colorScale * 3),
  seattle90: base.seattle.darken(colorScale * 4),
  ivory: shibuiTokens.colors.ivory,
  graphite: shibuiTokens.colors.graphite,
  midnight: shibuiTokens.colors.midnight,
}

// const gradients = {
//   headerBackground: LinearGradient.make(Toward.Bottom, base.darkPurple, base.black),
// }

/**
 * Semantically mapped colors
 */
const colorsMapped = {
  contentBackground: colors.ivory,
  text: colors.midnight,
}

export const palette = {
  colors,
  // gradients,
  colorsMapped
}