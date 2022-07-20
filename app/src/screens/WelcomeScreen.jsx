/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

const StartGameButton = styled.button`
  position: absolute;
  background-color: coral;
  color: white;
  font-weight: bold;
  font-size: 1em;
  width: 200px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`

const WelcomeText = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  letter-spacing: 1.25px
`

const InfoText = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  width: 80%;
`
const WelcomeScreen = ({ setStart }) => (
  <>
    <WelcomeText>2D Brick Breaker</WelcomeText>
    <StartGameButton onClick={(e) => {
      setStart(true)
      e.stopPropagation()
    }}
    >
      START GAME
    </StartGameButton>
    <InfoText>After start, move mouse pointer for paddle movement and click anywhere to push ball</InfoText>
  </>
)

export default WelcomeScreen
