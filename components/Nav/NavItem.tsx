import React, { ComponentProps, ReactNode } from 'react'
import styled, { system, SystemProps } from '@xstyled/styled-components'
import { x } from "@xstyled/styled-components"
import { NavLink } from "./NavLink";

type NavItemProps = ComponentProps<typeof x.li> & {
  children: ReactNode
  onClick: (event: React.MouseEvent<HTMLAnchorElement>, callbackData?: any) => void
  active?: boolean
  callbackData?: any
}

export const NavItemOuterB = styled(x.li)``
export const NavItemOuter = styled.liBox`
  display: list-item;
  text-align: -webkit-match-parent;
`

export const NavItem = ({active, onClick, children, callbackData} : NavItemProps) => {
  const navClickHandler = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, callbackData?: any) => {
      onClick(event, callbackData)
    },
    []
  )
  return (
    <NavItemOuter>
      <NavLink active={active} onClick={navClickHandler} callbackData={callbackData}>{children}</NavLink>
    </NavItemOuter>
  )
}