import lint from '@commitlint/lint'
import load from '@commitlint/load'

import pagesConfig from '../../.pages.yml'

const sampleValues = {
  '{path}': 'src/assets/images/Cover art - Prequinox Drive.webp',
  '{oldFilename}': 'prequinox-drive.yml',
  '{newFilename}': 'prequinox-drive-deluxe.yml',
}

const templates = Object.entries(pagesConfig.settings.commit.templates)

function fillTemplate(template) {
  return Object.entries(sampleValues).reduce(
    (message, [placeholder, value]) => message.replaceAll(placeholder, value),
    template
  )
}

it.each(templates)(
  'Writes a %s commit message that passes commitlint',
  async (action, template) => {
    const { rules } = await load()
    const { errors } = await lint(fillTemplate(template), rules)
    expect(errors.map((error) => error.message)).toEqual([])
  }
)
