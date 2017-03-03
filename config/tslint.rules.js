// tslint-config-rules
const path = require('path');
const recommendedRuleset = require('tslint-microsoft-contrib/recommended_ruleset').rules;
const modulesDirectory = path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), '..');

module.exports = {
  rulesDirectory: [
    path.join(modulesDirectory, 'tslint-microsoft-contrib'),
    path.join(modulesDirectory, 'codelyzer')
  ],
  rules: Object.assign({
    // https://github.com/mgechev/codelyzer#recommended-configuration
    "directive-selector-name": [true, "camelCase"],
    "component-selector-name": [true, "kebab-case"],
    "directive-selector-type": [true, "attribute"],
    "component-selector-type": [true, "element"],
    "directive-selector-prefix": [true, "sg"],
    "component-selector-prefix": [true, "sg"],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-attribute-parameter-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "no-forward-ref": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "pipe-naming": [true, "camelCase", "sg"],
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "import-destructuring-spacing": true,
    "templates-use-public": true,
    "no-access-missing-member": true,
    "invoke-injectable": true
  }, recommendedRuleset)
};
