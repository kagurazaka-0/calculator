import React from "react"
import { Story, Meta } from "@storybook/react"

import { App } from "./App"

export default {
  title: "my/App",
  component: App,
} as Meta

export const Default: Story = () => <App />
