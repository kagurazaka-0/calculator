import { Calc } from "calc-js"
import { useCallback, useMemo, useState } from "react"

// TODO: Operatorをどこかに定義
type Operator = "÷" | "×" | "-" | "+"

const CALC_TYPE_MAP: { [key in Operator]: CalcType } = {
  "+": "sum",
  "-": "minus",
  "×": "multiply",
  "÷": "divide",
}
// NOTE: calc-jsのCalcのstaticメソッドと一致するので、`Calc[calcType](firstNumber, secondNumber)`のように関数呼び出しが可能
type CalcType = "sum" | "minus" | "divide" | "multiply"

export const useCalculator = (maybeOperator: Operator | undefined) => {
  const [firstNumber, setFirstNumber] = useState(0)
  const calcType = useMemo(() => maybeOperator && CALC_TYPE_MAP[maybeOperator], [maybeOperator])

  const execute = useCallback(
    (secondNumber: number) => {
      if (!calcType) throw new Error(`calcType is undefined`)

      return Calc[calcType](firstNumber, secondNumber)
    },
    [firstNumber, calcType]
  )
  return {
    firstNumber,
    setFirstNumber,
    calcType,
    execute,
  }
}
