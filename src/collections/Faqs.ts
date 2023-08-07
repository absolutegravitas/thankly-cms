import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import richText from '../fields/richText'

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
    richText({ name: 'answer', required: false }),
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
          required: false,
        },
      ],
      required: false,
    },
  ],
}

export default Faqs
