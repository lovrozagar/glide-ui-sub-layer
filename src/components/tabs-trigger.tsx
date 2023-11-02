'use client'

import { Trigger } from '@radix-ui/react-tabs'
import React from 'react'
import { TabsTriggerProps, TabsTriggerRef } from '../types/types'
import { TabsCursor } from './tabs-cursor'
import { useTabsTriggerProps } from '../hooks/use-tabs-trigger-props'
import { SubLayer } from '@/external/sub-layer/components/sub-layer'
import { Ripple } from '@/external/ripple/ripple'

const TabsTrigger = React.memo(
  React.forwardRef<TabsTriggerRef, TabsTriggerProps>((props, ref) => {
    const { className, value, children, disabled, ...otherProps } = props
    const { isActiveTab, mergedClassName, disableCursorTransition } = useTabsTriggerProps({ value, className })

    return (
      <Trigger {...otherProps} ref={ref} value={value} className={mergedClassName}>
        {children}
        {isActiveTab && <TabsCursor />}
        {!disableCursorTransition && (
          <SubLayer>
            <Ripple />
          </SubLayer>
        )}
      </Trigger>
    )
  })
)

TabsTrigger.displayName = 'TabsTrigger'

export { TabsTrigger }
