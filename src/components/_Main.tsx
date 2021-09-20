import { Center } from "@chakra-ui/react"
import React from "react"

import { Calculator } from "./Calculator"

export const Main: React.VFC = () => {
  // const isIPhone = useMemo((): boolean => navigator.userAgent.includes("iPhone"), [])
  return (
    <Center bgColor="#313131">
      <Calculator />
    </Center>
  )
}
