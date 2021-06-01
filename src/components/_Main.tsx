import styled from "@emotion/styled"
import React, { useMemo } from "react"
import { Calculator } from "./Calculator"

// thanks! iPhoneのheight問題について→ https://zenn.dev/tak_dcxi/articles/2ac77656aa94c2cd40bf
const Container = styled.div<{ isIPhone?: boolean }>`
  width: 100vw;
  height: ${({ isIPhone }) => (isIPhone ? "-webkit-fill-available" : "100vh")};

  background-color: #313131;
  display: grid;
  place-items: center;
`

export const Main: React.VFC = () => {
  const isIPhone = useMemo((): boolean => navigator.userAgent.includes("iPhone"), [])
  return (
    <Container isIPhone={isIPhone}>
      <Calculator />
    </Container>
  )
}
