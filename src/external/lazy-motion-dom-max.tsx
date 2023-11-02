import { LazyMotion } from 'framer-motion'
import React from 'react'
import { lazyImportDomMax } from './motion/lazy-features'

type LazyMotionDomAnimationProsp = {
  children: React.ReactNode
}

const LazyMotionDomMax = ({ children }: LazyMotionDomAnimationProsp) => {
  return (
    <LazyMotion features={lazyImportDomMax} strict>
      {children}
    </LazyMotion>
  )
}

export { LazyMotionDomMax }
