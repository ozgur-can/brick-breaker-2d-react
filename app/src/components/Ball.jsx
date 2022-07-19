/* eslint-disable max-len */
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { animated } from '@react-spring/web'
import CSSVars from '../constants'
import { collisionMap } from '../App'
import { replaceCalc } from '../helpers'

const Ball = forwardRef((props, ref) => {
  const domRef = useRef(null)
  useImperativeHandle(ref, () => ({
    get domRef() {
      return domRef
    },
    move() {
      domRef.current.style.top = `calc(${domRef.current.style.top} + ${CSSVars.ballSpeedY * 2}px)`
      domRef.current.style.left = `calc(${domRef.current.style.left} + ${CSSVars.ballSpeedX * 2}px)`
      const x = replaceCalc(domRef.current.style.left)
      const y = replaceCalc(domRef.current.style.top)
      collisionMap.updatePosition(props.itemId, { x, y })
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
        ...(props.isClicked ? { left: props.clickPosition + CSSVars.paddleWidth / 2 } : { ...props.styles }),
      }}
    />
  )
})

export default Ball
