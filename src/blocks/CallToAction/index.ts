import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import colorField from '../../fields/colorPicker/config'

export const CallToActionBlock: Block = {
  // https://tailwindui.com/components/marketing/sections/cta-sections#component-0763876148e2fa400b4f1cf13cdf0093
  // https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
  slug: 'cta',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/ctaBlock.png',
  labels: { singular: 'Call to Action', plural: 'Calls to Action' },
  fields: [
    blockFields({
      name: 'ctaFields',
      fields: [
        richText(),
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'simple',
          required: false,
          options: [
            // https://tailwindui.com/components/ecommerce/components/promo-sections#component-a63bf3a5e5430e5ba171ad153687d87d
            // fullwidth image tiles
            { label: 'Inset Image', value: 'insetImage' },
            // https://tailwindui.com/components/ecommerce/components/promo-sections#component-1148f0d6ac25e4cefffa045a48cb4142
            // fulwidth image tiles
            { label: 'Full Width Image', value: 'fullWidthImage' },
            // https://tailwindui.com/components/marketing/sections/cta-sections#component-211a2608506db0061bc968f07b98d61c
            // { label: 'Simple No Image', value: 'simple' },
          ],
        },
        colorField('backgroundColor', 'Background Color'),
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData.layout === 'fullWidthImage',
          },
        },
        linkGroup({ appearances: ['primary', 'secondary', 'default'] }),
      ],
    }),
  ],
}
