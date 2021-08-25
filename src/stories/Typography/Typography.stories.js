import React from 'react';
import Typography from './Typography';

export default {
  title: 'Global/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const TypographyComponent = Template.bind({});
TypographyComponent.argTypes = {
  children: {
    name: 'Contenido',
    description: 'campo que define el contenido',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'Texto de Ejemplo',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Contenido' },
    },
  },
  variant: {
    name: 'imagen',
    description: 'campo que define tipo',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'h2',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Typography' },
    },
  },
};
