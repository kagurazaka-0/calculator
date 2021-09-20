import { Box } from "@chakra-ui/react"
import React from "react"

interface CalculatorDisplayProps {
  text: string
  operatorText?: string
}

export const CalculatorDisplay: React.VFC<CalculatorDisplayProps> = ({ text, operatorText }) => {
  return (
    <Box
      w="100%"
      px="24px"
      py="16px"
      fontSize="32px"
      color="white"
      bgColor="#474747"
      textAlign="right"
      borderBottom="1px solid black"
    >
      {operatorText && (
        <Box position="absolute" top="4px" left="8px" fontSize="20px" color="white">
          {operatorText}
        </Box>
      )}
      {text}
    </Box>
  )
}
