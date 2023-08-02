import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { BlogContentBlock } from '../blocks/BlogContent'
import { BlogMarkdownBlock } from '../blocks/BlogMarkdown'
import { MediaBlock } from '../blocks/Media'
import richText from '../fields/richText'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { regeneratePage } from '../utilities/regeneratePage'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title', preview: doc => formatPreviewURL('posts', doc), group: 'Website' },
  versions: { drafts: true, },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [
      ({ req: { payload }, doc }) => {
        regeneratePage({
          payload,
          collection: 'posts',
          doc,
        })
      },
    ],
  },
  fields: [
    slugField(),

    { name: 'title', type: 'text', required: true, },
    { name: 'image', type: 'upload', relationTo: 'media', required: true, },
    richText({ name: 'excerpt', }),
    { name: 'content', type: 'blocks', blocks: [BlogContentBlock, BlogMarkdownBlock, MediaBlock], required: true, },
    { name: 'author', type: 'relationship', relationTo: 'users', required: false, admin: { position: 'sidebar', }, },
    { name: 'publishedOn', type: 'date', required: true, admin: { date: { pickerAppearance: 'dayAndTime', }, position: 'sidebar', }, },
  ],
}

export default Posts