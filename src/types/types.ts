import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { VariantProps } from 'class-variance-authority'
import { AnimationProps } from 'framer-motion'
import React from 'react'
import { RippleProps } from '../../ripple'
import { TabsContent } from '../components/tabs-content'
import { TabsContentList } from '../components/tabs-content-list'
import { TabsTrigger } from '../components/tabs-trigger'
import { TabsTriggerList } from '../components/tabs-trigger-list'
import { tabsVariants } from '../variants/tabs-variants'

type TabItem = {
  id: string | number
  trigger: string
  content?: React.ReactNode
  onClick?: () => void
}

type TabsClassNames = {
  root?: string
  triggerList?: string
  triggers?: string
  contentList?: string
  contents?: string
  cursor?: string
}

type TabsStore = {
  layoutId: string | undefined
  variant: VariantProps<typeof tabsVariants>['variant'] | undefined
  color: VariantProps<typeof tabsVariants>['color'] | undefined
  orientation: VariantProps<typeof tabsVariants>['orientation'] | undefined
  activeTab: string | undefined
  triggerListClassNameFromRoot: string | undefined
  triggersClassNameFromRoot: string | undefined
  contentListClassNameFromRoot: string | undefined
  contentsClassNameFromRoot: string | undefined
  cursorClassNameFromRoot: string | undefined
  cursorTransitonProps: AnimationProps['transition'] | undefined
  triggerRippleOptions: RippleProps | undefined
  disableCursorTransition: boolean | undefined
  disableTriggerRipple: boolean | undefined
  disableDefaultPseudoElements: boolean | undefined
  setActiveTab: (tab: string) => void
  initialize: (initialState: Omit<TabsStore, 'activeTab' | 'setActiveTab' | 'initialize'>) => void
}

type TabsCompoundComponents = {
  TriggerList: typeof TabsTriggerList
  Trigger: typeof TabsTrigger
  ContentList: typeof TabsContentList
  Content: typeof TabsContent
}

type TabsProps = React.ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof tabsVariants> & {
    items?: TabItem[]
    classNames?: TabsClassNames
    cursorTransitonProps?: AnimationProps['transition']
    triggerRippleOptions?: TabsStore['triggerRippleOptions']
    disableCursorTransition?: TabsStore['disableCursorTransition']
    disableTriggerRipple?: TabsStore['disableTriggerRipple']
    disableDefaultPseudoElements?: TabsStore['disableDefaultPseudoElements']
  }

type TabsType = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>
> & {
  TriggerList: typeof TabsTriggerList
  Trigger: typeof TabsTrigger
  ContentList: typeof TabsContentList
  Content: typeof TabsContent
}

type TabsRef = React.ElementRef<typeof Root>

type TabsTriggerListProps = React.ComponentPropsWithoutRef<typeof List>

type TabsTriggerListRef = React.ElementRef<typeof List>

type TabsTriggerRef = React.ElementRef<typeof Trigger>

type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof Trigger>

type TabsContentListProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

type TabsContentRef = React.ElementRef<typeof Content>

type TabsContentProps = React.ComponentPropsWithoutRef<typeof Content>

export type {
  TabItem,
  TabsClassNames,
  TabsCompoundComponents,
  TabsContentListProps,
  TabsContentProps,
  TabsContentRef,
  TabsProps,
  TabsRef,
  TabsStore,
  TabsTriggerListProps,
  TabsTriggerListRef,
  TabsTriggerProps,
  TabsTriggerRef,
  TabsType,
}
