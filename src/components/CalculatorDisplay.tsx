import React from "react"
import styled from "@emotion/styled"

const Display = styled.div`
  width: 100%;
  padding: 24px 16px;
  font-size: 32px;
  color: white;
  background-color: #474747;
  text-align: right;
  border-bottom: 1px solid black;
`

interface CalculatorDisplayProps {
  text: string
}

export const CalculatorDisplay: React.VFC<CalculatorDisplayProps> = ({ text }) => {
  return <Display>{text}</Display>
}
