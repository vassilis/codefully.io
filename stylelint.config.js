module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': null,
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's', '%', 'px', 'vw', 'vh', 'ms'],
  },
};
