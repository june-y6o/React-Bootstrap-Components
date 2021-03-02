import { x } from '@xstyled/styled-components'
import React, { forwardRef, ComponentProps, ReactNode, ForwardRefRenderFunction } from 'react'

export type TabPaneProps = {
  tabLabel: string,
  children: ReactNode,
  defaultActive?: boolean
}

export const TabPane = ({children, tabLabel}: TabPaneProps) => {
  return (
    <x.div>
      {children}
    </x.div>
  )
}
