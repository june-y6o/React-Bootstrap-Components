import styled, { x, zIndex } from '@xstyled/styled-components'

import { NavCss } from '../Nav/Nav'
import { StyledNavlink } from '../Nav/NavLink'

export const Tabs = styled(x.div)`
  ${NavCss}
  border-bottom: 1px solid #dee2e6;

  ${StyledNavlink} {
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    &:focus,
    &:hover {
      border-color: #e9ecef #e9ecef #dee2e6;
    }
    &.active {
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
    }
  }
`