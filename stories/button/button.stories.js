import { createButton } from "./button";
import { withActions } from "@storybook/addon-actions/decorator";
import { expect, within, userEvent } from "@storybook/test";

export default {
  title: "Design System/Atoms/Button",
  component: createButton,
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.style.marign = "24px";
      decorator.appendChild(story());
      return decorator;
    },
    withActions,
  ],
  tags: ["autodocs"],
  actions: {
    handles: ["mouseover"],
  },
  parameters: {
    backgrounds: {
      default: "default",
      values: [
        { name: "blackfriday", value: "#000000" },
        { name: "default", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "text",
      },
    },
    style: {
      name: "style",
      options: ["filled", "outlined"],
      control: {
        type: "select",
      },
    },
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    onClick: {
      description: "Event",
      action: "clicked",
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));
  await expect(canvas.getByText("Button")).toBeTruthy();
}