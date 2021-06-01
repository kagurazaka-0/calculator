import React from "react"
import { Story, Meta } from "@storybook/react"

import { CalculatorDisplay } from "./CalculatorDisplay"

export default {
  title: "my/CalculatorDisplay",
  component: CalculatorDisplay,
} as Meta

export const Default: Story = () => <CalculatorDisplay text="0.1" />
