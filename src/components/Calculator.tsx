import styled from "@emotion/styled"
import React from "react"
import { CalculatorButtons } from "./CalculatorButtons"
import { CalculatorDisplay } from "./CalculatorDisplay"

const Container = styled.div`
  width: 320px;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0 0 7px 7px #7a7a7a;
  overflow: hidden;
`

export const Calculator: React.VFC = () => {
  return (
    <Container>
      <CalculatorDisplay text="0.1" />
      <CalculatorButtons />
    </Container>
  )
}
