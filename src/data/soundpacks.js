import SoundpackPatchCategoryFactory from '@/factories/Soundpack/PatchCategoryFactory';
import SoundpackDeviceFactory from '@/factories/Soundpack/SoundpackDeviceFactory';
import SoundpackFactory from '@/factories/Soundpack/SoundpackFactory';
import patchCategories from './soundpack-patch-categories';

const Factory = SoundpackFactory();
const DeviceFactory = SoundpackDeviceFactory();
const PatchCategoryFactory = SoundpackPatchCategoryFactory();

/**
 * The Refraction Soundpack
 * Contains sounds, synth presets, and ableton effect racks used
 * in the making of my album Refraction.
 */
const refractionSoundpack = Factory.build(
  'Refraction Soundpack',
  'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1276519099&color=%237e4395&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  [
    DeviceFactory.build(
      'Omnisphere Patches',
      [
        PatchCategoryFactory.build(patchCategories.SYNTH_BASS, 1),
        PatchCategoryFactory.build(patchCategories.PAD, 3),
        PatchCategoryFactory.build(patchCategories.LEAD, 2),
        PatchCategoryFactory.build(patchCategories.MULTI, 5, 'Rhythmic, FX, noise, etc.'),
      ],
    ),
    DeviceFactory.build(
      'Prophet REV2 Patches',
      [
        PatchCategoryFactory.build(patchCategories.LEAD, 2),
        PatchCategoryFactory.build(patchCategories.PAD, 2),
        PatchCategoryFactory.build(patchCategories.MULTI, 2, 'FX and some sweet polyphonic shit'),
      ],
    ),
    DeviceFactory.build(
      'Ableton Presets',
      [
        PatchCategoryFactory.build(patchCategories.FX, 4),
      ],
    ),
    DeviceFactory.build(
      'Audio Samples',
      [
        PatchCategoryFactory.build(patchCategories.AUDIO_SAMPLE, 4),
        PatchCategoryFactory.build(patchCategories.VOX, 6),
      ],
    ),
  ],
  '<p>Howdy! <br/><br/>Thank you so much for your support and love and whatever else you’ve been secretly sending me without my knowing. <br/> Sound design is a huge part of my creative process, so I felt I needed to share some of my sounds with you, the artist. I hope you gain inspiration within these files, but if you find the sounds uninspiring, dull, or pointless, then hell yeah! Sometimes it requires a hell of a picky ear to translate or find inspiration for a sound or song, so I’m happy knowing I can help you sound less shitty than some of my worst songs ever. <br/><br/>I hope you are writing some sick fucking jams and have as much fun as I did while writing my album Refraction. <br/><br/>Thanks for listening! <br/>Love, xRGB</p>',
);
export default [
  refractionSoundpack,
];
