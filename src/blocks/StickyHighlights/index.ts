import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const StickyHighlights: Block = {
  slug: 'stickyHighlights',
  imageURL:'https://d1qkl36l6oj3o3.cloudfront.net/Sticky%20Highlights%20Fields.png',
  labels: {
    singular: 'Sticky Highlights Block',
    plural: 'Sticky Highlights Blocks',
  },
  fields: [
    blockFields({
      name: 'stickyHighlightsFields',
      fields: [
        {
          name: 'highlights',
          type: 'array',
          fields: [
            richText(),
            {
              name: 'enableLink',
              type: 'checkbox',
            },
            link({
              // appearances: false,
              appearances: ['primary', 'secondary', 'default'],
              overrides: {
                admin: {
                  condition: (_, { enableLink }) => Boolean(enableLink),
                },
              },
            }),
            {
              name: 'type',
              type: 'radio',
              options: [
                {
                  label: 'Code',
                  value: 'code',
                },
                {
                  label: 'Media',
                  value: 'media',
                },
              ],
            },
            {
              name: 'code',
              type: 'code',
              required: true,
              admin: {
                condition: (_, { type }) => type === 'code',
              },
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                condition: (_, { type }) => type === 'media',
              },
            },
          ],
        },
      ],
    }),
  ],
}
