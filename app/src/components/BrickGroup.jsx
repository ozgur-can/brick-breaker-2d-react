import React from 'react'
import shortid from 'shortid'
import CSSVars from '../constants'
import Brick from './Brick'

const BrickGroup = (count) => {
  const startX = CSSVars.brickWidth / 2
  const endX = CSSVars.containerWidth - startX
  const space = (((endX - startX - CSSVars.brickWidth) / (count - 1)))

  const initBricks = () => {
    const list = []
    for (let i = 0; i < count; i += 1) list.push(React.useRef())

    const bricks = []
    for (let j = 0; j < 4; j += 1) {
      list.forEach((item, t) => {
        bricks.push({
          id: shortid.generate(),
          ref: item,
          position: { x: (startX) + t * space, y: 100 + j * (CSSVars.brickHeight * 2) },
        })
      })
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
