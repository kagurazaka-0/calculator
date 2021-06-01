import React from "react"

import { ThemeProvider } from "styled-components"
import { ChakraProvider } from "@chakra-ui/react"

import "normalize.css"
import "../src/assets/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme="default">
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    </ThemeProvider>
  ),
]
