import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Main } from "./components/_Main"

export const App: React.VFC = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </React.StrictMode>
  )
}
