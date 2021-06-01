import styled from "@emotion/styled"
import React from "react"
import { Calculator } from "./components/Calculator"
import { ChakraProvider } from "@chakra-ui/react"

// thanks! iPhoneのheight問題について→ https://zenn.dev/tak_dcxi/articles/2ac77656aa94c2cd40bf
const Container = styled.div<{ isIPhone?: boolean }>`
  width: 100vw;
  height: ${({ isIPhone }) => (isIPhone ? "-webkit-fill-available" : "100vh")};

  background-color: #313131;
  display: grid;
  place-items: center;
`

export const App: React.VFC = () => {
  return (
    <ChakraProvider>
      <Container>
        <Calculator />
      </Container>
    </ChakraProvider>
  )
}
