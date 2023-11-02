import React from 'react'
import { getUniqueId } from '../utils/getUniqueId'

const useUniqueId = () => {
  const idRef = React.useRef(getUniqueId())

  return idRef.current
}

export { useUniqueId }
