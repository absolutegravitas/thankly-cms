import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import linkGroup from '../../fields/linkGroup'
import livestreamFields from '../../fields/livestreamFields'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: 'https://d1qkl36l6oj3o3.cloudfront.net/heroBlock.png',
  fields: [
    blockFields({
      name: 'heroFields',
      fields: [
        {
          type: 'select',
          name: 'type',
          label: 'Type',
          required: true,
          defaultValue: 'default',
          options: [
            // centered with background image: https://tailwindui.com/components/ecommerce/page-examples/storefront-pages#component-04740945117f4ec46b10f866630a6347
            { label: 'Default', value: 'default', },
            // split with image on right https://tailwindui.com/components/marketing/sections/heroes#component-54294e7b86ddf5371565dbdfd133d79c
            { label: 'Content and Media', value: 'contentMedia', },
            // offset action buttons
            { label: 'Home', value: 'home', },
            { label: 'Livestream', value: 'livestream', }, // video background
          ],
        },
        livestreamFields,
        {
          name: 'richText',
          type: 'richText',
          admin: {
            elements: ['h1', largeBody, 'ul', label],
            leaves: ['underline'],
            condition: (_, { type }) => type !== 'livestream',
          },
        },
        {
          name: 'sidebarContent',
          type: 'richText',
          admin: {
            elements: ['link'],
            leaves: ['underline'],
            condition: (_, { type } = {}) => type === 'default',
          },
        },
        linkGroup({
          overrides: {
            admin: {
              condition: (_, { type } = {}) => ['contentMedia', 'default', 'livestream'].includes(type),
            },
          },
        }),
        linkGroup({
          // appearances: false,
          appearances: ['primary', 'secondary', 'default'], overrides: {
            name: 'actions',
            label: 'Sidebar Actions',
            maxRows: 3,
            admin: {
              condition: (_, { type }) => type === 'home',
            },
          },
        }),
        linkGroup({
          appearances: ['primary', 'secondary'],
          overrides: {
            name: 'buttons',
            label: 'Buttons',
            maxRows: 2,
            admin: {
              condition: (_, { type }) => type === 'home',
            },
          },
        }),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, { type } = {}) => ['contentMedia', 'home'].includes(type),
          },
        },
        // {
        // places big ass scrolling words -- not needed
        //   name: 'adjectives',
        //   type: 'array',
        //   minRows: 3,
        //   maxRows: 6,
        //   fields: [
        //     {
        //       name: 'adjective',
        //       type: 'text',
        //       required: true,
        //     },
        //   ],
        //   admin: {
        //     condition: (_, { type }) => type === 'home',
        //   },
        // },
      ],
    }),
  ],
}
