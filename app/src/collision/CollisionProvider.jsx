/* eslint-disable max-len */
import React from 'react'
import { collisionMap } from '../App'
import CSSVars from '../constants'

function CollisionProvider({ children }) {
  React.useEffect(() => {
    // register childrens
    if (!children) return

    let childArr = []
    if (!Array.isArray(children)) {
      childArr = [children]
    } else childArr = children

    childArr.forEach((c) => {
      collisionMap.register({
        itemId: c.props.itemId,
        width: CSSVars.paddleWidth,
        height: CSSVars.paddleHeight,
        position: {
          x: -100,
          y: CSSVars.containerHeight - CSSVars.paddleHeight,
        },
      })
      // collisionMap.register({
      //   itemId: c.props.itemId,
      //   width: c.props.size.width,
      //   height: c.props.size.height,
      //   position: {
      //     x: c.props.initialPosition.x,
      //     y: c.props.initialPosition.y,
      //   },
      // })

      if (c.props.children.props) {
        collisionMap.register({
          itemId: c.props.children.props.itemId,
          width: CSSVars.ballHeight,
          height: CSSVars.ballHeight,
          position: {
            x: CSSVars.paddleWidth / 2,
            y: CSSVars.containerHeight + 0 - CSSVars.paddleHeight - CSSVars.ballHeight - CSSVars.ballBorderSize,
          },
        })
        // collisionMap.register({
        //   itemId: c.props.children.props.itemId,
        //   width: c.props.children.props.size.width,
        //   height: c.props.children.props.size.height,
        //   position: {
        //     x: c.props.children.props.initialPosition.x,
        //     y: c.props.children.props.initialPosition.y,
        //   },
        // })
      }
    })
    // return () => {}
  }, [])

  return <>{children}</>
}

export default CollisionProvider
