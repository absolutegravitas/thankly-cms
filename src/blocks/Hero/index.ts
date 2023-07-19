import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'


import linkGroup from '../../fields/linkGroup'
import livestreamFields from '../../fields/livestreamFields'
import label from '../../fields/richText/label'
import largeBody from '../../fields/richText/largeBody'

export const Hero: Block = {
  slug: 'hero',
  imageURL:'https://d1qkl36l6oj3o3.cloudfront.net/Hero.png',
  fields: [
    blockFields({
      name: 'bannerFields',
      fields: [
        {
          type: 'select',
          name: 'type',
          label: 'Type',
          required: true,
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Content and Media',
              value: 'contentMedia',
            },
            {
              label: 'Form',
              value: 'form',
            },
            {
              label: 'Home',
              value: 'home',
            },
            {
              label: 'Livestream',
              value: 'livestream',
            },
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
        {
          name: 'adjectives',
          type: 'array',
          minRows: 3,
          maxRows: 6,
          fields: [
            {
              name: 'adjective',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            condition: (_, { type }) => type === 'home',
          },
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          admin: {
            condition: (_, { type }) => type === 'form',
          },
        },
      ],
    }),
  ],
}
