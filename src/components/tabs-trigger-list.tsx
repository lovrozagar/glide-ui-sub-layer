'use client'

import { List } from '@radix-ui/react-tabs'
import React from 'react'
import { useTabsTriggerListProps } from '../hooks/use-tabs-trigger-list-props'
import { TabsTriggerListProps, TabsTriggerListRef } from '../types/types'

const TabsTriggerList = React.memo(
  React.forwardRef<TabsTriggerListRef, TabsTriggerListProps>(({ className, children, ...otherProps }, ref) => {
    const { mergedClassName } = useTabsTriggerListProps(className)

    return (
      <List ref={ref} className={mergedClassName} {...otherProps}>
        {children}
      </List>
    )
  })
)

TabsTriggerList.displayName = 'TabsTriggerList'

export { TabsTriggerList }
