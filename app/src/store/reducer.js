import GameObject from '../models/GameObject'

const initialState = {
  refs: [],
  gameObjects: [],
  gameObjectsCount: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_GAME_OBJECT': {
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
