import RectangleGameObject from './RectangleGameObject'

export default function geometricObjectFactory(shape, ...args) {
  const shapeClasses = {
    rectangle: RectangleGameObject,
  }
  const shapeClass = shapeClasses[shape]

  if (shapeClass) {
    return new shapeClass(...args)
  }
  throw new Error(`Sorry, 'rectangle' is the only supported
      hitbox shape as of now.`)
}
