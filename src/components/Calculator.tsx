import styled from "@emotion/styled"
import { Calc } from "calc-js"
import React, { useCallback, useMemo, useState } from "react"
import { useCalculator } from "../hooks/useCalculator"
import { throwInvalidStateError } from "../utils"
import { CalculatorButtons, CalculatorButtonsProps } from "./CalculatorButtons"
import { CalculatorDisplay } from "./CalculatorDisplay"

const Container = styled.div`
  width: 320px;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0 0 7px 7px #7a7a7a;
  overflow: hidden;
  user-select: none;
`

type Operator = "÷" | "×" | "-" | "+"

type OnOperatorClick = NonNullable<CalculatorButtonsProps["onOperatorClick"]>
type OnOtherClick = NonNullable<CalculatorButtonsProps["onOtherClick"]>
type OnNumberClick = NonNullable<CalculatorButtonsProps["onNumberClick"]>

const togglePlusMinus = (numberString: string): string => {
  if (numberString.startsWith("-")) {
    return numberString.substring(1)
  } else {
    return `-${numberString}`
  }
}

const toDivide100 = (numberString: string): string => {
  const n = Number(numberString)
  const result = Calc.divide(n, 100)
  return String(result)
}

export const Calculator: React.VFC = () => {
  const { firstNumber, setFirstNumber, calcType, setCalcType, execute } = useCalculator()
  const [input, setInput] = useState("0")
  // const [isAfterClickedOperator, setIsAfterClickedOperator] = useState(false)
  const [maybeOperator, setMaybeOperator] = useState<Operator>()
  // const l = useMemo((): boolean => {
  //   if (maybeOperator) {
  //     return true
  //   }
  //   return false
  // }, [])

  const onOperatorClick = useCallback<OnOperatorClick>(operator => {
    if (operator === "=") {
      // TODO: firstの時は何もしない
      return
    }
  }, [])
  const onOtherClick = useCallback<OnOtherClick>(
    text => {
      switch (text) {
        case "AC": {
          setInput("0")
          setMaybeOperator(undefined)
          return
        }
        case "C": {
          return
        }
        case "+/-": {
          setInput(_it => {
            const it = _it.endsWith(".") ? _it.replace(".", "") : _it
            return togglePlusMinus(it)
          })
          return
        }
        case "%": {
          setInput(_it => {
            const it = _it.endsWith(".") ? _it.replace(".", "") : _it
            return toDivide100(it)
          })
          return
        }
        case ".": {
          setInput(it => {
            if (it.includes(".")) {
              return it
            }
            return `${it}.`
          })
          return
        }
        default:
          throwInvalidStateError(text)
      }
    },
    [input, maybeOperator]
  )
  const onNumberClick = useCallback<OnNumberClick>(
    numberText => {
      if (input === "0") {
        if (numberText === "0") {
          return
        }
        setInput(numberText)
        return
      }
      setInput(it => `${it}${numberText}`)
    },
    [input]
  )

  const calculatorButtonsProps = { onOperatorClick, onOtherClick, onNumberClick }

  return (
    <Container>
      <CalculatorDisplay text={input} />
      <CalculatorButtons {...calculatorButtonsProps} />
    </Container>
  )
}
