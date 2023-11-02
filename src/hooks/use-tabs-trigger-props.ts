import { cn } from '@/lib/utils'
import React from 'react'
// import { buttonVariants } from '../../button'
import { tabsTriggerVariants } from '../variants/tabs-trigger-variants'
import { useTabsStore } from '../store/tabs-store'
import {
  DEFAULT_TABS_MOTION_BUBBLE_TRANISTION,
  MANDATROY_TABS_TRIGGER_CLASSNAMES,
  MILLISECONDS_IN_SECONDS,
} from '../constants/constants'

type UseTabsTriggerPropsProps = {
  value: string | undefined
  className: string | undefined
}

const useTabsTriggerProps = ({ value, className }: UseTabsTriggerPropsProps) => {
  const activeTab = useTabsStore((store) => store.activeTab)
  const variant = useTabsStore((store) => store.variant)
  const color = useTabsStore((store) => store.color)
  const triggersClassNameFromRoot = useTabsStore((store) => store.triggersClassNameFromRoot)
  const disableCursorTransition = useTabsStore((store) => store.disableCursorTransition)

  const isActiveTab = value === activeTab

  const textTranstionClassName = React.useMemo(() => {
    if (disableCursorTransition) {
      return '[transition:all_150ms,color_0ms]'
    }

    const textTransitionSpeed = DEFAULT_TABS_MOTION_BUBBLE_TRANISTION.duration
    const millisecondValue = Math.round(textTransitionSpeed * MILLISECONDS_IN_SECONDS)
    const millisecondValueString = millisecondValue.toString()

    return `[transition:all_150ms,color_${millisecondValueString}ms]`
  }, [disableCursorTransition])

  const mergedClassName = React.useMemo(
    () =>
      cn(
        'relative transition-all h-9 px-4 py-2 text-sm font-medium inline-flex items-center justify-center bg-primary text-primary-foreground',
        // buttonVariants({ defaultStyles: false, disableAllEffects: true, scaleOnActive: false }),
        tabsTriggerVariants({ isActive: isActiveTab, variant, color }),
        isActiveTab && textTranstionClassName,
        disableCursorTransition && 'transition-none',
        triggersClassNameFromRoot,
        className,
        MANDATROY_TABS_TRIGGER_CLASSNAMES
      ),
    [className, color, isActiveTab, disableCursorTransition, textTranstionClassName, triggersClassNameFromRoot, variant]
  )

  return { isActiveTab, mergedClassName, disableCursorTransition }
}

export { useTabsTriggerProps }
