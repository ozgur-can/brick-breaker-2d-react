import React from 'react'
import { collisionMap } from '../App'

function CollisionProvider({ children }) {
  React.useEffect(() => {
    // register childrens
    if (!children) return

    let childArr = []
    if (!Array.isArray(children)) {
      childArr = [children]
    } else {
      childArr = children
    }

    childArr.forEach((c) => {
      if (Array.isArray(c)) {
        c.forEach((item) => {
          collisionMap.register({
            itemId: item.props.itemId,
            width: item.props.size.width,
            height: item.props.size.height,
            ref: item.ref ? item.ref : null,
            type: item.props.type,
            position: {
              x: item.props.initialPosition.x,
              y: item.props.initialPosition.y,
            },
          })
        })
      } else {
        if (c.props.size) {
          collisionMap.register({
            itemId: c.props.itemId,
            width: c.props.size.width,
            height: c.props.size.height,
            ref: c.ref ? c.ref : null,
            type: c.props.type,
            position: {
              x: c.props.initialPosition.x,
              y: c.props.initialPosition.y,
            },
          })
        }

        if (c.props.children && c.props.children.props) {
          collisionMap.register({
            itemId: c.props.children.props.itemId,
            width: c.props.children.props.size.width,
            height: c.props.children.props.size.height,
            ref: c.props.children.ref ? c.props.children.ref : null,
            type: c.props.children.props.type,
            position: {
              x: c.props.children.props.initialPosition.x,
              y: c.props.children.props.initialPosition.y,
            },
          })
        }
      }
    })
    // return () => {}
  }, [])

  return children
}

export default CollisionProvider
