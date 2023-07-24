import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Suppliers: CollectionConfig = {
  slug: 'suppliers',
  admin: {
    useAsTitle: 'title',
    group: 'Shop'

  },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'website',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'relationship',
          type: 'select',
          hasMany: false,
          required: true,
          admin: {
            width: '50%',
            isClearable: true,
            // isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
          },
          options: [
            {
              label: 'Positive',
              value: 'positive',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Negative',
              value: 'negative',
            },

          ],
        },
      ]
    },
    { name: 'comments', type: 'textarea', required: false, },

    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

  ],
}

export default Suppliers
