/* eslint-disable max-len */
import BaseGameObject from './BaseGameObject'

/**
* @private
*/
function collisionStrategy(circle, item) {
  let isColliding = null
  const itemCenter = {
    x: item.position.x + item.width / 2,
    y: item.position.y + item.height / 2,
  }

  const circleCenter = {
    x: circle.position.x + circle.width / 2,
    y: circle.position.y + circle.height / 2,
  }

  const diffX1 = itemCenter.x - circleCenter.x
  const diffX2 = circleCenter.x - itemCenter.x

  const diffY1 = itemCenter.y - circleCenter.y
  const diffY2 = circleCenter.y - itemCenter.y

  if (Math.abs(diffY1) < item.height / 2) {
    if ((Math.abs(diffX1) < (item.width + circle.width) / 2) && (diffX1 < diffX2)) {
      isColliding = { dir: 'R' }
    } else if ((Math.abs(diffX1) < (item.width + circle.width) / 2) && (diffX1 > diffX2)) {
      isColliding = { dir: 'L' }
    }
  } else if (diffY1 < diffY2 && (item.position.y + item.height > circle.position.y) && (Math.abs(diffX1) <= item.width / 2)) {
    isColliding = { dir: 'D' }
  } else if (diffY1 > diffY2 && (item.position.y < circle.position.y + circle.height) && (Math.abs(diffX1) <= item.width / 2)) {
    isColliding = { dir: 'U' }
  }

  return isColliding
}

export default class CircleGameObject extends BaseGameObject {
  constructor({
    width,
    height,
    position,
  }) {
    super({ width, height, position })
    this.collisionStrategy = collisionStrategy
  }
}
