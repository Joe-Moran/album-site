export default {
  /**
   * Builds a soundpack data model.
   *
   * @param {string} title The title of the soundpack
   * @param {string} demoPlayerEmbedPath URI of the streaming player to play audio demos
   * @param {array} devices The devices (synthesizers, plugins, software)
   * @param {string} note The HTML of the note to explain the background
   * @returns {Soundpack}
   */
  build(title, demoPlayerEmbedPath, devices, note) {
    return {
      title, demoPlayerEmbedPath, devices, note,
    };
  },
};

/**
 * The data for a single soundpack.
 *
 * @typedef {object} Soundpack
 * @property {string} title The title of the soundpack
 * @property {string} demoPlayerEmbedPath URI of the streaming player to play audio demos
 * @property {array} devices The devices (synthesizers, plugins, software)
 * @property {string} note The HTML of the note to explain the background
 */
