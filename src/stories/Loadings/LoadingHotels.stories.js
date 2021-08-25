import React from 'react';

import LoadingHotels from './LoadingHotels';

export default {
  title: 'Global/Loadings',
  component: LoadingHotels,
};

const Template = (args) => <LoadingHotels {...args} />;

export const LoadingHotelsComponent = Template.bind({});
LoadingHotelsComponent.argTypes = {
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
