import { releaseSchema } from './schema'

const validRelease = {
  title: 'Refraction',
  type: 'album',
  cover: '/images/Refraction.jpg',
  streaming: [{ service: 'spotify', url: 'https://open.spotify.com/album/example' }],
}

function issuePaths(release) {
  return releaseSchema.safeParse(release).error?.issues.map((issue) => issue.path.join('.')) ?? []
}

it('Accepts a complete release', () => {
  expect(issuePaths(validRelease)).toEqual([])
})

it('Rejects a streaming service it has no icon for', () => {
  const release = { ...validRelease, streaming: [{ service: 'tidal', url: 'https://tidal.com/x' }] }
  expect(issuePaths(release)).toEqual(['streaming.0.service'])
})

it('Rejects a streaming link that is not https', () => {
  const release = {
    ...validRelease,
    streaming: [{ service: 'spotify', url: 'http://spotify.com/x' }],
  }
  expect(issuePaths(release)).toEqual(['streaming.0.url'])
})

it('Rejects a cover outside the images folder', () => {
  expect(issuePaths({ ...validRelease, cover: 'Refraction.jpg' })).toEqual(['cover'])
})

it('Rejects a misspelled field name', () => {
  expect(issuePaths({ ...validRelease, titel: 'Typo' })).toEqual([''])
})
