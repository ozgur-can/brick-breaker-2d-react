import React from 'react'
import { animated } from '@react-spring/web'
import CSSVars from '../constants'
import { replaceCalc } from '../helpers'

const Ball = ({ styles, clickPosition, isClicked }) => {
  const ballRef = React.useRef()
  let interval = null

  React.useEffect(() => {
    if (isClicked) {
      interval = setInterval(() => {
        ballRef.current.style.top = `calc(${ballRef.current.style.top} + ${CSSVars.ballSpeed}px)`
        const ballTop = replaceCalc(ballRef.current.style.top)
        if (ballTop <= 0 || ballTop >= CSSVars.containerHeight - CSSVars.ballHeight
           - CSSVars.ballBorderSize) {
          CSSVars.ballSpeed *= -1
        }
      }, 10)
    }
    return () => clearInterval(interval)
  }, [clickPosition])

  return (
    <animated.div
      ref={ballRef}
      style={{
        position: 'absolute',
        transform: 'translate(-50%, 0%)',
        left: `${CSSVars.paddleWidth / 2}px`,
        top: `${CSSVars.containerHeight - CSSVars.paddleHeight - CSSVars.ballHeight - CSSVars.ballBorderSize}px`,
        width: CSSVars.ballHeight,
        height: CSSVars.ballHeight,
        backgroundColor: 'whitesmoke',
        borderRadius: '50%',
        border: `${CSSVars.ballBorderSize}px solid ${CSSVars.ballBorderColor}`,
        ...(isClicked ? { left: clickPosition + CSSVars.paddleWidth / 2 } : { ...styles }),
      }}
    />
  )
}

export default Ball
