const lazyImportDomAnimation = async () => (await import('@/external/motion/dom-animation')).default

const lazyImportDomMax = async () => (await import('@/external/motion/dom-max')).default

export { lazyImportDomAnimation, lazyImportDomMax }
