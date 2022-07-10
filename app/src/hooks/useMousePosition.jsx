import { useEffect, useState } from 'react'
import CSSVars from '../constants'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clickPosition, setClickPosition] = useState(null)

  useEffect(() => {
    const setMousePosition = (e) => {
      setPosition(
        {
          x: (e.clientX) / (window.innerWidth / (CSSVars.containerWidth - CSSVars.paddleWidth)),
          y: e.clientY,
        },
      )
    }

    const setMouseClickPosition = (e) => {
      setClickPosition(
        (e.clientX) / (window.innerWidth / (CSSVars.containerWidth - CSSVars.paddleWidth)),
      )
    }
    window.addEventListener('mousemove', setMousePosition)
    window.addEventListener('click', setMouseClickPosition, { once: true })
    return () => {
      window.removeEventListener('mousemove', setMousePosition)
      window.removeEventListener('click', () => setClickPosition(0))
    }
  }, [])

  return { position, clickPosition, isClicked: !!clickPosition }
}

export default useMousePosition
