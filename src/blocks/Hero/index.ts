import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'
import richText from '../../fields/richText'
import lexicalRichText from '../../fields/LexicalRichTextField'

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
          name: 'textColor',
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

            { label: 'White', value: 'white' },
            { label: 'Off White', value: 'offwhite' },
            { label: 'Black', value: 'black' },
            { label: 'Thankly Dark Green', value: 'green' },
            { label: 'Thankly Light Green', value: 'lightgreen' },
            { label: 'Thankly Khaki', value: 'khaki' },
            { label: 'Thankly Light Brown', value: 'lightbrown' },
            { label: 'Thankly Lighter Brown', value: 'lighterbrown' },
          ],
        },

        lexicalRichText({ name: 'content', label: 'Content' }),
        linkGroup(),
      ],
    }),
  ],
}
