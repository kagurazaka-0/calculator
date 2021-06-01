import React from "react"
import { Story, Meta } from "@storybook/react"

import { CalculatorButtons } from "./CalculatorButtons"

export default {
  title: "my/CalculatorButtons",
  component: CalculatorButtons,
} as Meta

export const Default: Story = () => (
  <CalculatorButtons
    onOperatorClick={text => console.log({ text })}
    onNumberClick={number => console.log({ number })}
    onOtherClick={other => console.log({ other })}
  />
)
