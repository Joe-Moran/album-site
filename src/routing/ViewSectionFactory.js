/**
 * Factory for building a view section
 * @returns {object} the factory methods
 */
function ViewSectionFactory() {
  return {
    /**
     * Creates a ViewSection object.
     * @param {string} path The URI path of the view section
     * @param {string} label The section's label for displaying to the user
     * @returns {ViewSection}
     */
    buildViewSection: (path, label, component) => ({ path, label, component }),
  }
}

export default ViewSectionFactory

/**
 * @typedef {object} ViewSection A section of a view. A part of a webpage.
 * @property {string} path The section's URI path
 * @property {string} label The label of the section for headings etc.
 */
