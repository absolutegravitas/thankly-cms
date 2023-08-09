import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'
import linkGroup from '../../fields/linkGroup'

export const BasicContentBlock: Block = {
  slug: 'content',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/contentBlock',
  fields: [
    blockFields({
      name: 'contentFields',
      fields: [
        { name: 'useLeadingHeader', label: 'Use Leading Header', type: 'checkbox' },
        richText({
          name: 'leadingHeader',
          label: 'Leading Header',
          admin: { condition: (_, siblingData) => siblingData.useLeadingHeader },
        }),
        colorField('bgColor', 'Section Background Color'),

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
          name: 'items',
          type: 'array',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: false },

            richText({ name: 'content' }),

            linkGroup({
              appearances: ['primary', 'secondary', 'default'],
            }),
          ],
        },

        // richText({ name: 'columnOne' }),
        // richText({
        //   name: 'columnTwo',
        //   admin: {
        //     condition: (_, siblingData) =>
        //       ['twoColumns', 'threeColumns'].includes(siblingData.layout),
        //   },
        // }),
        // richText({
        //   name: 'columnThree',
        //   admin: {
        //     condition: (_, siblingData) => ['threeColumns'].includes(siblingData.layout),
        //   },
        // }),
      ],
    }),
  ],
}
