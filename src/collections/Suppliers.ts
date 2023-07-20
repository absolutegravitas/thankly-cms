import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'
import { Content } from '../blocks/Content'
import { MediaBlock } from '../blocks/Media'
import { slugField } from '../fields/slug'
import { populateArchiveBlock } from '../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../hooks/populatePublishedDate'

export const SuppliersFields: CollectionConfig['fields'] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'publishedDate',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
  },
  
  {
    name: 'categories',
    type: 'relationship',
    relationTo: 'categories',
    hasMany: true,
    admin: {
      position: 'sidebar',
    },
  },
  slugField(),
  // {
  //   name: 'skipSync',
  //   label: 'Skip Sync',
  //   type: 'checkbox',
  //   admin: {
  //     position: 'sidebar',
  //     readOnly: true,
  //     hidden: true,
  //   },
  // },
]

const Suppliers: CollectionConfig = {
  slug: 'Suppliers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'website', '_status'],
    group: 'Shop'

  },
  hooks: {
    beforeChange: [populatePublishedDate,],
    afterRead: [populateArchiveBlock],
    afterDelete: [],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },

  fields: [
    slugField(),

    {
      type: 'row', // required
      fields: [
        {
          name: 'name',
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
          name: 'relationship', // required
          type: 'select', // required
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


        // {
        //   name: 'brand',
        //   type: 'relationship',
        //   relationTo: 'brands',
        //   hasMany: true,
        //   admin: {
        //     width: '50%',
        //     // position: 'sidebar',
        //   },
        // },

      ],
    },



    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },


  ],
}

export default Suppliers
