import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'
import richText from '../../fields/richText'

export const ProductComponentsBlock: Block = {
  // https://tailwindui.com/components/ecommerce/components/product-overviews#component-13a89c2dc50a31afd66541dc28fa3c13
  slug: 'productComponents',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'productComponentsFields',
      fields: [
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: true,
          defaultValue: 'twoColumns',
          options: [
            // bigimages https://tailwindui.com/components/ecommerce/components/product-features#component-05950fd10036c215016759b6abdd154e
            { label: '2-Col', value: 'twoColumns' },
            // 4-square https://tailwindui.com/components/ecommerce/components/product-features#component-4f0dd8497283578821e874e83a2de3a1
            { label: '4-Col', value: 'fourColumns' },
            // split images https://tailwindui.com/components/ecommerce/components/product-features#component-b0812584bac5ecc4394fec6afd7f3457
            { label: 'Image Left w 2 Col Qualities', value: 'imageLeft' },
            // tiered images https://tailwindui.com/components/ecommerce/components/product-features#component-c348959ea53204f2d87ccdabad56aef0
            { label: 'Tiered Image Right', value: 'imageRight' },
          ],
        },

        // common
        { name: 'useLeadingContent', label: 'Use Leading Header', type: 'checkbox' },
        richText({
          name: 'leadingContent',
          label: 'Leading Header',
          admin: { condition: (_, siblingData) => siblingData.useLeadingContent },
        }),

        // 2 col
        {
          name: 'features',
          type: 'array',
          minRows: 2,
          // maxRows: 4,
          admin: { condition: (_, siblingData) => ['twoColumns'].includes(siblingData.layout) },
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
            richText({ name: 'content' }),
          ],
        },

        // 4 col
        {
          name: 'features',
          type: 'array',
          minRows: 4,
          // maxRows: 4,
          admin: { condition: (_, siblingData) => ['fourColumns'].includes(siblingData.layout) },
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
            richText({ name: 'content' }),
          ],
        },

        // for image left
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: { condition: (_, siblingData) => ['imageLeft'].includes(siblingData.layout) },
        },
        {
          name: 'content',
          type: 'array',
          minRows: 4,
          // maxRows: 4,
          admin: { condition: (_, siblingData) => ['imageLeft'].includes(siblingData.layout) },
          fields: [richText({ name: 'content' })],
        },

        // for images right
        {
          name: 'features',
          type: 'array',
          minRows: 3,
          // maxRows: 4,
          admin: { condition: (_, siblingData) => ['imageRight'].includes(siblingData.layout) },
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
            richText({ name: 'content' }),
          ],
        },
      ],
    }),
  ],
}
