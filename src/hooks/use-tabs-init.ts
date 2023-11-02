import { cn } from '@/lib/utils'
import React from 'react'
import { useTabsStore } from '../store/tabs-store'
import { TabsProps, TabsStore } from '../types/types'
import { useUniqueId } from './use-id'
import { tabsVariants } from '../variants/tabs-variants'

type UseTabsInitProps = Pick<
  TabsStore,
  | 'variant'
  | 'color'
  | 'orientation'
  | 'cursorTransitonProps'
  | 'triggerRippleOptions'
  | 'disableCursorTransition'
  | 'disableTriggerRipple'
  | 'disableDefaultPseudoElements'
> & {
  defaultValue?: TabsStore['activeTab']
  value?: TabsStore['activeTab']
  onValueChange?: TabsStore['setActiveTab']
  className?: TabsProps['className']
  classNames: TabsProps['classNames']
}

const useTabsInit = (props: UseTabsInitProps) => {
  const {
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
  } = props

  console.log('aefaefa', orientation)

  const id = useUniqueId()

  const activeTab = useTabsStore((store) => store.activeTab)
  const setActiveTab = useTabsStore((store) => store.setActiveTab)
  const initialize = useTabsStore((store) => store.initialize)

  React.useEffect(() => {
    if (!defaultValue) return
    setActiveTab(defaultValue)
  }, [defaultValue, setActiveTab])

  React.useEffect(() => {
    initialize({
      layoutId: id,
      variant: variant,
      color: color,
      orientation: orientation,
      triggerListClassNameFromRoot: classNames?.triggerList,
      triggersClassNameFromRoot: classNames?.triggers,
      contentListClassNameFromRoot: classNames?.contentList,
      contentsClassNameFromRoot: classNames?.contents,
      cursorClassNameFromRoot: classNames?.cursor,
      cursorTransitonProps: cursorTransitonProps,
      triggerRippleOptions: triggerRippleOptions,
      disableCursorTransition: disableCursorTransition,
      disableTriggerRipple: disableTriggerRipple ?? true,
      disableDefaultPseudoElements: disableDefaultPseudoElements,
    })
  }, [
    id,
    variant,
    color,
    orientation,
    classNames?.triggerList,
    classNames?.triggers,
    classNames?.contentList,
    classNames?.contents,
    classNames?.cursor,
    cursorTransitonProps,
    disableCursorTransition,
    disableTriggerRipple,
    triggerRippleOptions,
    disableDefaultPseudoElements,
    initialize,
  ])

  const handleChange = React.useCallback(
    (tab: string) => {
      if (value !== undefined) {
        onValueChange?.(tab)
      } else {
        setActiveTab?.(tab)
      }
    },
    [value, setActiveTab, onValueChange]
  )

  const mergedClassName = React.useMemo(
    () => cn(tabsVariants({ orientation }), classNames?.root, className),
    [orientation, classNames?.root, className]
  )

  return { mergedClassName, activeTab, handleChange }
}

export { useTabsInit }
