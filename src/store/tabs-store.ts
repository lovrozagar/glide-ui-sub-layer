import { create } from 'zustand'
import { TabsStore } from '../types/types'

const useTabsStore = create<TabsStore>((set) => ({
  layoutId: undefined,
  variant: undefined,
  color: undefined,
  orientation: undefined,
  activeTab: undefined,
  triggerListClassNameFromRoot: undefined,
  triggersClassNameFromRoot: undefined,
  contentListClassNameFromRoot: undefined,
  contentsClassNameFromRoot: undefined,
  cursorClassNameFromRoot: undefined,
  cursorTransitonProps: undefined,
  triggerRippleOptions: undefined,
  disableCursorTransition: undefined,
  disableTriggerRipple: undefined,
  disableDefaultPseudoElements: undefined,
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  initialize: ({
    layoutId,
    variant,
    color,
    orientation,
    triggerListClassNameFromRoot,
    triggersClassNameFromRoot,
    contentListClassNameFromRoot,
    contentsClassNameFromRoot,
    cursorClassNameFromRoot,
    cursorTransitonProps,
    triggerRippleOptions,
    disableCursorTransition,
    disableTriggerRipple,
    disableDefaultPseudoElements,
  }) => {
    set({
      layoutId,
      variant,
      color,
      orientation,
      triggerListClassNameFromRoot,
      triggersClassNameFromRoot,
      contentListClassNameFromRoot,
      contentsClassNameFromRoot,
      cursorClassNameFromRoot,
      cursorTransitonProps,
      triggerRippleOptions,
      disableCursorTransition,
      disableTriggerRipple,
      disableDefaultPseudoElements,
    })
  },
}))

export { useTabsStore }
