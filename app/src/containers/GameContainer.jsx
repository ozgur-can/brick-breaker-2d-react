import styled from 'styled-components'
import CSSVars from '../constants'

const GameContainer = styled.div`
  position: absolute;
  background: lightblue;
  width: ${CSSVars.containerWidth}px;
  height: ${CSSVars.containerHeight}px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default GameContainer
