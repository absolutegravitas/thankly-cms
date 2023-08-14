import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import lexicalRichText from '../../fields/LexicalRichTextField'

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
          admin: { description: 'Choose how to align the content.',},
        },
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
        lexicalRichText({name: 'content',label: 'Content',}),
        linkGroup({appearances: ['primary', 'secondary', 'default'],}),
      ],
    }),
  ],
}
