import { existsSync } from 'node:fs'

import about from './about.yml'
import { pictureFor } from './images'
import latest from './latest.yml'
import {
  aboutSchema,
  latestSchema,
  releaseSchema,
  socialLinksSchema,
  soundpackSchema,
} from './schema'
import socialLinks from './social-links.yml'

const releaseFiles = Object.entries(
  import.meta.glob('./releases/*.yml', { eager: true, import: 'default' })
)
const soundpackFiles = Object.entries(
  import.meta.glob('./soundpacks/*.yml', { eager: true, import: 'default' })
)

function schemaIssues(schema, data) {
  return schema.safeParse(data).error?.issues ?? []
}

it.each(releaseFiles)('Follows the release format in %s', (file, release) => {
  expect(schemaIssues(releaseSchema, release)).toEqual([])
})

it.each(releaseFiles)('Finds the cover image named in %s', (file, release) => {
  expect(pictureFor(release.cover)).toBeDefined()
})

it.each(soundpackFiles)('Follows the soundpack format in %s', (file, soundpack) => {
  expect(schemaIssues(soundpackSchema, soundpack)).toEqual([])
})

it.each(soundpackFiles)('Finds the cover image named in %s', (file, soundpack) => {
  expect(pictureFor(soundpack.cover)).toBeDefined()
})

it.each(soundpackFiles)('Finds the download file in public/ named in %s', (file, soundpack) => {
  expect(existsSync(`public${soundpack.download}`)).toBe(true)
})

it('Follows the latest format in latest.yml', () => {
  expect(schemaIssues(latestSchema, latest)).toEqual([])
})

it('Follows the about format in about.yml', () => {
  expect(schemaIssues(aboutSchema, about)).toEqual([])
})

it('Finds the photo named in about.yml', () => {
  expect(pictureFor(about.photo)).toBeDefined()
})

it('Follows the social links format in social-links.yml', () => {
  expect(schemaIssues(socialLinksSchema, socialLinks)).toEqual([])
})
