'use client'

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import { getRippleDuration, getRippleScale } from './utils'
import { cn } from '@/lib/utils'
import { CSSProperties, useRef, useState } from 'react'
import {
  RIPPLE_ANIMATION_END_OPACITY,
  RIPPLE_ANIMATION_START_SCALE,
  RIPPLE_DEFAULT_DURATION_MULTIPLIER,
  RIPPLE_DEFAULT_OPACITY,
  RIPPLE_DEFAULT_SCALE_MULTIPLIER,
} from './constants'
import { useRipple } from './use-ripple'

type RippleHandler = 'onClick' | 'onMouseDown' | 'onPointerDown'

type RippleProps = {
  handlers?: RippleHandler[]
  // classes applied to the ripple span element, background color is ripple's color
  className?: string
  // styles applied to the style propery of ripple span element, useful for background color, border radius etc.
  style?: CSSProperties
  // ripple opacity
  opacity?: string | number
  // multiply default ripple duration
  durationMultiplier?: number
  // multiply default ripple scale
  scaleMultiplier?: number
  // fill full element size with ripple while holding
  fillOnHold?: boolean
}

const Ripple = (props: RippleProps) => {
  const {
    handlers,
    className,
    style,
    fillOnHold,
    opacity = RIPPLE_DEFAULT_OPACITY,
    durationMultiplier = RIPPLE_DEFAULT_DURATION_MULTIPLIER,
    scaleMultiplier = RIPPLE_DEFAULT_SCALE_MULTIPLIER,
  } = props
  const [rippleOnHoldId, setRippleOnHoldId] = useState<string | null>(null)
  const { ripples, addRipple, clearRipple } = useRipple()

  return (
    <div className="absolute left-0 top-0 h-full w-full" onClick={addRipple}>
      {ripples.map((ripple) => {
        const duration = getRippleDuration(ripple.size, durationMultiplier)
        const scale = getRippleScale(scaleMultiplier)

        return (
          <LazyMotion key={ripple.key} features={domAnimation}>
            <AnimatePresence mode="popLayout">
              <m.span
                className={cn('bg-current', className)}
                exit={{ opacity: RIPPLE_ANIMATION_END_OPACITY }}
                animate={{
                  transform: `scale(${scale})`,
                  opacity: RIPPLE_ANIMATION_END_OPACITY,
                }}
                initial={{ transform: `scale(${RIPPLE_ANIMATION_START_SCALE})`, opacity }}
                style={{
                  position: 'absolute',
                  borderRadius: '100%',
                  transformOrigin: 'center',
                  pointerEvents: 'none',
                  zIndex: '10',
                  top: ripple.y,
                  left: ripple.x,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  ...style,
                }}
                transition={{ duration }}
                onAnimationComplete={() => {
                  clearRipple(ripple.key)
                }}
              />
            </AnimatePresence>
          </LazyMotion>
        )
      })}
    </div>
  )
}

Ripple.displayName = 'Ripple'

export { Ripple }

export type { RippleProps }
