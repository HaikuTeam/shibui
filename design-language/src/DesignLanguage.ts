import { Lottie } from '@diez/prefabs';
import { palette } from './Palette';
import { icons } from './Icons';
import { images } from './Images';
import { layout } from './Layout';
import { shadows } from './Shadows';
import { typography } from './Typography';
import { copywriting } from './Localization';

export const designLanguage = { 
  palette,
  icons,
  images,
  layout,
  loadingAnimation: Lottie.fromJson('assets/loadingAnimation.json', false),
  localization: copywriting,
  shadows,
  typography,
}
