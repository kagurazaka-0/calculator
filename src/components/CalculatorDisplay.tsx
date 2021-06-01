import React from "react"
import styled from "@emotion/styled"

const Display = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 16px;
  font-size: 32px;
  color: white;
  background-color: #474747;
  text-align: right;
  border-bottom: 1px solid black;
`

const ForOperatorText = styled.div`
  position: absolute;
  top: 4px;
  left: 8px;
  font-size: 20px;
  color: white;
`

interface CalculatorDisplayProps {
  text: string
  operatorText?: string
}

export const CalculatorDisplay: React.VFC<CalculatorDisplayProps> = ({ text, operatorText }) => {
  return (
    <Display>
      {operatorText && <ForOperatorText>{operatorText}</ForOperatorText>}
      {text}
    </Display>
  )
}
