import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import { ContentBlock } from '../Content'
import { HoverHighlightsBlock } from '../HoverHighlights'
import { StickyHighlightsBlock } from '../StickyHighlights'

export const StepsBlock: Block = {
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
              blocks: [ ContentBlock, StickyHighlightsBlock],
            },
          ],
        },
      ],
    }),
  ],
}
