import { getReleases } from './'

it('Lists releases newest first', () => {
  const releaseDates = getReleases().map((release) => release.releaseDate)
  expect(releaseDates).toEqual(releaseDates.toSorted().toReversed())
})

it('Loads release dates as YYYY-MM-DD strings', () => {
  const releaseDates = getReleases().map((release) => release.releaseDate)
  expect(releaseDates.every((releaseDate) => /^\d{4}-\d{2}-\d{2}$/.test(releaseDate))).toBe(true)
})
