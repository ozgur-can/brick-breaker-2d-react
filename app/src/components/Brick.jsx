/* eslint-disable max-len */
import React, { forwardRef } from 'react'
import { animated } from '@react-spring/web'
import CSSVars from '../constants'

const Brick = forwardRef((props, ref) => (
  <animated.div
    ref={ref}
    style={{
      position: 'absolute',
      left: 200,
      top: 100,
      width: CSSVars.brickWidth,
      height: CSSVars.brickHeight,
      backgroundColor: 'darkslateblue',
      borderRadius: 0,
    }}
  />
))

export default Brick
