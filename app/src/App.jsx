import React from 'react'
import { Provider } from 'react-redux'
import GameContainer from './containers/GameContainer'
import WelcomeScreen from './screens/WelcomeScreen'
import store from './store'
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
        <Provider store={store}>
          <GameScreen />
        </Provider>
      )}
    </GameContainer>
  )
}

export default App
