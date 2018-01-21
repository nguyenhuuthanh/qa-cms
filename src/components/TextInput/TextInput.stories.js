import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./index";

storiesOf("TextInput", module).add("with label", () => (
  <TextInput value="" label="Simple text input" />
));
