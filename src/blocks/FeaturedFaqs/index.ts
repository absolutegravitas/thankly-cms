import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'

export const FeaturedFaqsBlock: Block = {
  slug: 'featuredFaqs',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/featuredPartners.png',
  fields: [
    blockFields({
      name: 'featuredFaqsFields',
      fields: [
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: false,
          defaultValue: 'centredAccordion',
          options: [
            { label: 'Three Columns', value: 'threeColumn' },
            { label: 'Centred Accordion', value: 'centredAccordion' },
          ],
        },
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
          label: 'Items',
          type: 'relationship',
          relationTo: [ 'faqs'],
          hasMany: true,
          required: true,
        },
      ],
    }),
  ],
}
