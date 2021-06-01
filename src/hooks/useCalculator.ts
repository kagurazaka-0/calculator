import { Calc } from "calc-js"
import { useCallback, useState } from "react"

// NOTE: calc-jsのCalcのstaticメソッドと一致するので、`Calc[calcType](firstNumber, secondNumber)`のように関数呼び出しが可能
type CalcType = "sum" | "minus" | "divide" | "multiply"

export const useCalculator = () => {
  const [firstNumber, setFirstNumber] = useState(0)
  const [calcType, setCalcType] = useState<CalcType>()

  const execute = useCallback(
    (secondNumber: number) => {
      if (!calcType) {
        return
      }
      Calc[calcType](firstNumber, secondNumber)
    },
    [firstNumber, calcType]
  )
  return {
    firstNumber,
    setFirstNumber,
    calcType,
    setCalcType,
    execute,
  }
}
