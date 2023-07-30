import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CardGridBlock: Block = {
  slug: 'cardGrid',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/Card%20Grid.png',
  fields: [
    blockFields({
      name: 'cardGridFields',
      fields: [
        richText(),
        linkGroup({
          // appearances: false,
          appearances: ['primary', 'secondary', 'default'],

          overrides: {
            admin: {
              description: 'These links will be placed above the card grid as calls-to-action.',
            },
          },
        }),
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'grid',
          options: [
            // default payload square monochrome cards
            { label: 'Basic Grid (default 3 col)', value: 'grid', },
            // https://tailwindui.com/components/ecommerce/components/category-previews#component-fb276b5490d5ef7ebd8352e50043a5de
            { label: '2 col screen height images', value: '2col_full', },
            // https://tailwindui.com/components/ecommerce/components/category-previews#component-2ddbae849fc5ea4b75d75509101c14f5
            { label: '3 Col with description', value: '3col', },
            // https://tailwindui.com/components/ecommerce/components/product-features#component-05950fd10036c215016759b6abdd154e
            { label: '2 Col with description', value: '2col_normal', },

          ],
        },
        {
          name: 'cards',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true, },
            { name: 'description', type: 'textarea', },
            { name: 'enableLink', type: 'checkbox', },
            link({
              disableLabel: true,
              // appearances: false,
              appearances: ['primary', 'secondary', 'default'],

              overrides: {
                admin: {
                  condition: (_, { enableLink }) => enableLink,
                },
              },
            }),
          ],
        },
      ],
    }),
  ],
}
