import React from 'react'
import { useTabsStore } from '../store/tabs-store'
import { DEFAULT_TABS_MOTION_BUBBLE_TRANISTION } from '../constants/constants'
import { cn } from '@/lib/utils'
import { tabsCursorVariants } from '../variants/tabs-cursor-variants'

const useTabsCursorProps = () => {
  const layoutId = useTabsStore((store) => store.layoutId)
  const variant = useTabsStore((store) => store.variant)
  const orientation = useTabsStore((store) => store.orientation)
  const color = useTabsStore((store) => store.color)
  const cursorClassNameFromRoot = useTabsStore((store) => store.cursorClassNameFromRoot)
  const disableCursorTransition = useTabsStore((store) => store.disableCursorTransition)
  const cursorTransitonProps = useTabsStore((store) => store.cursorTransitonProps)

  const transtion = React.useMemo(
    () => (disableCursorTransition ? {} : { ...DEFAULT_TABS_MOTION_BUBBLE_TRANISTION, ...cursorTransitonProps }),
    [disableCursorTransition, cursorTransitonProps]
  )

  const mergedClassName = React.useMemo(
    () => cn(tabsCursorVariants({ variant, orientation, color }), cursorClassNameFromRoot),
    [variant, orientation, color, cursorClassNameFromRoot]
  )

  return { disableCursorTransition, layoutId, transtion, mergedClassName }
}

export { useTabsCursorProps }
