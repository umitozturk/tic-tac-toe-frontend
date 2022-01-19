'use strict';

module.exports = {
  extends: 'octane',

  rules: {
    // RULES FOR EMBER BEST PRACTICES
    'deprecated-each-syntax': true,
    'deprecated-inline-view-helper': true,
    'no-model-argument-in-route-templates': true,
    // Mut helper might get deprecated in ember v5.0 but there is no ergonomic alternative today
    'no-mut-helper': false,
    'no-redundant-fn': true,
    'no-yield-only': true,
    // TODO: enable this by fixing earlier invocations.
    // this rule enhance the performance of each helper
    'require-each-key': false,
    'no-dynamic-subexpression-invocations': true,

    // RULES FOR HBS STYLES
    'template-length': { max: 180, min: 1 },

    // RULES TO PREVENT TYPOS
    'no-block-params-for-html-elements': true,
    'no-invalid-block-param-definition': true,
    'no-potential-path-strings': true,
    'no-unbalanced-curlies': true,

    // RULES FOR HTML SEMANTICS
    'inline-link-to': true,
    'no-arguments-for-html-elements': true,
    'no-duplicate-id': true,
    'no-duplicate-landmark-elements': true,
    'no-forbidden-elements': true,
    'no-invalid-link-title': true,
    'no-link-to-tagname': true,
    'no-nested-landmark': true,

    // RULES FOR ACCESSIBILITY
    'no-accesskey-attribute': true,
    'no-aria-hidden-body': true,
    'no-heading-inside-button': true,
    'no-redundant-landmark-role': true,
    'no-whitespace-for-layout': true,
    'no-whitespace-within-word': true,
    'require-input-label': true,

    // MISC
    'no-bare-strings': false,
    'no-inline-styles': false,
    'no-positional-data-test-selectors': true,
  },
};
