import {Point2D, DropShadow} from '@diez/prefabs';
import {palette} from './Palette';
import {spacing} from './Layout';

export const shadows = {
  button: new DropShadow({
    offset: Point2D.make(0, 1),
    radius: spacing.xs,
    color: palette.colors.seattle50.fade(0.35),
  }),
  card: new DropShadow({
    offset: Point2D.make(0, 0),
    radius: spacing.md,
    color: palette.colors.seattle50.fade(0.5),
  }),
  cardOnDark: new DropShadow({
    offset: Point2D.make(0, 0),
    radius: spacing.md,
    color: palette.colors.midnight.fade(0.5),
  }),
  cardHovered: new DropShadow({
    offset: Point2D.make(0, 0),
    radius: spacing.lg,
    color: palette.colors.seattle50.fade(0.42),
  }),
  cardHoveredOnDark: new DropShadow({
    offset: Point2D.make(0, 0),
    radius: spacing.lg,
    color: palette.colors.midnight.fade(0.42),
  }),
  modal: new DropShadow({
    offset: Point2D.make(0, 0),
    radius: spacing.lg,
    color: palette.colors.seattle50.fade(0.42),
  }),
  modalOnDark: new DropShadow({
    offset: Point2D.make(0, 0),
    radius: spacing.lg,
    color: palette.colors.graphite.fade(0.22),
  })
}