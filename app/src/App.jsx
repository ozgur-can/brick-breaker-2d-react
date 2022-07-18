import React from 'react'
import { Provider } from 'react-redux'
import useAnimationFrame from 'use-animation-frame'
import GameContainer from './containers/GameContainer'
import Paddle from './components/Paddle'
import Ball from './components/Ball'
import WelcomeScreen from './screens/WelcomeScreen'
import gameLoop from './gameLoop'
import store from './store'
import collisionMapFactory from './collision/data-models/collisionMapFactory'
import CollisionProvider from './collision/CollisionProvider'
import CSSVars from './constants'

export const collisionMap = collisionMapFactory()

function App() {
  const [isStarted, setStart] = React.useState(false)
  const ballRef = React.useRef()
  const paddleRef = React.useRef()

  useAnimationFrame(() => {
    gameLoop(ballRef)
  })

  return (
    <GameContainer>
      {isStarted ? (
        <WelcomeScreen setStart={setStart} />
      ) : (
        <Provider store={store}>
          <CollisionProvider>
            <Paddle
              itemId="paddle"
              ref={paddleRef}
              size={{ width: CSSVars.paddleWidth, height: CSSVars.paddleHeight }}
              initialPosition={{ x: -100, y: CSSVars.containerHeight - CSSVars.paddleHeight }}
            >
              <Ball
                itemId="ball"
                ref={ballRef}
                size={{ width: CSSVars.ballHeight, height: CSSVars.ballHeight }}
                initialPosition={{
                  x: CSSVars.paddleWidth / 2,
                  y: CSSVars.containerHeight - CSSVars.paddleHeight
                   - CSSVars.ballHeight - CSSVars.ballBorderSize,
                }}
              />
            </Paddle>
          </CollisionProvider>
        </Provider>
      )}
    </GameContainer>
  )
}

export default App
