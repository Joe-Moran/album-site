import releaseTypes from "./release-types"
import streamingSources from "./streaming-sources"
export default {
    albums: [{
            title: "Refraction",
            coverPath: "Refraction.jpg",
            type: releaseTypes.ALBUM,
            loading: true,
            isReleased: false
        },
        {
            title: "Reflection.",
            coverPath: "Reflection.jpg",
            streaming: [{
                icon: ""
            }],
            type: releaseTypes.ALBUM,
            loading: true
        }
    ],
    singles: [{
            title: "August 19",
            coverPath: "August 19 Cover.jpg",
            streaming: [Object.assign(streamingSources.spotify, {
                link: 'https://open.spotify.com/album/4ZYl00c2HEUv7hPLEmFkeq?si=pOahyrKtT5WxeaCE5IdJxg'
            }), Object.assign({}, streamingSources.googlePlay, {
                link: 'https://play.google.com/music/m/Byanps25qf6k7nrzv7sl3puw6dy?t=August_19_-_xRGB'
            }), Object.assign({}, streamingSources.appleMusic, {
                link: 'https://music.apple.com/us/album/august-19/1518419353?i=1518419354'
            })],
            type: releaseTypes.SINGLE,
            loading: true

        },
        {
            title: "Joint Pain",
            coverPath: "Joint Pain.jpg",
            streaming: [Object.assign(streamingSources.spotify, {
                link: 'https://open.spotify.com/album/5XkVKJc6tfB2PUfm206PLX?si=jqMiRtauTUOmgZJ6Csv91g'
            }), Object.assign({}, streamingSources.googlePlay, {
                link: 'https://play.google.com/music/m/B43wgzroiq7h5z2i4dh5r3r24my?t=Joint_Pain_-_xRGB'
            }), Object.assign({}, streamingSources.appleMusic, {
                link: 'https://music.apple.com/us/album/joint-pain/1517331040?i=1517331044'
            })],
            type: releaseTypes.SINGLE,
            loading: true
        }
    ]
}