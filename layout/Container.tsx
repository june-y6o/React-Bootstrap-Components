import styled, { x } from '@xstyled/styled-components'
import React, { ComponentProps } from 'react'

type ContainerProps = ComponentProps<typeof x.div> & {
  fluid?: boolean
}

export const Container = ({
  fluid = false,
  ...props
}: ContainerProps) => {
  return (
    <x.div
      w="100%"
      maxWidth={fluid ? "100%" : {
        sm: "540px",    // @media (min-width: 576px) { ... }
        md: "720px",    // @media (min-width: 576px) { ... }
        lg: "960px",    // @media (min-width: 992px) { ... }
        xl: "1140px",   // @media (min-width: 1024px) { ... }
        xxl: "1320px"   // @media (min-width: 1200px) { ... }
      }}
      paddingLeft="0.75em"
      paddingRight="0.75em"
      marginRight="auto"
      marginLeft="auto"
      {...props}
    />
  )
}