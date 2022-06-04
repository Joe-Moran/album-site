/**
 * Interface for building a view section
 * @returns {object} the interface functions
 */
export default {
  /**
     * Creates a ViewSection object.
     * @param {string} path The URI path of the view section
     * @param {string} label The section's label for displaying to the user
     * @param {Component} component The component to render as a section within a view
     * @returns {ViewSection}
     */
  buildViewSection: (path, label, component) => ({ path, label, component }),
};

/**
 * @typedef {object} ViewSection A section within a view. A part of a webpage.
 * @property {string} path The section's URI path
 * @property {string} label The label of the section for headings etc.
 * @property {Component} component The component to render as a section within a view
 */

/**
 * @typedef { import('vue/types/umd').Component } Component
 */
