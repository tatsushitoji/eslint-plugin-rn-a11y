import { Rule } from 'eslint'
import { hasProp } from 'jsx-ast-utils'
import {
  ACCESSIBILITY_COMPONENT_TYPE,
  ACCESSIBILITY_ROLE,
  ACCESSIBILITY_STATE,
  ACCESSIBILITY_TRAITS,
} from '../../constants'
import { JSXOpeningElement } from '../../types'

type TargetPropName =
  | typeof ACCESSIBILITY_COMPONENT_TYPE
  | typeof ACCESSIBILITY_TRAITS
type NewPropName = typeof ACCESSIBILITY_ROLE | typeof ACCESSIBILITY_STATE

const createErrorMessage = (prop: TargetPropName, insteadProps: NewPropName) =>
  `\`${prop}\` is deprecated. Use \`${insteadProps}\` instead.`

export const rule: Rule.RuleModule = {
  create: (context) => ({
    // @ts-ignore
    JSXOpeningElement: (node: JSXOpeningElement) => {
      if (hasProp(node.attributes, ACCESSIBILITY_COMPONENT_TYPE)) {
        context.report({
          // @ts-ignore
          node,
          message: createErrorMessage(
            ACCESSIBILITY_COMPONENT_TYPE,
            ACCESSIBILITY_ROLE,
          ),
        })
      }
      if (hasProp(node.attributes, ACCESSIBILITY_TRAITS)) {
        context.report({
          // @ts-ignore
          node,
          message: createErrorMessage(
            ACCESSIBILITY_TRAITS,
            'accessibilityState',
          ),
        })
      }
    },
  }),
}
