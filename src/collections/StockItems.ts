import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'
import { Content } from '../blocks/Content'
import { MediaBlock } from '../blocks/Media'
import { slugField } from '../fields/slug'
import { populateArchiveBlock } from '../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../hooks/populatePublishedDate'

export const StockItemsFields: CollectionConfig['fields'] = [
  slugField(),
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
  {
    name: 'supplier',
    type: 'relationship',
    relationTo: 'suppliers',
    hasMany: false,
    // admin: {
    //   position: 'sidebar',
    // },
  },
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
    useAsTitle: 'name',
    defaultColumns: ['name','type','brand', '_status'],
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
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            width: '50%',
          },
        },
        
       
        {
          name: 'type', // required
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
            {
              label: 'Ribbon',
              value: 'ribbon',
            
            },
          ],
        },
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
          admin: {
            width: '50%',
            // position: 'sidebar',
          },
        },
        // {
        //   name: 'supplier',
        //   type: 'relationship',
        //   relationTo: 'suppliers',
        //   hasMany: false,
        //   admin: {
        //     width: '50%',
        //     // position: 'sidebar',
        //   },
        // },
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
        {
          name: 'totalQty',
          type: 'number',
          required: true,
          min: 1,
          defaultValue: 0,
        },
        {
          name: 'unitCost',
          type: 'number',
          min: 0,
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
