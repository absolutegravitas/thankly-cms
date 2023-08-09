import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'
import linkGroup from '../../fields/linkGroup'

export const MediaContentBlock: Block = {
  slug: 'mediaContent',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/mediaContent.png',
  fields: [
    blockFields({
      name: 'mediaContentFields',
      fields: [
        {
          name: 'layout',
          type: 'select',
          defaultValue: 'contentMedia',
          options: [
            { label: 'Content / Media', value: 'contentMedia' },
            { label: 'Media / Content', value: 'mediaContent' },
            { label: 'Centred w Large Media', value: 'centredMedia' },
          ],
          admin: { description: 'Choose how to align the content.', width: '50%' },
        },
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
        richText({ name: 'content', label: 'Content' }),
        // { name: 'enableLink', type: 'checkbox' },
        linkGroup({
          appearances: ['primary', 'secondary', 'default'],
          // overrides: { admin: { condition: (_, { enableLink }) => enableLink } },
        }),
        // link({
        //   appearances: ['primary', 'secondary', 'default'],
        //   overrides: { admin: { condition: (_, { enableLink }) => enableLink } },
        // }),
      ],
    }),
  ],
}
