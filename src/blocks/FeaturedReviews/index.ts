import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import lexicalRichText from '../../fields/LexicalRichTextField'

export const FeaturedReviewsBlock: Block = {
  slug: 'featuredReviews',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/featuredPartners.png',
  fields: [
    blockFields({
      name: 'featuredReviewsFields',
      fields: [
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: false,
          defaultValue: 'threeColumns',
          options: [
            { label: 'Single', value: 'single' },
            { label: 'Three Columns', value: 'threeColumns' },
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
          label: 'Leading & Trailing Content',
          type: 'collapsible',
          fields: [
            // dont add links to pages that contain the same block where this exists
            lexicalRichText({
              name: 'leadingContent',
              label: 'Leading Content',
            }),
            lexicalRichText({
              name: 'trailingContent',
              label: 'Trailing Content',
            }),
          ],
        },
        {
          name: 'items',
          label: 'Items',
          type: 'relationship',
          relationTo: ['reviews'],
          hasMany: true,
          minRows: 1,
          required: true,
        },
      ],
    }),
  ],
}
