import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'

export const PerksBlock: Block = {
  //   https://tailwindui.com/components/ecommerce/components/incentives#component-38742d005e7e8f48feb79dea72a0a8a5
  slug: 'perks',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'perksFields',
      fields: [
        {
          name: 'bgColor',
          label: 'Section Background Color',
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
        {
          name: 'items',
          type: 'array',
          minRows: 3,
          maxRows: 4,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              admin: {
                elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', largeBody, 'ul', label],
                leaves: ['underline'],
              },
            },
          ],
        },
      ],
    }),
  ],
}
