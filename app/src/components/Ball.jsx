import React from 'react'
import { animated } from '@react-spring/web'
import CSSVars from '../constants'

const Ball = React.forwardRef(({ styles, clickPosition, isClicked }, ref) => {
  const domRef = React.useRef(null)
  React.useImperativeHandle(ref, () => ({
    get domRef() {
      return domRef
    },
    move() {
      domRef.current.style.top = `calc(${domRef.current.style.top} + ${CSSVars.ballSpeedY}px)`
      domRef.current.style.left = `calc(${domRef.current.style.left} + ${CSSVars.ballSpeedX}px)`
    },
    changeYDir() {
      CSSVars.ballSpeedY *= -1
    },
    changeXDir() {
      CSSVars.ballSpeedX *= -1
    },
  }))

  return (
    <animated.div
      ref={domRef}
      style={{
        position: 'absolute',
        transform: 'translate(-50%, 0%)',
        left: `${CSSVars.paddleWidth / 2}px`,
        top: `${CSSVars.containerHeight + 0 - CSSVars.paddleHeight - CSSVars.ballHeight - CSSVars.ballBorderSize}px`,
        width: CSSVars.ballHeight,
        height: CSSVars.ballHeight,
        backgroundColor: 'whitesmoke',
        borderRadius: '50%',
        border: `${CSSVars.ballBorderSize}px solid ${CSSVars.ballBorderColor}`,
        // ...styles,
        ...(isClicked ? { left: clickPosition + CSSVars.paddleWidth / 2 } : { ...styles }),
      }}
    />
  )
})

export default Ball
