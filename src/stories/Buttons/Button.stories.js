import React from 'react';
import Button from './Button';

export default {
  title: 'Global/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.argTypes = {
  children: {
    name: 'texto en el botton',
    description: 'Agrega o cambia el texto del botton de accion',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'VER FOTOS',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
};
