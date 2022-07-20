import React from 'react'
import useAnimationFrame from 'use-animation-frame'
import CollisionProvider from '../collision/CollisionProvider'
import Ball from '../components/Ball'
import Brick from '../components/Brick'
import BrickGroup from '../components/BrickGroup'
import Paddle from '../components/Paddle'
import CSSVars from '../constants'
import gameLoop from '../gameLoop'

const GameScreen = () => {
  const ballRef = React.useRef()
  const paddleRef = React.useRef()

  useAnimationFrame(() => {
    if (ballRef && ballRef.current) {
      gameLoop(ballRef)
    }
  })

  return (
    <CollisionProvider>
      {BrickGroup(7)}
      <Paddle
        itemId="paddle"
        ref={paddleRef}
        size={{ width: CSSVars.paddleWidth, height: CSSVars.paddleHeight }}
        type="paddle"
        initialPosition={{ x: -100, y: CSSVars.containerHeight - CSSVars.paddleHeight }}
      >
        <Ball
          itemId="ball"
          ref={ballRef}
          size={{ width: CSSVars.ballHeight, height: CSSVars.ballHeight }}
          type="ball"
          initialPosition={{
            x: CSSVars.paddleWidth / 2,
            y: CSSVars.containerHeight - CSSVars.paddleHeight
                   - CSSVars.ballHeight - CSSVars.ballBorderSize,
          }}
        />
      </Paddle>
    </CollisionProvider>
  )
}

export default GameScreen
