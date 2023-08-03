import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'

export const FeaturedReviewsBlock: Block = {
  slug: 'featuredReviews',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/featuredReviews.png',
  labels: { singular: 'Featured Review', plural: 'Featured Reviews' },
  fields: [
    blockFields({
      name: 'reviewFields',
      fields: [
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: true,
          defaultValue: 'grid',
          options: [

            // https://tailwindui.com/components/marketing/sections/testimonials#component-aaf6f3d1eb2b456bed6e0fa9f48f42f1
            { label: 'Default (3col Grid)', value: 'default' },

            // // https://tailwindui.com/components/ecommerce/components/reviews#component-3d2bb70379ce64ab64f0b4e38866cf8a
            // { label: 'With Summary', value: 'withSummary' },

            // // https://tailwindui.com/components/marketing/sections/testimonials#component-1d4641d9b778e6e47e5cb664d4d8a683
            // { label: '3col Staggered Grid', value: '3colGrid' },

            // // for business https://tailwindui.com/components/marketing/sections/testimonials#component-54e74b5b1897b81f3537b3880df3811e
            // { label: '2col Business Testimonials', value: 'businessTestimonials' },
          ],
        },
        {
          name: 'useLeadingHeader',
          label: 'Use Leading Header',
          type: 'checkbox',
        },
        richText({
          name: 'leadingHeader',
          label: 'Leading Header',
          admin: {
            condition: (_, siblingData) => siblingData.useLeadingHeader,
          },
        }),
        // richText({ name: 'content' }),
        {
          name: 'items',
          label: 'Selected Reviews',
          hasMany: true,
          type: 'relationship',
          relationTo: 'reviews',
          required: false,
        },

        linkGroup({ appearances: ['primary', 'secondary', 'default'] }),
      ],
    }),
  ],
}
