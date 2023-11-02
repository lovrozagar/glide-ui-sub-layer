'use client'

import React from 'react'
import { TabsTrigger } from './tabs-trigger'
import { TabsContent } from './tabs-content'
import { TabsTriggerList } from './tabs-trigger-list'
import { TabsContentList } from './tabs-content-list'
import { TabItem } from '../types/types'

type TabsConciseBodyProps = {
  items: TabItem[]
}

const TabsConciseBody = React.memo(({ items }: TabsConciseBodyProps) => {
  const { triggers, contents } = React.useMemo(() => {
    const triggersMemo: React.ReactNode[] = []
    const contentsMemo: React.ReactNode[] = []

    items?.forEach((item) => {
      const itemId = item.id.toString()

      triggersMemo.push(
        <TabsTrigger key={itemId} value={itemId} onClick={item?.onClick}>
          {item.trigger}
        </TabsTrigger>
      )

      contentsMemo.push(
        <TabsContent key={itemId} value={itemId}>
          {item.content}
        </TabsContent>
      )
    })

    return { triggers: triggersMemo, contents: contentsMemo }
  }, [items])

  return (
    <>
      <TabsTriggerList>{triggers}</TabsTriggerList>
      <TabsContentList>{contents}</TabsContentList>
    </>
  )
})

TabsConciseBody.displayName = 'TabsConciseBody'

export { TabsConciseBody }
