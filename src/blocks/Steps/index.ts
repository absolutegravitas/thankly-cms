import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
// import richText from '../../fields/richText'
import linkGroup from '../../fields/linkGroup'
// import { lexicalRichTextField, YouTubeFeature, LinkFeature } from 'payload-plugin-lexical'
import lexicalRichText from '../../fields/LexicalRichTextField'
import colorField from '../../fields/colorPicker/config'
import richText from '../../fields/richText'

export const StepsBlock: Block = {
  slug: 'steps',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/contentBlock',
  fields: [
    blockFields({
      name: 'stepsFields',
      fields: [
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'horizontal',
          options: [
            { label: 'Horizontal', value: 'horizontal' },
            // { label: 'Two Columns', value: 'twoColumns' },
          ],
        },
        colorField('bgColor', 'Background Color'),

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
            // linkGroup({
            //   appearances: ['primary', 'secondary', 'default'],
            // }),
          ],
        },
      ],
    }),
  ],
}
