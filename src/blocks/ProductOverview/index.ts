import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'
import richText from '../../fields/richText'
import lexicalRichText from '../../fields/LexicalRichTextField'

export const ProductOverviewBlock: Block = {
  // https://tailwindui.com/components/ecommerce/components/product-overviews#component-13a89c2dc50a31afd66541dc28fa3c13
  slug: 'productOverview',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'productOverviewFields',
      fields: [
        {
          name: 'images',
          type: 'array',
          minRows: 2,
          maxRows: 4,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },

        lexicalRichText({ name: 'content', label: 'Content' }),
      ],
    }),
  ],
}
