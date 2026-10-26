import about from './about.yml'
import { pictureFor } from './images'
import latest from './latest.yml'
import { socialPlatforms, streamingServices } from './platforms'
import socialLinks from './social-links.yml'

const releaseFiles = import.meta.glob('./releases/*.yml', { eager: true, import: 'default' })
const soundpackFiles = import.meta.glob('./soundpacks/*.yml', { eager: true, import: 'default' })
const releaseTypeOrder = ['album', 'single']

export function getReleases() {
  return Object.values(releaseFiles)
    .toSorted(
      (first, second) =>
        releaseTypeOrder.indexOf(first.type) - releaseTypeOrder.indexOf(second.type)
    )
    .map((release) => ({
      title: release.title,
      type: release.type,
      cover: pictureFor(release.cover),
      streaming: release.streaming.map(({ service, url }) => ({
        ...streamingServices[service],
        link: url,
      })),
    }))
}

export function getSoundpacks() {
  return Object.values(soundpackFiles).map((soundpack) => ({
    ...soundpack,
    cover: pictureFor(soundpack.cover),
  }))
}

export function getLatest() {
  return latest
}

export function getAbout() {
  return { ...about, photo: pictureFor(about.photo) }
}

export function getSocialLinks() {
  return socialLinks.map(({ platform, url }) => ({
    label: platform,
    href: url,
    logoPath: socialPlatforms[platform],
  }))
}
