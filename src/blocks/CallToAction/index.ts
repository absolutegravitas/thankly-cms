import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  imageURL:'https://d1qkl36l6oj3o3.cloudfront.net/Call%20To%20Action.png',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    blockFields({
      name: 'ctaFields',
      fields: [
        richText(),
        {
          name: 'feature',
          type: 'select',
          defaultValue: 'none',
          required: true,
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Create Payload App',
              value: 'cpa',
            },
          ],
        }, {
          name: 'layout',
          type: 'select',
          defaultValue: 'none',
          required: true,
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Create Payload App',
              value: 'cpa',
            },
          ],
        },
        linkGroup({
          appearances: ['primary', 'secondary','default'],
        }),
      ],
    }),
  ],
}
