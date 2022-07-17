import React, { useEffect, forwardRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import useMousePosition from '../hooks/useMousePosition'
import CSSVars from '../constants'

const Paddle = forwardRef(({ children }, ref) => {
  const { position, clickPosition, isClicked } = useMousePosition()

  const [styles, setStyles] = useSpring(() => ({
    from: { x: -100 },
  }))

  useEffect(() => {
    setStyles({
      x: position.x,
    })
  }, [position && position.x])
  return (
    <>
      <animated.div
        ref={ref}
        style={{
          position: 'relative',
          left: styles.x,
          top: `${CSSVars.containerHeight - CSSVars.paddleHeight}px`,
          width: CSSVars.paddleWidth,
          height: CSSVars.paddleHeight,
          backgroundColor: 'coral',
          borderRadius: 0,
        }}
      />
      {React.cloneElement(children, {
        styles, clickPosition, isClicked,
      })}
    </>
  )
})

export default Paddle
