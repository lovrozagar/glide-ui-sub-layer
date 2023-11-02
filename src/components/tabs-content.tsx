'use client'

import { Content } from '@radix-ui/react-tabs'
import React from 'react'
import { useContentProps } from '../hooks/use-content-props'
import { TabsContentProps, TabsContentRef } from '../types/types'

const TabsContent = React.memo(
  React.forwardRef<TabsContentRef, TabsContentProps>(({ className, tabIndex, ...otherProps }, ref) => {
    const { mergedClassName } = useContentProps(className)

    return <Content {...otherProps} ref={ref} tabIndex={tabIndex ?? -1} className={mergedClassName} />
  })
)

TabsContent.displayName = 'TabsContent'

export { TabsContent }
