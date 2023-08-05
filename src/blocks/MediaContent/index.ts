import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const MediaContentBlock: Block = {
  slug: 'mediaContent',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/mediaContent.png',
  fields: [
    blockFields({
      name: 'mediaContentFields',
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'select',
              name: 'layout',
              label: 'Layout',
              required: false,
              defaultValue: 'threeColGrid',
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
              name: 'alignment',
              type: 'select',
              defaultValue: 'contentMedia',
              options: [
                { label: 'Content / Media', value: 'contentMedia' },
                { label: 'Media / Content', value: 'mediaContent' },
                { label: 'Centred w Large Media', value: 'centredMedia' },
              ],
              admin: {
                description: 'Choose how to align the content.',
                width: '50%',
              },
            },
            // {
            //   name: 'container',
            //   type: 'checkbox',
            //   admin: {
            //     description: 'Check this box to render this block with a background container.',
            //     width: '50%',
            //     style: {
            //       alignSelf: 'flex-end',
            //     },
            //   },
            // },
          ],
        },
        richText({ name: 'content', label: 'Content' }),
        // richText(),
        {
          name: 'enableLink',
          type: 'checkbox',
        },
        link({
          // appearances: false,
          appearances: ['primary', 'secondary', 'default'],

          overrides: {
            admin: {
              condition: (_, { enableLink }) => enableLink,
            },
          },
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    }),
  ],
}
