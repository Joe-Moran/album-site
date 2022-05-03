import soundpackPatchCategoryInterface from '@/data/soundpack-patch-category-interface';
import soundpackDeviceInterface from '@/data/soundpack-device-interface';
import soundpackInterface from '@/data/soundpack-interface';
import soundpackPatchCategory from './soundpack-patch-category';

/**
 * The Refraction Soundpack
 * Contains sounds, synth presets, and ableton effect racks used
 * in the making of my album Refraction.
 */
export default [
  soundpackInterface.build(
    'Refraction Soundpack',
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1276519099&color=%237e4395&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    [
      soundpackDeviceInterface.build(
        'Omnisphere Patches',
        [
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.SYNTH_BASS, 1),
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.PAD, 3),
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.LEAD, 2),
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.MULTI, 5, 'Rhythmic, FX, noise, etc.'),
        ],
      ),
      soundpackDeviceInterface.build(
        'Prophet REV2 Patches',
        [
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.LEAD, 2),
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.PAD, 2),
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.MULTI, 2, 'FX and some sweet polyphonic shit'),
        ],
      ),
      soundpackDeviceInterface.build(
        'Ableton Presets',
        [
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.FX, 4),
        ],
      ),
      soundpackDeviceInterface.build(
        'Audio Samples',
        [
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.AUDIO_SAMPLE, 4),
          soundpackPatchCategoryInterface.build(soundpackPatchCategory.VOX, 6),
        ],
      ),
    ],
    '<p>Howdy! <br/><br/>Thank you so much for your support and love and whatever else you’ve been secretly sending me without my knowing. <br/> Sound design is a huge part of my creative process, so I felt I needed to share some of my sounds with you, the artist. I hope you gain inspiration within these files, but if you find the sounds uninspiring, dull, or pointless, then hell yeah! Sometimes it requires a hell of a picky ear to translate or find inspiration for a sound or song, so I’m happy knowing I can help you sound less shitty than some of my worst songs ever. <br/><br/>I hope you are writing some sick fucking jams and have as much fun as I did while writing my album Refraction. <br/><br/>Thanks for listening! <br/>Love, xRGB</p>',
  )];
