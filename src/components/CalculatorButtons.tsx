import { Flex, SimpleGrid } from "@chakra-ui/react"
import React from "react"

import { CalculatorButton } from "./CalculatorButton"

export interface CalculatorButtonsProps {
  isC?: boolean
  onOperatorClick?: (operator: "÷" | "×" | "-" | "+" | "=") => void
  onOtherClick?: (text: "AC" | "C" | "+/-" | "%" | ".") => void
  onNumberClick?: (numberText: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") => void
}

export const CalculatorButtons: React.VFC<CalculatorButtonsProps> = (props) => {
  return (
    <SimpleGrid>
      <CalculatorButton
        color="white"
        fontSize="20px"
        bgColor="#424446"
        text={props.isC ? "C" : "AC"}
        onClick={props.onOtherClick}
      />
      <CalculatorButton color="white" fontSize="20px" bgColor="#424446" text="+/-" onClick={props.onOtherClick} />
      <CalculatorButton color="white" fontSize="20px" bgColor="#424446" text="%" onClick={props.onOtherClick} />
      <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="÷" onClick={props.onOperatorClick} />

      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="7" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="8" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="9" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="×" onClick={props.onOperatorClick} />

      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="4" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="5" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="6" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="-" onClick={props.onOperatorClick} />

      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="1" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="2" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="3" onClick={props.onNumberClick} />
      <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="+" onClick={props.onOperatorClick} />

      <Flex>
        <CalculatorButton
          flexGrow={2}
          color="white"
          fontSize="32px"
          bgColor="#7E7E7E"
          text="0"
          onClick={props.onNumberClick}
        />
        <CalculatorButton color="white" fontSize="32px" bgColor="#7E7E7E" text="." onClick={props.onOtherClick} />
        <CalculatorButton color="white" fontSize="28px" bgColor="#FE9F10" text="=" onClick={props.onOperatorClick} />
      </Flex>
    </SimpleGrid>
  )
}
