import { onBeforeUnmount, ref } from 'vue'

export function useMediaQuery(query) {
  const mediaQueryList = window.matchMedia(query)
  const matches = ref(mediaQueryList.matches)

  function updateMatches(event) {
    matches.value = event.matches
  }

  mediaQueryList.addEventListener('change', updateMatches)
  onBeforeUnmount(() => mediaQueryList.removeEventListener('change', updateMatches))

  return matches
}
