import type { Preview } from "@storybook/react";
import {
  DEFAULT_THEME,
  withTailwindTheme,
} from "./withTailwindTheme.decorator";

import '../src/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global Theme for Components",
    default_value: DEFAULT_THEME,
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      dynamicTitle: true,
    }
  }
}

export const decorators = [withTailwindTheme];