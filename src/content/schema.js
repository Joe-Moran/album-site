import { z } from 'zod'

import { socialPlatforms, streamingServices } from './platforms'

const text = z.string().trim().min(1)
const httpsUrl = z.url({ protocol: /^https$/ })
const imagePath = z
  .string()
  .regex(
    /^\/?images\/[^/]+\.(jpe?g|png|webp|avif)$/i,
    'Use a JPEG, PNG, WebP, or AVIF image from /images, e.g. /images/cover.jpg'
  )

export const releaseSchema = z.strictObject({
  title: text,
  type: z.enum(['album', 'single']),
  releaseDate: z.iso.date('Use a YYYY-MM-DD release date, e.g. 2020-06-23'),
  cover: imagePath,
  streaming: z
    .array(
      z.strictObject({
        service: z.enum(Object.keys(streamingServices)),
        url: httpsUrl,
      })
    )
    .min(1),
})

export const soundpackSchema = z.strictObject({
  title: text,
  cover: imagePath,
  coverAlt: text,
  summary: text,
  download: z.string().startsWith('/'),
  devices: z
    .array(
      z.strictObject({
        title: text,
        patches: z
          .array(
            z.strictObject({
              category: text,
              count: z.int().positive(),
              description: text.optional(),
            })
          )
          .min(1),
      })
    )
    .min(1),
  demos: z.array(z.strictObject({ title: text, playerTitle: text, embedUrl: httpsUrl })),
  note: text,
})

export const latestSchema = z.strictObject({
  title: text,
  embedUrl: httpsUrl,
  height: z.int().positive(),
  link: z.strictObject({ label: text, url: httpsUrl }),
})

export const aboutSchema = z.strictObject({
  photo: imagePath,
  photoAlt: text,
  text,
})

export const socialLinksSchema = z.array(
  z.strictObject({
    platform: z.enum(Object.keys(socialPlatforms)),
    url: httpsUrl,
  })
)
