import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'
import payload from 'payload'

export const FeaturedContentBlock: Block = {
  slug: 'featuredContent',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/featuredPartners.png',
  fields: [
    blockFields({
      name: 'featuredContentFields',
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
          name: 'type',
          type: 'select',
          defaultValue: 'products',
          hasMany: false,
          required: false,
          admin: { isClearable: true },
          options: [
            { label: 'Products', value: 'products' },
            { label: 'Reviews', value: 'reviews' },
            { label: 'Seen On', value: 'seenon' },
            { label: 'FAQs', value: 'faqs' },
          ],
        },
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: false,
          defaultValue: 'grid',
          admin: {
            condition: (_, siblingData) => ['products', 'reviews'].includes(siblingData.type),
          },
          options: [
            { label: '3 Col Grid', value: 'threeColGrid' },
            { label: '2 Col Grid', value: 'twoColGrid' },
            // https://tailwindui.com/components/ecommerce/components/category-previews#component-fb276b5490d5ef7ebd8352e50043a5de
            { label: '2 Col Big', value: 'twoColBig' },
          ],
        },
        {
          type: 'select',
          name: 'layout',
          label: 'Layout',
          required: false,
          defaultValue: 'grid',
          admin: {
            condition: (_, siblingData) => ['faqs'].includes(siblingData.type),
          },
          options: [
            { label: 'Centered Accordion', value: 'centeredAccordion' },
            { label: 'Three Col Grid', value: 'threeColGrid' },
          ],
        },
        {
          name: 'items',
          label: 'Items',

          type: 'relationship',
          relationTo: ['products', 'reviews', 'faqs'],
          hasMany: true,
          //   maxRows: 6,
          minRows: 3,
          required: false,
          admin: {
            condition: (_, siblingData) =>
              ['products', 'reviews', 'faqs'].includes(siblingData.type),
          },
        },
        {
          type: 'array',
          name: 'images',
          required: false,
          minRows: 4,
          maxRows: 6,
          fields: [
            {
              type: 'upload',
              name: 'image',
              relationTo: 'media',
              required: true,
            },
          ],
          admin: { condition: (_, siblingData) => siblingData.type === 'seenon' },
        },

        richText({ name: 'trailingNote', label: 'Trailing Note', required: false }),
      ],
    }),
  ],
}
