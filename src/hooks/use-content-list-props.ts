import React from 'react'
import { useTabsStore } from '../store/tabs-store'
import { cn } from '@/lib/utils'

const useContentListProps = (className: string | undefined) => {
  const classNameFromRoot = useTabsStore((store) => store.contentListClassNameFromRoot)

  const mergedClassName = React.useMemo(() => cn(classNameFromRoot, className), [classNameFromRoot, className])

  return { mergedClassName }
}

export { useContentListProps }
