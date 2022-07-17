import { Circle, System } from 'detect-collisions'
// import CollisionDetection from '../models/CollisionDetection'
import GameObject from '../models/GameObject'

const initialState = {
  refs: [],
  gameObjects: [],
  gameObjectsCount: 0,
  system: new System(),
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_GAME_OBJECT': {
      console.log(action)
      if (action.objectType === 'ball') {
        // const circle = new Circle({ x: 10, y: 100 }, 10)
      }
      // state.system.insert()
      return {
        ...state,
        // refs: state.refs.concat(action.ref),
        gameObjects: state.gameObjects.concat(new GameObject(action.item, action.objectType)),
        gameObjectsCount: state.gameObjectsCount + 1,
      }
    }

    case 'CHECK_COLLISIONS': {
      return {
        ...state,
      }
    }

    default:
      return initialState
  }
}
export default reducer
