import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import richText from '../fields/richText'
import lexicalRichText from '../fields/LexicalRichTextField'

const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'answer'],
    group: 'Website',
  },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'question', type: 'text', required: false },
    lexicalRichText({ name: 'answer', label: 'answer' }),
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'tags',
    //   type: 'array',
    //   label: 'Tags',
    //   labels: { singular: 'Tag', plural: 'Tags' },
    //   minRows: 1,
    //   fields: [{ name: 'name', type: 'text', required: false }],
    //   required: false,
    //   admin: { position: 'sidebar' },
    // },
  ],
}

export default Faqs
