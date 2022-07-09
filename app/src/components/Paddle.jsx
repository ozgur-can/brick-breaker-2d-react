import React, { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import useMousePosition from '../hooks/useMousePosition'
import CSSVars from '../constants'

const Paddle = () => {
  const position = useMousePosition()

  const [styles, setStyles] = useSpring(() => ({
    from: { x: -100, opacity: 1 },
  }))
  useEffect(() => {
    setStyles({
      x: position.x,
      opacity: 1,
    })
  }, [position && position.x])
  return (
    <animated.div
      style={{
        position: 'relative',
        top: `${CSSVars.containerHeight - CSSVars.paddleHeight}px`,
        width: CSSVars.paddleWidth,
        height: CSSVars.paddleHeight,
        backgroundColor: 'coral',
        borderRadius: 16,
        ...styles,
      }}
    />
  )
}

export default Paddle
