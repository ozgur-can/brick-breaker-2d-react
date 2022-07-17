import CSSVars from './constants'
import { replaceCalc } from './helpers'

let click = false
window.addEventListener('click', () => {
  click = true
}, { once: true })

const gameLoop = (ballRef) => {
  if (click) {
    ballRef.current.move()
  }

  const top = replaceCalc(ballRef.current.domRef.current.style.top)
  const left = replaceCalc(ballRef.current.domRef.current.style.left)

  if (top < 0) {
    ballRef.current.changeYDir()
  } else if (top >= CSSVars.containerHeight - CSSVars.ballHeight) {
    // game end
    click = false
  }

  if (left - CSSVars.ballHeight / 2 < 0) {
    ballRef.current.changeXDir()
  } else if (left >= CSSVars.containerWidth - CSSVars.ballHeight / 2) {
    ballRef.current.changeXDir()
  }
}

export default gameLoop
