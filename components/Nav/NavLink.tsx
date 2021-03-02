import React, { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'
import { x } from "@xstyled/styled-components"

type NavbLinkProps = ComponentProps<typeof x.a> & {
  children: ReactNode
  active?: boolean
  onClick: (event: React.MouseEvent<HTMLAnchorElement>, callBackData?: any) => void
  callbackData?: any
}

export const StyledNavlink = styled(x.a)<NavbLinkProps>`
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  ${props => props.active ? `
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  ` : null}
`

export const NavLink = ({children, onClick, active, callbackData, ...Systemprops}: NavbLinkProps) => {
  const linkClickHandler = React.useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick(event, callbackData)
  },[])
  return (
    <StyledNavlink
      as="a"
      active={active}
      {...Systemprops}
      className={active && 'active'}
      onClick={linkClickHandler}
    >
        {children}
    </StyledNavlink>
  )
}