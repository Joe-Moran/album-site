import pagesConfig from '../../.pages.yml'

import { socialPlatforms, streamingServices } from './platforms'

function selectValues(contentName, fieldPath) {
  const entry = pagesConfig.content.find((content) => content.name === contentName)
  const field = fieldPath.reduce((fields, name, index) => {
    const match = fields.find((candidate) => candidate.name === name)
    return index === fieldPath.length - 1 ? match : match.fields
  }, entry.fields)

  return [...field.options.values].sort()
}

it('Offers exactly the streaming services the site has icons for', () => {
  expect(selectValues('releases', ['streaming', 'service'])).toEqual(
    Object.keys(streamingServices).sort()
  )
})

it('Offers exactly the social platforms the site has icons for', () => {
  expect(selectValues('social-links', ['platform'])).toEqual(Object.keys(socialPlatforms).sort())
})
