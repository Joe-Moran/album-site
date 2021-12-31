import releaseTypes from './release-types';
import streamingSources from './streaming-sources';

function createStreamObject(streamingSource, link) {
  return { ...streamingSource, link };
}

const releases = {
  albums: [
    {
      title: 'Refraction',
      coverPath: 'Refraction.jpg',
      type: releaseTypes.ALBUM,
      loading: true,
      isReleased: true,
      streaming: [
        createStreamObject(
          streamingSources.bandcamp,
          'https://xrgb.bandcamp.com/album/refraction',
        ),
        createStreamObject(
          streamingSources.spotify,
          'https://open.spotify.com/album/79mhGijQ34QP9qMnd5060T?si=dqX4gOdXRYK_P6V9Uhb02Q',
        ),
        createStreamObject(
          streamingSources.googlePlay,
          'https://music.youtube.com/playlist?list=OLAK5uy_lS7C76SoLN6ZReXH3WkeUFwIQrbmrDLNo&feature=share',
        ),
        createStreamObject(
          streamingSources.appleMusic,
          'https://music.apple.com/us/album/refraction/1518269881?uo=4',
        ),
        createStreamObject(
          streamingSources.soundcloud,
          'https://soundcloud.com/xrgbmusic/sets/refraction',
        ),
      ],
      feature:
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BysmYm124VM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      about: '<p></p>',
      path: '/refraction',
    },
  ],
  singles: [
    {
      title: 'August 19',
      coverPath: 'August 19 Cover.jpg',
      streaming: [
        createStreamObject(
          streamingSources.spotify,
          'https://open.spotify.com/album/4ZYl00c2HEUv7hPLEmFkeq?si=pOahyrKtT5WxeaCE5IdJxg',
        ),
        createStreamObject(
          streamingSources.googlePlay,
          'https://play.google.com/music/m/Byanps25qf6k7nrzv7sl3puw6dy?t=August_19_-_xRGB',
        ),
        createStreamObject(
          streamingSources.appleMusic,
          'https://music.apple.com/us/album/august-19/1518419353?i=1518419354',
        ),
      ],
      type: releaseTypes.SINGLE,
      loading: true,
    },
    {
      title: 'Joint Pain',
      coverPath: 'Joint Pain.jpg',
      streaming: [
        createStreamObject(
          streamingSources.spotify,
          'https://open.spotify.com/album/5XkVKJc6tfB2PUfm206PLX?si=jqMiRtauTUOmgZJ6Csv91g',
        ),
        createStreamObject(
          streamingSources.googlePlay,
          'https://play.google.com/music/m/B43wgzroiq7h5z2i4dh5r3r24my?t=Joint_Pain_-_xRGB',
        ),
        createStreamObject(
          streamingSources.appleMusic,
          'https://music.apple.com/us/album/joint-pain/1517331040?i=1517331044',
        ),
      ],
      type: releaseTypes.SINGLE,
      loading: true,
    },
  ],
};
export default releases;
