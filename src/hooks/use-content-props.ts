import React from 'react'
import { useTabsStore } from '../store/tabs-store'
import { cn } from '@/lib/utils'
import { DEFAULT_CONTENT_CLASSNAME } from '../constants/constants'

const useContentProps = (className: string | undefined) => {
  const contentsClassNameFromRoot = useTabsStore((store) => store.contentsClassNameFromRoot)

  const mergedClassName = React.useMemo(
    () => cn(DEFAULT_CONTENT_CLASSNAME, contentsClassNameFromRoot, className),
    [contentsClassNameFromRoot, className]
  )

  return { mergedClassName }
}

export { useContentProps }
