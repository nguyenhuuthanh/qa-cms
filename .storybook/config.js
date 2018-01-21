import "bulma";
import "./storybook.scss";
import { configure } from "@storybook/react";

function loadStories() {
  require("./extraStories");
}

configure(loadStories, module);
