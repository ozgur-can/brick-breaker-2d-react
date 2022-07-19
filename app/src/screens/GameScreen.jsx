import React from 'react'
import useAnimationFrame from 'use-animation-frame'
import CollisionProvider from '../collision/CollisionProvider'
import Ball from '../components/Ball'
import Brick from '../components/Brick'
import Paddle from '../components/Paddle'
import CSSVars from '../constants'
import gameLoop from '../gameLoop'

const GameScreen = () => {
  const brickRef = React.useRef()
  const ballRef = React.useRef()
  const paddleRef = React.useRef()

  useAnimationFrame(() => {
    if (ballRef && ballRef.current) {
      gameLoop(ballRef)
    }
  })

  return (
    <CollisionProvider>
      <Brick
        itemId="brick"
        ref={brickRef}
        size={{ width: CSSVars.brickWidth, height: CSSVars.brickHeight }}
        type="brick"
        initialPosition={{ x: 200, y: 100 }}
      />
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
