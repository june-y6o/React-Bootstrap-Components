import React from 'react'
import { useColorMode } from '@xstyled/styled-components'

export const ColorModeSwitcherContainer = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header>
      <button
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}
