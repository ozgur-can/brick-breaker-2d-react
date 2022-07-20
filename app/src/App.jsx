import React from 'react'
import GameContainer from './containers/GameContainer'
import WelcomeScreen from './screens/WelcomeScreen'
import collisionMapFactory from './collision/data-models/collisionMapFactory'
import GameScreen from './screens/GameScreen'
import useStart from './hooks/useStart'

export const collisionMap = collisionMapFactory()

function App() {
  const [isStarted, setStart] = React.useState(false)
  useStart(isStarted)

  return (
    <GameContainer>
      {!isStarted ? <WelcomeScreen setStart={setStart} /> : (
        <GameScreen />
      )}
    </GameContainer>
  )
}

export default App
