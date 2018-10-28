// TODO: fix focus ring gap
import core from '@pluralsight/ps-design-system-core'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

import * as vars from '../vars'

export default {
  '.psds-dropdown': {
    display: 'inline-block',
    position: 'relative'
  },
  '.psds-dropdown--disabled': {
    opacity: 0.5
  },

  // __field
  '.psds-dropdown__field': {
    position: 'relative',
    height: '40px',
    width: '100%',
    borderRadius: '2px',
    background: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium,
    color: core.colors.gray03,
    padding: `0 calc(${core.layout.spacingXSmall} + ${
      iconVars.widths.medium
    } + ${core.layout.spacingXSmall}) 0 ${core.layout.spacingMedium}`,
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer'
  },
  '.psds-dropdown__field:focus': {
    outline: 'none'
  },
  [`.psds-dropdown__field.psds-theme--${themeNames.light}:focus`]: {
    border: '1px solid transparent'
  },
  [`.psds-dropdown__field.psds-theme--${themeNames.light}`]: {
    background: core.colors.white,
    color: core.colors.gray05,
    border: `1px solid ${core.colors.gray02}`
  },
  [`.psds-dropdown__field--error.psds-theme--${themeNames.light}`]: {
    border: '1px solid transparent'
  },
  [`.psds-dropdown__field--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01,
    background: core.colors.gray04,
    border: `none`
  },

  // __field-container
  '.psds-dropdown__field-container': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    minWidth: `calc(${iconVars.widths.medium} + ${core.layout.spacingXSmall})`
  },
  '.psds-dropdown__field-container:focus:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-dropdown__field-container.psds-theme--${
    themeNames.light
  }:focus:before`]: {
    background: core.colors.bone,
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  '.psds-dropdown__field-container:focus:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.blue,
    zIndex: '-2',
    borderRadius: '4px'
  },
  [`.psds-dropdown__field-container.psds-theme--${
    themeNames.light
  }:focus:after`]: {
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px'
  },
  '.psds-dropdown__field-container--error:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  [`.psds-dropdown__field-container--error.psds-theme--${
    themeNames.light
  }:before`]: {
    background: core.colors.bone,
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  '.psds-dropdown__field-container--error:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.red,
    zIndex: '-2',
    borderRadius: '4px'
  },
  [`.psds-dropdown__field-container--error.psds-theme--${
    themeNames.light
  }:after`]: {
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px'
  },

  // __icon
  '.psds-dropdown__icon': {
    position: 'absolute',
    left: 'auto',
    right: core.layout.spacingXSmall,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.gray03,
    cursor: 'pointer'
  },
  [`.psds-dropdown__icon.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },
  [`.psds-dropdown__icon--appearance-${vars.appearances.subtle}`]: {
    color: core.colors.gray01
  },

  // __label
  '.psds-dropdown__label': {
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingBottom: core.layout.spacingXSmall
  },
  [`.psds-dropdown__label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray05
  },

  // __sub-label
  '.psds-dropdown__sub-label': {
    color: core.colors.gray02,
    fontSize: core.type.fontSizeXSmall,
    lineHeight: '16px',
    fontWeight: core.type.fontWeightMedium,
    paddingTop: core.layout.spacingXSmall
  },
  [`.psds-dropdown__sub-label.psds-theme--${themeNames.light}`]: {
    color: core.colors.gray03
  },

  // __error
  '.psds-dropdown__error': {
    position: 'absolute',
    right: `calc(-1 * (${iconVars.widths.medium} + ${
      core.layout.spacingXSmall
    }))`,
    display: 'flex',
    alignItems: 'center',
    color: core.colors.red,
    marginLeft: core.layout.spacingXSmall
  },

  // __placeholder
  '.psds-dropdown__placeholder': {
    position: 'absolute',
    top: core.layout.spacingXSmall,
    left: core.layout.spacingMedium,
    whiteSpace: 'nowrap'
  },

  // __button-sizer
  '.psds-dropdown__button-sizer': {
    visibility: 'hidden',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  },

  // __menu
  '.psds-dropdown__menu': {
    position: 'absolute',
    zIndex: 980,
    marginTop: core.layout.spacingXXSmall
  },

  // __page-overlay
  '.psds-dropdown__page-overlay': {
    position: 'fixed',
    zIndex: 970,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}
