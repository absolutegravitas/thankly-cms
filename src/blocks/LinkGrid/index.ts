import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'

export const LinkGrid: Block = {
  slug: 'linkGrid',
  imageURL:'https://d1qkl36l6oj3o3.cloudfront.net/Link%20Grid.png',
  fields: [
    blockFields({
      name: 'linkGridFields',
      fields: [
        linkGroup({
              // appearances: false,
              appearances: ['primary', 'secondary', 'default'],
        }),
      ],
    }),
  ],
}
