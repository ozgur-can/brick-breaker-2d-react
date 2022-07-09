import { useEffect, useState } from 'react'
import CSSVars from '../constants'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setMousePosition = (e) => {
      setPosition(
        {
          x: (e.clientX) / (window.innerWidth / (CSSVars.containerWidth - CSSVars.paddleWidth)),
          y: e.clientY,
        },
      )
    }
    window.addEventListener('mousemove', setMousePosition)

    return () => {
      window.removeEventListener('mousemove', setMousePosition)
    }
  }, [])

  return position
}

export default useMousePosition
