import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'

export const FeaturedProductsBlock: Block = {
  slug: 'featuredProducts',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/Call%20To%20Action.png',
  labels: { singular: 'Featured Product', plural: 'Featured Products', },
  fields: [
    blockFields({
      name: 'featuredProductFields',
      fields: [
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
        richText(),
        {
            name: 'layout',
            type: 'select',
            hasMany: false, required: true, admin: { width: '50%', isClearable: true, },
            options: [
                // https://tailwindui.com/components/ecommerce/components/category-previews#component-0bccd1058690fa6d03a79564f992f609
              { label: 'Image BG', value: 'imageBg', },
              // https://tailwindui.com/components/ecommerce/components/category-previews#component-37995021e5cdf0c643346920ff40b13b
              { label: '3 Columns', value: '3col', },
              // https://tailwindui.com/components/ecommerce/components/category-previews#component-1f407cdd33b17a2fc24966b27bea7890
              { label: 'Single Row Image w Overlay', value: 'imageOverlay', },
              // https://tailwindui.com/components/ecommerce/components/category-previews#component-fb276b5490d5ef7ebd8352e50043a5de
              { label: '2 Column Split Image Overlay', value: 'imageSplit', },

            ],
          },
        { name: 'items', label: 'Selected Products', hasMany: true, type: 'relationship', relationTo: 'products', required: false },

        linkGroup({ appearances: ['primary', 'secondary', 'default'], }),
      ],
    }),
  ],
}
