import React from 'react'
import { animated } from '@react-spring/web'
import CSSVars from '../constants'

const Ball = () => (
  <animated.div
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, 0%)',
      top: `${-CSSVars.ballHeight - CSSVars.ballBorderSize * 2}px`,
      width: CSSVars.ballHeight,
      height: CSSVars.ballHeight,
      backgroundColor: 'whitesmoke',
      borderRadius: '50%',
      border: `${CSSVars.ballBorderSize}px solid ${CSSVars.ballBorderColor}`,
    }}
  />

)

export default Ball
