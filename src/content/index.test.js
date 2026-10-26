import { getReleases } from './'

it('Lists every album before any single', () => {
  const types = getReleases().map((release) => release.type)
  const albumsThenSingles = [
    ...types.filter((type) => type === 'album'),
    ...types.filter((type) => type === 'single'),
  ]
  expect(types).toEqual(albumsThenSingles)
})
