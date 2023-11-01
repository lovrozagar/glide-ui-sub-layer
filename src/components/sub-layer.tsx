import { SUB_LAYER_BASE_STYLE } from '@/constants/constants'
import { SubLayerProps } from '@/types/types'
import React from 'react'

const SubLayer: React.FC<SubLayerProps> = ({ children, style, ...otherProps }) => {
  const [parentBorderRadius, setParentBorderRadius] = React.useState<string>('0px')
  const componentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const parentElement = componentRef.current?.parentElement
    if (!parentElement) return

    const borderRadius = getComputedStyle(parentElement).borderRadius
    if (borderRadius !== parentBorderRadius) {
      setParentBorderRadius(borderRadius)
    }
  }, [parentBorderRadius])

  const layerStyle = React.useMemo(
    () => ({
      borderRadius: parentBorderRadius,
      ...SUB_LAYER_BASE_STYLE,
      ...style,
    }),
    [parentBorderRadius, style]
  )

  return (
    <div {...otherProps} key={parentBorderRadius} ref={componentRef} style={layerStyle}>
      {children}
    </div>
  )
}

export { SubLayer }
