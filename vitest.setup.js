import '@testing-library/jest-dom/vitest'

// jsdom does not implement matchMedia
window.matchMedia ??= (query) => ({
  matches: false,
  media: query,
  addEventListener() {},
  removeEventListener() {},
})
