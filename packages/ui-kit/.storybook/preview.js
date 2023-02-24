import React from "react";
import ResetCSS from "../src/ResetCSS";
import light from "../src/theme/light";
import dark from "../src/theme/dark";
import { withThemesProvider } from "themeprovider-storybook";

const globalDecorator = (StoryFn) => (
  <>
    <ResetCSS />
    <StoryFn />
  </>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const themes = [
  {
    name: "Light",
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: "Dark",
    backgroundColor: dark.colors.background,
    ...dark,
  },
];

export const decorators = [globalDecorator, withThemesProvider(themes)];
