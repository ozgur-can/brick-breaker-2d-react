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
              size={{ width: 150, height: 50 }}
              initialPosition={{ x: 160, y: 100 }}
            >
              <Ball
                itemId="ball"
                ref={ballRef}
                size={{ width: 20, height: 20 }}
                initialPosition={{ x: 10, y: 100 }}
              />
            </Paddle>
          </CollisionProvider>
        </Provider>
      )}
    </GameContainer>
  )
}

export default App
