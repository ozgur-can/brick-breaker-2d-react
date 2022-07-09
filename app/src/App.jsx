import React from 'react'
import GameContainer from './containers/GameContainer'
import Paddle from './components/Paddle'
import Ball from './components/Ball'
import WelcomeScreen from './screens/WelcomeScreen'

function App() {
  const [isStarted, setStart] = React.useState(false)
  return (
    <GameContainer>
      {isStarted ? <WelcomeScreen setStart={setStart} /> : (
        <Paddle>
          <Ball />
        </Paddle>
      )}
    </GameContainer>
  )
}

export default App
