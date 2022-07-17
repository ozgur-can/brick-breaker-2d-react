import React from 'react'
import { Provider } from 'react-redux'
import useAnimationFrame from 'use-animation-frame'
import GameContainer from './containers/GameContainer'
import Paddle from './components/Paddle'
import Ball from './components/Ball'
import WelcomeScreen from './screens/WelcomeScreen'
import gameLoop from './gameLoop'
import store from './store'

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
          <Paddle ref={paddleRef}>
            <Ball ref={ballRef} />
          </Paddle>
        </Provider>
      )}
    </GameContainer>
  )
}

export default App
