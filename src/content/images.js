const pictures = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
  query: { w: '480;960;1200', format: 'avif;webp;jpg', as: 'picture' },
})

export function pictureFor(imagePath) {
  const fileName = imagePath.split('/').pop()

  return pictures[`../assets/images/${fileName}`]
}
