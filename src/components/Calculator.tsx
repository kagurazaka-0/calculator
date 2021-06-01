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

// TODO: Operatorをどこかに定義
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

const removeEndWithDot = (numberString: string): string => {
  return numberString.endsWith(".") ? numberString.replace(".", "") : numberString
}

export const Calculator: React.VFC = () => {
  const [input, setInput] = useState("0")
  const [maybeOperator, setMaybeOperator] = useState<Operator>()
  const [maybeResult, setMaybeResult] = useState<number>()
  const { firstNumber, setFirstNumber, execute } = useCalculator(maybeOperator)

  const isAfterClickedOperator = useMemo(() => maybeOperator && input === "0", [input, maybeOperator])
  const isC = useMemo(
    () => input !== "0" || maybeResult != null || !!maybeOperator,
    [input, maybeResult, maybeOperator]
  )

  const displayText = useMemo((): string => {
    if (maybeResult) {
      return String(maybeResult)
    }
    if (isAfterClickedOperator) {
      return String(firstNumber)
    }
    return input
  }, [maybeResult, input, isAfterClickedOperator, firstNumber])

  const onOperatorClick = useCallback<OnOperatorClick>(
    operator => {
      if (operator !== "=") {
        const n = maybeResult ? maybeResult : Number(removeEndWithDot(input))
        if (maybeResult) {
          setMaybeResult(undefined)
        }
        setFirstNumber(n)
        setMaybeOperator(operator)
        setInput("0")
        return
      }

      if (!maybeOperator) return
      setMaybeOperator(undefined)

      const n = Number(removeEndWithDot(input))
      const result = execute(n)
      setMaybeResult(result)
      setInput("0")
    },
    [input, maybeResult]
  )

  const onOtherClick = useCallback<OnOtherClick>(text => {
    setMaybeResult(undefined)
    switch (text) {
      case "AC": {
        setInput("0")
        return
      }
      case "C": {
        setInput("0")
        setMaybeOperator(undefined)
        setFirstNumber(0)
        return
      }
      case "+/-": {
        setInput(_it => {
          const it = removeEndWithDot(_it)
          if (it === "0") return it
          return togglePlusMinus(it)
        })
        return
      }
      case "%": {
        setInput(_it => {
          const it = removeEndWithDot(_it)
          return toDivide100(it)
        })
        return
      }
      case ".": {
        setInput(it => {
          if (it.includes(".")) return it
          return `${it}.`
        })
        return
      }
      default:
        throwInvalidStateError(text)
    }
  }, [])

  const onNumberClick = useCallback<OnNumberClick>(
    numberText => {
      if (maybeResult) {
        setMaybeResult(undefined)
      }
      if (input === "0") {
        if (numberText === "0") return
        setInput(numberText)
        return
      }
      setInput(it => `${it}${numberText}`)
    },
    [input, maybeResult]
  )

  const calculatorButtonsProps = { isC, onOperatorClick, onOtherClick, onNumberClick }

  return (
    <Container>
      <CalculatorDisplay operatorText={maybeOperator} text={displayText} />
      <CalculatorButtons {...calculatorButtonsProps} />
    </Container>
  )
}
