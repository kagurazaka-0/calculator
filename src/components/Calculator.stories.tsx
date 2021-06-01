import React from "react"
import { Story, Meta } from "@storybook/react"

import { Calculator } from "./Calculator"

export default {
  title: "my/Calculator",
  component: Calculator,
} as Meta

export const Default: Story = () => <Calculator />
