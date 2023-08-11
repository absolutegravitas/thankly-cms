import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'

export const FeaturedContentBlock: Block = {
  slug: 'featuredContent',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/featuredPartners.png',
  fields: [
    blockFields({
      name: 'featuredContentFields',
      fields: [
        // layout options
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: false,
          defaultValue: 'threeColGrid',
          admin: {
            condition: (_, siblingData) => ['products', 'reviews'].includes(siblingData.type),
          },
          options: [
            { label: '3 Col Grid', value: 'threeColGrid' },
            { label: '2 Col Grid', value: 'twoColGrid' },
          ],
        },
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: false,
          defaultValue: 'threeColGrid',
          admin: {
            condition: (_, siblingData) => ['faqs'].includes(siblingData.type),
          },
          options: [
            { label: 'Centred Accordion', value: 'centredAccordion' },
            { label: 'Three Col Grid', value: 'threeColGrid' },
          ],
        },

        {
          name: 'type',
          type: 'select',
          defaultValue: 'products',
          hasMany: false,
          required: false,
          admin: { isClearable: true },
          options: [
            { label: 'Products', value: 'products' },
            { label: 'Reviews', value: 'reviews' },
            { label: 'Seen On', value: 'seenon' },
            { label: 'FAQs', value: 'faqs' },
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
        
        { name: 'useLeadingHeader', label: 'Use Leading Header', type: 'checkbox' },
        richText({
          name: 'leadingHeader',
          label: 'Leading Header',
          admin: {
            condition: (_, siblingData) => siblingData.useLeadingHeader,
          },
        }),

        {
          name: 'items',
          label: 'Items',

          type: 'relationship',
          relationTo: ['products', 'reviews', 'faqs'],
          hasMany: true,
          //   maxRows: 6,
          minRows: 3,
          required: false,
          admin: {
            condition: (_, siblingData) =>
              ['products', 'reviews', 'faqs'].includes(siblingData.type),
          },
        },

        {
          type: 'array',
          name: 'images',
          required: false,
          minRows: 4,
          maxRows: 6,
          fields: [
            {
              type: 'upload',
              name: 'image',
              relationTo: 'media',
              required: true,
            },
          ],
          admin: { condition: (_, siblingData) => siblingData.type === 'seenon' },
        },

        richText({ name: 'trailingNote', label: 'Trailing Note', required: false }),
      ],
    }),
  ],
}
