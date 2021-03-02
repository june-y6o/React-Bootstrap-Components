import React, { Children, ComponentProps, ReactNode } from 'react'
import styled, { x } from "@xstyled/styled-components"
import { Tabs } from "./Tabs"
import { Nav } from "../Nav/Nav"
import { NavItem } from "../Nav/NavItem"
import { TabPane, TabPaneProps } from "./TabPane"

type TabsContainerProps = ComponentProps<typeof x.li> & {
  children: JSX.Element[]
}

type TabInfo = {
  active: boolean
  label: string
  element: Element
}

const TabPanes = styled.divBox`
  .hide {
    display: none;
  }
`

export const TabsContainer = ({ children }: TabsContainerProps) => {
  const tabPanesRef = React.useRef<HTMLDivElement>(null)
  const [tabInfos, setTabInfos] = React.useState<TabInfo[]>([]) 

  React.useEffect(() => {
    if(tabPanesRef.current){
      const htmlCollection = tabPanesRef.current.children

      const initTabInfos: TabInfo[] = []

      for(let i = 0; i < children.length; i++){
        const active: boolean = children[i].props.defaultActive === true
        const element = htmlCollection.item(i)
        const label: string = children[i].props.tabLabel
        if(element && label){
          const _tabInfo: TabInfo = {
            active, element, label
          }
          initTabInfos.push(_tabInfo)
        }
      }
      setTabInfos(initTabInfos)
    }
  },[])

  React.useEffect(() => {
    tabInfos.forEach((tabInfo) => {
      if(tabInfo.active){
        tabInfo.element.classList.add('show')
        tabInfo.element.classList.remove('hide')
      }else{
        tabInfo.element.classList.add('hide')
        tabInfo.element.classList.remove('show')
      }
    })
  },[tabInfos])

  const onTabClickHandler = React.useCallback((event:React.MouseEvent<HTMLAnchorElement>, cbIndex: Number) => {
    const newTagInfos = tabInfos.map((oldTabInfo, index) => {
      console.log(index, cbIndex, index === cbIndex)
      oldTabInfo.active = index === cbIndex
      return oldTabInfo
    })
    setTabInfos(newTagInfos)
  },[tabInfos])

  return (
    <x.div>
      <Tabs>
        <Nav>
          {tabInfos.map((tabInfo, index) => {
            return (
              <NavItem
                onClick={onTabClickHandler}
                active={tabInfo.active}
                callbackData={index}
              >
                  {tabInfo.label}
              </NavItem>
            )
          })}
        </Nav>
      </Tabs>
      <TabPanes ref={tabPanesRef}>
        {children}
      </TabPanes>
    </x.div>
  )
}