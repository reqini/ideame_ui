import React from 'react';

import MessageGeneric from './MessageGeneric';

export default {
  title: 'Global/Messages',
  component: MessageGeneric,
};

const Template = (args) => <MessageGeneric {...args} />;

export const MessageGenericComponent = Template.bind({});
MessageGenericComponent.argTypes = {
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
