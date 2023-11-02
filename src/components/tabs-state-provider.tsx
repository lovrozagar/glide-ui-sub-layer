import React from 'react'
import { TabContext, TabsContextValue } from '../context/tab-context'

type TabsStateProviderProps = {
  value: TabsContextValue
  children: React.ReactNode
}

const TabsStateProvider = ({ value, children }: TabsStateProviderProps) => {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>
}

export { TabsStateProvider }
