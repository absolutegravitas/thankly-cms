import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'heroFields',
      fields: [
        // {
        //   type: 'select',
        //   name: 'layout',
        //   label: 'Layout',
        //   required: true,
        //   defaultValue: 'default',
        //   options: [{ label: 'Default', value: 'default' }],
        // },
        // {
        //   name: 'textColor',
        //   type: 'select',
        //   required: true,
        //   defaultValue: 'dark',
        //   options: [
        //     { label: 'Dark', value: 'text-gray-900' },
        //     { label: 'White', value: 'text-white' },
        //   ],
        // },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        colorField('textColor', 'Text Color'),

        richText({
          name: 'content',
          type: 'richText',
          admin: {
            elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', largeBody, 'ul', label],
            leaves: ['underline', 'bold', 'italic', 'strikethrough'],
          },
        }),

        linkGroup(),
      ],
    }),
  ],
}
