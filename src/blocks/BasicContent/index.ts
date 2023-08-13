import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
// import richText from '../../fields/richText'
import linkGroup from '../../fields/linkGroup'
// import { lexicalRichTextField, YouTubeFeature, LinkFeature } from 'payload-plugin-lexical'
import lexicalRichText from '../../fields/LexicalRichTextField'

export const BasicContentBlock: Block = {
  slug: 'content',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/contentBlock',
  fields: [
    blockFields({
      name: 'contentFields',
      fields: [
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'oneColumn',
          options: [
            { label: 'One Column', value: 'oneColumn' },
            { label: 'Two Columns', value: 'twoColumns' },
            { label: 'Three Columns', value: 'threeColumns' },
            { label: 'Overlaid Images Three Columns', value: 'threeColumnsImage' },
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
          type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: false },
            lexicalRichText({
              name: 'content',
              label: 'Content',
            }),
            linkGroup({
              appearances: ['primary', 'secondary', 'default'],
            }),
          ],
        },
      ],
    }),
  ],
}
