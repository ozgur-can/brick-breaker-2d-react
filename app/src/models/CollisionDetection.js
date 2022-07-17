import { System } from 'detect-collisions'

class CollisionDetection {
  constructor() {
    this.physics = new System()
  }

  register(gameObjects) {
    this.gameObjects = gameObjects
  }
}

export default CollisionDetection
