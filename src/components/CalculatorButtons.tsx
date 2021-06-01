import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { CalculatorButton } from "./CalculatorButton"

const Container = styled.div`
  width: 320px;
  height: 280px;
  /*dev */
  background-color: #474747;

  display: grid;
  gap: 1px;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    "TOP    RIGHT"
    "BOTTOM RIGHT";
`

const WIDTH_HEIGHT_100_CSS = css`
  width: 100%;
  height: 100%;
`

const Top = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  grid-area: TOP;
  gap: 1px;
  display: flex;
`

const Right = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  grid-area: RIGHT;
  display: flex;
  gap: 1px;
  flex-direction: column;
`

const Bottom = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  grid-area: BOTTOM;
  gap: 1px;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  gap: 1px;
  display: flex;
`

export interface CalculatorButtonsProps {
  isC?: boolean
  onOperatorClick?: (operator: "÷" | "×" | "-" | "+" | "=") => void
  onOtherClick?: (text: "AC" | "C" | "+/-" | "%" | ".") => void
  onNumberClick?: (numberText: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") => void
}

export const CalculatorButtons: React.VFC<CalculatorButtonsProps> = props => {
  return (
    <Container>
      <Top>
        <CalculatorButton
          color="white"
          fontSize="20px"
          bgColor="#424446"
          text={props.isC ? "C" : "AC"}
          onClick={props.onOtherClick}
        />
        <CalculatorButton color="white" fontSize="20px" bgColor="#424446" text="+/-" onClick={props.onOtherClick} />
        <CalculatorButton color="white" fontSize="20px" bgColor="#424446" text="%" onClick={props.onOtherClick} />
      </Top>
      <Bottom>
        <Row>
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="7" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="8" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="9" onClick={props.onNumberClick} />
        </Row>
        <Row>
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="4" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="5" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="6" onClick={props.onNumberClick} />
        </Row>
        <Row>
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="1" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="2" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="3" onClick={props.onNumberClick} />
        </Row>
        <Row>
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="0" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="." onClick={props.onOtherClick} />
        </Row>
      </Bottom>
      <Right>
        <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="÷" onClick={props.onOperatorClick} />
        <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="×" onClick={props.onOperatorClick} />
        <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="-" onClick={props.onOperatorClick} />
        <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="+" onClick={props.onOperatorClick} />
        <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="=" onClick={props.onOperatorClick} />
      </Right>
    </Container>
  )
}
