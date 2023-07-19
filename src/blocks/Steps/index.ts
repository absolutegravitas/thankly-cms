import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import { Content } from '../Content'
import { HoverHighlights } from '../HoverHighlights'
import { StickyHighlights } from '../StickyHighlights'

export const Steps: Block = {
  slug: 'steps',
  imageURL:'https://d1qkl36l6oj3o3.cloudfront.net/Steps.png',
  labels: {
    singular: 'Steps Block',
    plural: 'Steps Blocks',
  },
  fields: [
    blockFields({
      name: 'stepsFields',
      fields: [
        {
          name: 'steps',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [ Content, HoverHighlights, StickyHighlights],
            },
          ],
        },
      ],
    }),
  ],
}
