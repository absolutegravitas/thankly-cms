import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'
import link from '../../fields/link'

export const CallToActionBlock: Block = {
  slug: 'cta',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/ctaBlock.png',
  labels: { singular: 'Call to Action', plural: 'Calls to Action' },
  fields: [
    blockFields({
      name: 'ctaFields',
      fields: [
        {
          name: 'layout',
          type: 'select',
          defaultValue: '2options',
          options: [
            // bottom section of https://tailwindui.com/components/ecommerce/page-examples/storefront-pages#component-087fa445e40f73cc5aa809b7ebac72f0
            // or
            // https://tailwindui.com/components/ecommerce/components/category-previews#component-fb276b5490d5ef7ebd8352e50043a5de

            { label: '2 Side-by-Side Options', value: '2options' },

            // https://tailwindui.com/components/marketing/sections/cta-sections#component-211a2608506db0061bc968f07b98d61c
            { label: 'Simple Centred', value: 'simpleCentred' },

            // https://tailwindui.com/components/marketing/sections/cta-sections#component-211a2608506db0061bc968f07b98d61c
            { label: 'Centred Image', value: 'centredImage' },
          ],
        },
        colorField('bgColor', 'Section Background Color'),

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

        {
          type: 'array',
          name: 'items',
          required: true,
          minRows: 1,
          maxRows: 2,
          admin: {
            condition: (_, siblingData) =>
              ['2options', 'centredImage', 'simpleCentred'].includes(siblingData.layout),
          },
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },

            richText({
              name: 'content',
              label: 'Content',
              required: true,
            }),

            linkGroup({
              appearances: ['primary', 'secondary', 'default'],
            }),
          ],
        },
      ],
    }),
  ],
}
