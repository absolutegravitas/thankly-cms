import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { Archive } from '../../blocks/Archive'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/Media'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { checkUserPurchases } from './access/checkUserPurchases'
import { beforeProductChange } from './hooks/beforeChange'
import { deleteProductFromCarts } from './hooks/deleteProductFromCarts'
import { ProductSelect } from './ui/ProductSelect'

export const ProductFields: CollectionConfig['fields'] = [
  slugField(),

  {
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
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
    type: 'row', // required
    fields: [
      {
        name: 'quantity',
        type: 'number',
        required: true,
      },
      {
        name: 'sku',
        label: 'SKU',
        type: 'text',
        required: true,
        // admin: {
        //   width: '50%',
        // },
      },
    
    ],
  },
  {
    name: "images", // required
    type: "array", // required
    label: "Images",
    minRows: 1,
    maxRows: 4,
    // interfaceName: "CardSlider", // optional
    labels: {
      singular: "Image",
      plural: "Images",
    },
    fields: [
      // required
      {
        name: "title",
        type: "text",
      },
      {
        name: "image",
        type: "upload",
        relationTo: "media",
        required: true,
      },
      {
        name: "alt",
        type: "text",
      },
    ],
    // admin: {
    //   components: {
    //     RowLabel: ({ data, index }) => {
    //       return data?.title || `Slide ${String(index).padStart(2, "0")}`;
    //     },
    //   },
    // },
  },
  {
    name: 'layout',
    type: 'blocks',
    required: true,
    blocks: [CallToAction, Content, MediaBlock, Archive],
  },
 
  // {
  //   name: 'stockItems',
  //   type: 'relationship',
  //   label: 'Component Stock Items',
  //   relationTo: 'stockItems',
  //   required: true,
  //   hasMany: true,
  //   admin: {
  //     position: 'sidebar',
  //   },
  // },
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

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'stripeProductID', '_status'],
    group: 'Shop'

  },
  hooks: {
    beforeChange: [populatePublishedDate, beforeProductChange],
    afterRead: [populateArchiveBlock],
    afterDelete: [deleteProductFromCarts],
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
  fields: ProductFields,
}

export default Products
