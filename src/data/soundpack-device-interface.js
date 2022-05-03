export default () => ({

  /**
   * Builds a SoundpackDevice.
   *
   * @param {string} title The title of the soundpack device
   * @param {array} patches The patches for the device
   * @returns {SoundpackDevice}
   */
  build(title, patches) {
    return { title, patches };
  },
});

/**
 * @typedef {object} SoundpackDevice A device (plugin, hardware synthesizer, etc.)
 * for which patches were created within a soundpack
 * @property {string} title The title of the device for which patches were created
 * @property {array} patches The patches created for the device
 */
