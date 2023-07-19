import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'
import { Content } from '../blocks/Content'
import { MediaBlock } from '../blocks/Media'
import { slugField } from '../fields/slug'
import { populateArchiveBlock } from '../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../hooks/populatePublishedDate'

export const StockItemsFields: CollectionConfig['fields'] = [
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
    type: 'tabs',
    tabs: [
      {
        label: 'Content',
        fields: [
          {
            name: 'layout',
            type: 'blocks',
            required: true,
            blocks: [Content, MediaBlock],
          },
        ],
      },
      {
        label: 'Product Details',
        fields: [

          {
            name: 'priceJSON',
            label: 'Price JSON',
            type: 'textarea',
            admin: {
              readOnly: true,
              hidden: true,
              rows: 10,
            },
          },

        ],
      },
    ],
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
  {
    name: 'skipSync',
    label: 'Skip Sync',
    type: 'checkbox',
    admin: {
      position: 'sidebar',
      readOnly: true,
      hidden: true,
    },
  },
]

const StockItems: CollectionConfig = {
  slug: 'stockItems',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'stripeProductID', '_status'],
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
        },
        {
          name: 'brand',
          type: 'text',
          required: true,
        },
        {
          name: 'type', // required
          type: 'select', // required
          hasMany: false,
          required: true,
          admin: {
            isClearable: true,
            // isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
          },
          options: [
            {
              label: 'Card',
              value: 'card',
            },
            {
              label: 'Gift',
              value: 'gift',
            },
            {
              label: 'Box',
              value: 'box',
            },
          ],
        },
        {
          name: 'totalQty',
          type: 'number',
          required: true,
          defaultValue: 0,
        },
        // {
        //   name: 'usedQty',
        //   type: 'number',
        //   required: false,
        //   defaultValue: 0,
        //   admin:{
        //     readOnly:true,
        //   },
        // },
        {
          name: 'sku',
          label: 'SKU',
          type: 'text',
          required: false,
          // admin: {
          //   width: '50%',
          // },
        },

      ],
    },



    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },


  ],
}

export default StockItems
