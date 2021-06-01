import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"

type ChakraProps = Pick<ButtonProps, "color" | "fontSize" | "bgColor">
// NOTE: 以下のようにやるとChakraのpropsを全て引き継げるが、storybook(react-docgen-typescript)がクラッシュする...
// type ChakraProps = Omit<ButtonProps, "onClick" | "w" | "h" | "border">

interface CalculatorButtonProps<Word extends string> extends ChakraProps {
  text: Word
  onClick?: (operator: Word) => void
}

export const CalculatorButton = <Operator extends string>(props: CalculatorButtonProps<Operator>) => {
  const { text, onClick, ...chakraProps } = props
  return (
    <Button
      {...chakraProps}
      w="100%"
      h="100%"
      border="none"
      rounded={0}
      _focus={undefined}
      onClick={() => onClick?.(text)}
    >
      {text}
    </Button>
  )
}
