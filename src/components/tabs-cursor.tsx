'use client'

import { m } from 'framer-motion'
import { useTabsCursorProps } from '../hooks/use-tabs-cursor-props'

const TabsCursor = () => {
  const { disableCursorTransition, mergedClassName, transtion, layoutId } = useTabsCursorProps()

  return (
    <>
      {disableCursorTransition ? (
        <span className={mergedClassName} />
      ) : (
        <m.span className={mergedClassName} transition={transtion} layoutId={layoutId} layoutDependency={false} />
      )}
    </>
  )
}

TabsCursor.displayName = 'TabsCursor'

export { TabsCursor }
