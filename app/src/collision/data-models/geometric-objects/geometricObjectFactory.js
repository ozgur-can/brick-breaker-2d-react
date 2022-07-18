import CircleGameObject from './CircleGameObject'

export default function geometricObjectFactory(shape, ...args) {
  const shapeClasses = {
    circle: CircleGameObject,
  }
  const shapeClass = shapeClasses[shape]

  if (shapeClass) {
    return new shapeClass(...args)
  }
  throw new Error(`Sorry, 'circle' is the only supported
      hitbox shape as of now.`)
}
