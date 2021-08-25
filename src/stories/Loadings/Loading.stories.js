import React from 'react';
import Loading from './Loading';

export default {
  title: 'Global/Loadings',
  component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const LoadingComponent = Template.bind({});
LoadingComponent.argTypes = {
  /* textButton: {
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
  }, */
};
