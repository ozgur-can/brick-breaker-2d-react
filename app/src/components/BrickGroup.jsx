import React from 'react'
import shortid from 'shortid'
import CSSVars from '../constants'
import Brick from './Brick'

const BrickGroup = (count, row) => {
  const startX = CSSVars.brickWidth / 2
  const endX = CSSVars.containerWidth - startX
  const space = (((endX - startX - CSSVars.brickWidth) / (count - 1)))

  const initBricks = () => {
    const bricks = []
    for (let i = 0; i < row; i += 1) {
      for (let j = 0; j < count; j += 1) {
        bricks.push({
          id: shortid.generate(),
          ref: React.useRef(),
          position: { x: (startX) + j * space, y: 100 + i * (CSSVars.brickHeight * 2) },
        })
      }
    }

    return bricks
  }

  const bricks = initBricks()

  return bricks && bricks.map((item) => (
    <Brick
      key={item.id}
      itemId={item.id}
      ref={item.ref}
      size={{ width: CSSVars.brickWidth, height: CSSVars.brickHeight }}
      type="brick"
      initialPosition={{ x: item.position.x, y: item.position.y }}
    />
  ))
}

export default BrickGroup
