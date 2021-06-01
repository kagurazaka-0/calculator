import React from "react"
import { Story, Meta } from "@storybook/react"

import { Main } from "./_Main"

export default {
  title: "my/Main",
  component: Main,
} as Meta

export const Default: Story = () => <Main />
