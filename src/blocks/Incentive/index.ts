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
