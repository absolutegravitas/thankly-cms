import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import richText from '../fields/richText'

const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'code',
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
    { name: 'question', type: 'text', required: true },
    richText({ name: 'answer', required: true }),
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      labels: { singular: 'Tag', plural: 'Tags' },
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
      required: true,
    },
  ],
}

export default Faqs
