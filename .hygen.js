const changeCase = require('change-case');

const theUndesirables = /reusable/;

const titlizePaths = (input) => input.split('/').reduce(
  (prev, curr) => `${prev ? `${prev}/` : ''}${changeCase.sentenceCase(curr)}`,
);

/**
 * Remove 'reusable' if exists in path.
 * Use remainder of path to create structure for Storybook hierarchy.
 * Don't use file name if it already exists as a directory.
 *
 * Result example: Component Directory/Component Name
 */
module.exports = {
  helpers: {
    storyPathFormat: (path, name) => `${titlizePaths(path.replace(theUndesirables, ''))}/${path.toUpperCase().indexOf(name.toUpperCase()) > -1 ? '' : changeCase.sentenceCase(name)}`,
  },
};
