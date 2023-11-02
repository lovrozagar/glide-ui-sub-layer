import React from 'react'
import { useTabsStore } from '../store/tabs-store'
import { cn } from '@/lib/utils'
import { tabsTriggerListVariants } from '../variants/tabs-trigger-list-variants'

const useTabsTriggerListProps = (className: string | undefined) => {
  const variant = useTabsStore((store) => store.variant)
  const orientation = useTabsStore((store) => store.orientation)
  const disableDefaultPseudoElements = useTabsStore((store) => store.disableDefaultPseudoElements)
  const triggerListClassNameFromRoot = useTabsStore((store) => store.triggerListClassNameFromRoot)

  const mergedClassName = React.useMemo(
    () =>
      cn(
        tabsTriggerListVariants({ variant, orientation, disableDefaultPseudoElements }),
        triggerListClassNameFromRoot,
        className
      ),
    [variant, orientation, disableDefaultPseudoElements, triggerListClassNameFromRoot, className]
  )

  return { mergedClassName }
}

export { useTabsTriggerListProps }
