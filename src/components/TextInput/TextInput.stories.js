import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from './index';

storiesOf('TextInput', module).add('with label', () => (
  <TextInput
    value=""
    label="Simple text input"
    onChange={action('on-change')}
  />
));
