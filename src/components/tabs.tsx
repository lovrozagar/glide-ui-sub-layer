'use client'

import { Root } from '@radix-ui/react-tabs'
import React from 'react'
import { useTabsInit } from '../hooks/use-tabs-init'
import { TabsProps, TabsRef, TabsType } from '../types/types'
import { TabsConciseBody } from './tabs-concise-body'
import { TabsContent } from './tabs-content'
import { TabsContentList } from './tabs-content-list'
import { TabsTrigger } from './tabs-trigger'
import { TabsTriggerList } from './tabs-trigger-list'
import { LazyMotionDomMax } from '@/external/lazy-motion-dom-max'

const Tabs = React.memo(
  React.forwardRef<TabsRef, TabsProps>((props, ref) => {
    const {
      children,
      defaultValue,
      value,
      onValueChange,
      items,
      className,
      classNames,
      cursorTransitonProps,
      disableCursorTransition,
      disableTriggerRipple,
      triggerRippleOptions,
      disableDefaultPseudoElements = false,
      color = 'primary',
      variant = 'solid',
      orientation = 'horizontal',
      ...otherProps
    } = props

    const { mergedClassName, activeTab, handleChange } = useTabsInit({
      defaultValue,
      value,
      onValueChange,
      variant,
      color,
      orientation,
      className,
      classNames,
      cursorTransitonProps,
      triggerRippleOptions,
      disableCursorTransition,
      disableTriggerRipple,
      disableDefaultPseudoElements,
    })

    return (
      <Root
        {...otherProps}
        ref={ref}
        className={mergedClassName}
        orientation={orientation}
        value={activeTab}
        onValueChange={handleChange}
      >
        <LazyMotionDomMax>{items ? <TabsConciseBody items={items} /> : children}</LazyMotionDomMax>
      </Root>
    )
  })
) as TabsType

Tabs.displayName = 'Tabs'

Tabs.TriggerList = TabsTriggerList
Tabs.Trigger = TabsTrigger
Tabs.ContentList = TabsContentList
Tabs.Content = TabsContent

export { Tabs }
