'use client'

import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { useContentListProps } from '../hooks/use-content-list-props'
import { TabsContentListProps } from '../types/types'

const TabsContentList = React.memo(
  React.forwardRef<HTMLDivElement, TabsContentListProps>((props, ref) => {
    const { asChild, children, className, ...otherProps } = props
    const { mergedClassName } = useContentListProps(className)
    const Component = asChild ? Slot : 'div'

    return (
      <Component {...otherProps} ref={ref} className={mergedClassName}>
        {children}
      </Component>
    )
  })
)

export { TabsContentList }
