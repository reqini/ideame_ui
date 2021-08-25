import React from 'react';

import LoadingHotelsDetails from './LoadingHotelsDetails';

export default {
  title: 'Global/Loadings',
  component: LoadingHotelsDetails,
};

const Template = (args) => <LoadingHotelsDetails {...args} />;

export const LoadingHotelsDetailsComponent = Template.bind({});
LoadingHotelsDetailsComponent.argTypes = {
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
