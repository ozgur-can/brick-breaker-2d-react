import shapeFactory from './geometric-objects/geometricObjectFactory'

export default class CollisionMap {
  constructor() {
    // Objects that may collide
    this.items = {}
    this.isColliding = false
  }

  /**
  * Register an item for collision detection.
  * @returns {Boolean}
  */
  register({
    itemId, width, height, position, shape = 'rectangle',
  }) {
    if (this.items[itemId]) {
      console.warn(`Item ${itemId} is already registered`)
      return false
    }
    const shapeModel = shapeFactory(shape, { width, height, position })
    this.items[itemId] = {
      itemId,
      shapeModel,
      subscribers: [],
    }
    this.checkCollisions(itemId)
    return true
  }

  notifyItemSubscribers(item, otherItem) {
    item.subscribers.forEach((callback) => callback(otherItem, item))
    otherItem.subscribers.forEach((callback) => callback(item, otherItem))
  }

  subscribe(itemId, callback) {
    if (this.items[itemId]) {
      this.items[itemId].subscribers.push(callback)
      return true
    }
    return false
  }

  /**
  * @returns {Number} How many collisions occurred
  */
  checkCollisions(itemId) {
    if (!this.items[itemId]) {
      console.warn(`Item ${itemId} isn't registered`)
      return 0
    }
    const item = this.items[itemId]

    for (const [otherItemId, otherItem] of Object.entries(this.items)) {
      if (itemId === otherItemId) {
        continue
      }
      const collision = item.shapeModel.collidesWith(otherItem.shapeModel)
      if (collision) {
        this.notifyItemSubscribers(item, otherItem)
        return collision
      }
    }
  }

  /**
  * @returns {Boolean} If position could be updated
  */
  updatePosition(itemId, { x, y }) {
    if (!this.items[itemId]) {
      console.warn(`Item ${itemId} isn't registered`)
      return false
    }

    this.items[itemId].shapeModel.updatePosition({ x, y })
    this.isColliding = this.checkCollisions(itemId)

    return true
  }
}
