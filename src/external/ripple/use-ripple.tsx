'use client'

import React, { useCallback, useState } from 'react'

type RippleType = {
  key: React.Key
  x: number
  y: number
  size: number
}

const useRipple = () => {
  const [ripples, setRipples] = useState<RippleType[]>([])

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const trigger = event.currentTarget

    const size = Math.max(trigger.clientWidth, trigger.clientHeight)
    const rect = trigger.getBoundingClientRect()

    const rippleKey = crypto.randomUUID()

    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: rippleKey,
        size,
        x: event.clientX - rect.x - size / 2,
        y: event.clientY - rect.y - size / 2,
      },
    ])

    return rippleKey
  }, [])

  const clearRipple = useCallback((key: React.Key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key))
  }, [])

  return { ripples, addRipple, clearRipple }
}

type UseRippleReturn = ReturnType<typeof useRipple>

export { useRipple }

export type { RippleType, UseRippleReturn }
