import { RIPPLE_ANIMATION_END_DEFAULT_SCALE } from './constants'

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

const getRippleDuration = (rippleSize: number, durationMultiplier: number) => {
  return clamp(0.01 * rippleSize, 0.2, rippleSize > 100 ? 0.75 : 0.5) * durationMultiplier
}

const getRippleScale = (scaleMultiplier: number) => {
  return scaleMultiplier * RIPPLE_ANIMATION_END_DEFAULT_SCALE
}

export { getRippleDuration, getRippleScale }
