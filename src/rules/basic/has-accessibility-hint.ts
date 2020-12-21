/**
 * Original: JP Driver
 * See: https://github.com/FormidableLabs/eslint-plugin-react-native-a11y/blob/master/src/rules/has-accessibility-hint.js
 */

import { Rule } from 'eslint'
import { hasProp } from 'jsx-ast-utils'
import { ACCESSIBILITY_HINT, ACCESSIBILITY_LABEL } from '../../constants'
import { JSXOpeningElement } from '../../types'

export const rule: Rule.RuleModule = {
  meta: {
    docs: {},
    schema: [],
  },

  create: (context) => ({
    JSXOpeningElement: (node: JSXOpeningElement) => {
      if (
        hasProp(node.attributes, ACCESSIBILITY_LABEL) &&
        !hasProp(node.attributes, ACCESSIBILITY_HINT)
      ) {
        context.report({
          node,
          message: 'has accessibilityLabel prop but no accessibilityHint',
        })
      }
    },
  }),
}
