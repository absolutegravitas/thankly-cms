import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'

export const FeaturedReviewsBlock: Block = {
  slug: 'featuredReviews',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/Call%20To%20Action.png',
  labels: { singular: 'Featured Review', plural: 'Featured Reviews', },
  fields: [
    blockFields({
      name: 'reviewFields',
      fields: [
        richText(),
        { name: 'items', label: 'Selected Reviews', hasMany: true, type: 'relationship', relationTo: 'reviews', required: false },

        linkGroup({ appearances: ['primary', 'secondary', 'default'], }),
      ],
    }),
  ],
}
