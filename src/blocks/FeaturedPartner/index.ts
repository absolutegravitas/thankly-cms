import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'

export const FeaturedPartnersBlock: Block = {
  slug: 'featuredPartners',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/featuredPartners.png',
  fields: [
    blockFields({
      name: 'featuredPartnersFields',
      fields: [
        { name: 'useLeadingHeader', label: 'Use Leading Header', type: 'checkbox' },
        richText({
          name: 'leadingHeader',
          label: 'Leading Header',
          admin: {
            condition: (_, siblingData) => siblingData.useLeadingHeader,
          },
        }),
        {
          type: 'array',
          name: 'imageSlides',
          required: true,
          minRows: 3,
          maxRows: 6,
          fields: [{ type: 'upload', name: 'image', relationTo: 'media', required: true }],
        },
        richText({ name: 'trailingNote', label: 'Trailing Note', required: false }),
      ],
    }),
  ],
}
