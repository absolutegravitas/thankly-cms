import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'
import label from '../../fields/richText/label'

export const ContentGridBlock: Block = {
  slug: 'contentGrid',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/Content%20Grid.png',
  //https://tailwindui.com/components/marketing/sections/feature-sections#component-58733237d8453d06f9d3e093404e2eba
  fields: [
    blockFields({
      name: 'contentGridFields',
      fields: [
        // {
        //   name: 'forceDarkBackground',
        //   type: 'checkbox',
        //   admin: {
        //     description: 'Check this box to force this block to have a dark background.',
        //   },
        // },
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
          name: 'layout',
          type: 'select',
          defaultValue: 'grid',
          options: [
            //https://tailwindui.com/components/marketing/sections/feature-sections#component-58733237d8453d06f9d3e093404e2eba
            { label: 'Grid (default 3 col)', value: 'grid' },
            // { label: 'FAQ', value: 'faq' },
            { label: 'Accordion 2 col (collapsible)', value: 'accordion2' },
          ],
        },
        {
          name: 'cells',
          type: 'array',
          fields: [
            {
              name: 'content',
              type: 'richText',
              required: true,
              admin: { elements: ['link', 'h4', 'h5', label, 'upload'] },
            },
          ],
        },
      ],
    }),
  ],
}
