/* eslint-disable max-len */
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { animated, useSpring } from '@react-spring/web'
import CSSVars from '../constants'

const Brick = forwardRef((props, ref) => {
  const domRef = useRef(null)

  const [anim, setAnim] = useSpring(() => ({
    from: { transform: 'scale(1)' },
    onRest: {
      transform: () => {
        domRef.current.style.display = 'none'
        domRef.current.style.visibility = 'hidden'
      },
    },
  }))

  useImperativeHandle(ref, () => ({
    get domRef() {
      return domRef
    },
    hide() {
      setAnim({ transform: 'scale(0)' })
    },
  }))

  return (
    <animated.div
      ref={domRef}
      style={{
        position: 'absolute',
        left: props.initialPosition.x,
        top: props.initialPosition.y,
        width: CSSVars.brickWidth,
        height: CSSVars.brickHeight,
        backgroundColor: 'darkslateblue',
        borderRadius: 0,
        transform: anim.transform,
      }}
    />
  )
})

export default Brick
