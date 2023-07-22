import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
// import { beforeProductChange } from './hooks/beforeChange'
import { regeneratePage } from '../../utilities/regeneratePage'
import { fullTitle } from '../../fields/fullTitle'
import { isAdmin } from '../../access/isAdmin'
import { randomUUID } from 'crypto'


export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderID',
    defaultColumns: ['orderID', 'status', 'slug', 'createdAt', 'updatedAt'],
    group: 'Shop'
  },
  // access: {
  //   read: admins,
  //   create: admins,
  //   update: admins,
  //   delete: admins,
  // },
  hooks: {
    // beforeChange: [beforeProductChange],
    // afterRead: [populateArchiveBlock],
    // afterDelete: [deleteProductFromCarts],
  },

  fields: [
    fullTitle,
    { name: 'customer', type: 'relationship', relationTo: 'users', hasMany: false, admin: { position: 'sidebar', } },
    { name: 'termsAccepted', type: 'checkbox', admin: { position: 'sidebar', } },
    { name: 'subtotalAmount', label: 'Subtotal', type: 'text', required: true, admin: { position: 'sidebar', } },
    { name: 'shippingAmount', label: 'plus Shipping', type: 'text', required: true, admin: { position: 'sidebar', } },
    { name: 'discountAmount', label: 'less Discounts', type: 'text', required: true, admin: { position: 'sidebar', } },
    { name: 'invoiceAmount', label: 'equals Invoice Amount', type: 'text', required: true, admin: { position: 'sidebar', } },
    { name: 'orderID', type: 'text', required: true, defaultValue: randomUUID },
    { name: 'notes', type: 'textarea', required: false, admin: { position: 'sidebar', } },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
      options: [
        { label: 'Pending', value: 'pending', },
        { label: 'Cancelled', value: 'cancelled', },
        { label: 'On Hold', value: 'onhold', },
        { label: 'Processing', value: 'processing', },
        { label: 'Completed', value: 'completed', },
      ],
    },
    {
      name: 'channel',
      type: 'select',
      defaultValue: 'web',
      hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
      options: [
        { label: 'Manual', value: 'manual', },
        { label: 'Web', value: 'web', },
        { label: 'Facebook', value: 'facebook', },
        { label: 'Instagram', value: 'instagram', },
        { label: 'Completed', value: 'completed', },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: "Items",
          fields: [
            { name: 'discount', type: 'relationship', relationTo: 'discounts', hasMany: true },
            {
              name: "product",
              label: ' ',
              type: "array",
              minRows: 1,
              fields: [
                {
                  name: 'status',
                  type: 'select',
                  defaultValue: 'processing',
                  hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
                  options: [
                    { label: 'processing', value: 'Processing', },
                    { label: 'shipped', value: 'Shipped', },
                    { label: 'delivered', value: 'Delivered', },
                    { label: 'cancelled', value: 'Cancelled', },
                  ],
                },
                {
                  name: 'thankly',
                  type: 'group', fields: [
                    { name: 'product', label: 'Products', type: 'relationship', relationTo: 'products', hasMany: true },
                    { name: 'stripePriceID', type: 'text', required: false }, // pull latest prices from Stripe
                  ]
                },
                {
                  name: 'message',
                  type: 'group', fields: [{
                    name: 'styles',
                    type: 'select',
                    defaultValue: 'normal',
                    hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
                    options: [
                      { label: 'Normal', value: 'normal', },
                      { label: 'Cursive', value: 'cursive', },
                      { label: 'Capitals', value: 'capitals', },
                    ],
                  },
                  { name: 'text', type: 'textarea', required: false },
                  ]
                },
                {
                  name: 'recipient',
                  type: 'group', fields: [
                    { name: 'name', type: 'text', required: false },
                    { name: 'business', type: 'text', required: false },
                    {
                      name: 'type',
                      type: 'select',
                      defaultValue: 'residential',
                      hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
                      options: [
                        { label: 'residential', value: 'Residential', },
                        { label: 'business', value: 'Business', },
                        { label: 'parcel-locker', value: 'Parcel Locker', },
                        { label: 'po-box', value: 'PO Box', },
                      ],
                    },
                    { name: 'fulladdress', label: 'Full Address', type: 'text', required: false },
                    { name: 'addressLine1', type: 'text', required: false },
                    { name: 'addressLine2', type: 'text', required: false },
                    { name: 'suburb', type: 'text', required: false },
                    { name: 'state', type: 'text', required: false },
                    { name: 'postcode', type: 'text', required: false },


                  ]
                },

              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: ({ data }) => {
                    return data?.product || '';
                  },
                },
              },
            },

          ]
        },
        {
          label: "Technical Info",
          fields: [
            { name: 'stripeInvoiceID', type: 'text', required: false },
            { name: 'stripePaymentIntentID', type: 'text', required: false },
            { name: 'events', type: 'json', required: false },]
        },

      ]
    },
  ]
}

export default Orders
