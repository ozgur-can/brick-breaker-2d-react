import { collisionMap } from './App'
import CSSVars from './constants'
import { replaceCalc } from './helpers'
import { click } from './hooks/useStart'

const gameLoop = (ballRef) => {
  if (click.status) {
    ballRef.current.move()
  }

  const top = replaceCalc(ballRef.current.domRef.current.style.top)
  const left = replaceCalc(ballRef.current.domRef.current.style.left)

  if (top < 0) {
    ballRef.current.changeYDir()
  } else if (top >= CSSVars.containerHeight - CSSVars.ballHeight) {
    // game end
    click.status = false
    if (confirm('GAME OVER,\n\nSelect OK to Reload')) {
      window.location.reload()
      click.status = true
    }
  }

  if (left - CSSVars.ballHeight / 2 < 0) {
    ballRef.current.changeXDir()
  } else if (left >= CSSVars.containerWidth - CSSVars.ballHeight / 2) {
    ballRef.current.changeXDir()
  }

  if (collisionMap.isColliding) {
    switch (collisionMap.isColliding.side) {
      case 'D':
      case 'U':
        ballRef.current.changeYDir()
        break

      case 'L':
      case 'R':
        ballRef.current.changeXDir()
        break

      default:
        break
    }
  }
}

export default gameLoop
