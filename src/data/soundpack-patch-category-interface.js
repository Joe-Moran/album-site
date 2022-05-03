export default {
  /**
   * Builds a PatchCategory
   * @param {string} category The category grouping of patches
   * @param {number} [patchCount=1] The number of patches belonging to the category
   * @param {?string} description The extra details, if needed, to explain the category
   * @returns {PatchCategory}
   */
  build(category, patchCount = 1, description = null) {
    return { category, patchCount, description };
  },
};

/**
 * @typedef PatchCategory A category, or grouping, of patches with additional details
 * @property {string} category The category grouping of patches
 * @property {number} [patchCount=1] The number of patches belonging to the category
 * @property {?string} description The extra details, if needed, to explain the category
 *
 */
