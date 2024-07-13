const bemClass = /^([a-z0-9\\-]{2,})(__[a-z0-9\\-]{2,})?(--[a-z0-9\\-]{2,})?$/;

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  customSyntax: 'postcss-scss',
  rules: {
    'prettier/prettier': true,

    // General / Sheet
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'selector-max-universal': 2,
    'max-nesting-depth': 6,
    'scss/load-no-partial-leading-underscore': true,

    // Declaration block
    'declaration-block-no-shorthand-property-overrides': true,

    // Selector
    'selector-class-pattern': [bemClass, { resolveNestedSelectors: true }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: 'global',
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    'scss/selector-no-redundant-nesting-selector': true,

    // Media
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,

    // At-rule
    'scss/at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,

    // Properties
    'property-no-unknown': true,
    'shorthand-property-no-redundant-values': true,

    // Values
    'number-max-precision': 4,
    'value-no-vendor-prefix': true,
    'unit-no-unknown': true,
    'length-zero-no-unit': true,

    // Colors
    'color-no-invalid-hex': true,

    // Fonts
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-family-name-quotes': 'always-unless-keyword',

    // Function
    'function-linear-gradient-no-nonstandard-direction': true,
    // 'function-calc-no-invalid': true,
    // Comment
    'comment-no-empty': true,

    // Operators
    'scss/operator-no-unspaced': true,
  },
};
