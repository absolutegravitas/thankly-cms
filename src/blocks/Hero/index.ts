import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'
import richText from '../../fields/richText'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'heroFields',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        {
          name: 'bgColor',
          type: 'select',
          defaultValue: 'black',
          options: [
            // green: '#557755', // thankly green //colors.green,
            // lightgreen: '#749b4e', // thankly green //colors.green,
            // brown: '#985934', //  thankly brown
            // khaki: '#ddd1b9', // thankly khaki
            // lightbrown: '#c2c0ae',
            // lighterbrown: '#dfded9',
            // offwhite: '#E7ECEF', // thankly off-white / dusty gray

            { label: 'White', value: 'text-white' },
            { label: 'Off White', value: 'text-offwhite' },
            { label: 'Black', value: 'text-black' },
            { label: 'Thankly Dark Green', value: 'text-green' },
            { label: 'Thankly Light Green', value: 'text-lightgreen' },
            { label: 'Thankly Khaki', value: 'text-khaki' },
            { label: 'Thankly Light Brown', value: 'text-lightbrown' },
            { label: 'Thankly Lighter Brown', value: 'text-lighterbrown' },
          ],
        },

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
