import React from 'react';
import SimpleImage from './SimpleImage';

export default {
  title: 'Global/Images',
  component: SimpleImage,
};

const Template = (args) => <SimpleImage {...args} />;

export const SimpleImageComponent = Template.bind({});
SimpleImageComponent.argTypes = {
  image: {
    name: 'imagen',
    description: 'campo para cargar la imagen',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'https://s3.amazonaws.com/ideame-images/resizers/268919_686_387_undefined_undefined_projectImageOriginalUrl.jpeg',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Image' },
    },
  },
};
