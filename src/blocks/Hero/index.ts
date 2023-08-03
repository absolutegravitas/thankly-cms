import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import livestreamFields from '../../fields/livestreamFields'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'heroFields',
      fields: [
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: true,
          defaultValue: 'default',
          options: [
            // centered with background image: https://tailwindui.com/components/ecommerce/page-examples/storefront-pages#component-04740945117f4ec46b10f866630a6347
            { label: 'Default', value: 'default' },
            // split with image on right https://tailwindui.com/components/marketing/sections/heroes#component-54294e7b86ddf5371565dbdfd133d79c
            { label: 'Image Right', value: 'imageRight' },
            // offset action buttons
            // { label: 'Home', value: 'home', },
            // { label: 'Livestream', value: 'livestream', }, // video background
          ],
        },
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
            // condition: (_, { type }) => type !== 'livestream',
          },
        },
        linkGroup(),
      ],
    }),
  ],
}
