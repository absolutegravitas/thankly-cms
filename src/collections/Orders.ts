import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'
// import { beforeProductChange } from './hooks/beforeChange'
import { regeneratePage } from '../utilities/regeneratePage'
import { fullTitle } from '../fields/fullTitle'
import { isAdmin } from '../access/isAdmin'
import { randomUUID } from 'crypto'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderID',
    defaultColumns: ['orderID', 'status', 'slug', 'createdAt', 'updatedAt'],
    group: 'Shop',
  },
  labels: { singular: 'Order', plural: 'Orders' },

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
    // SIDEBAR
    fullTitle,
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      hasMany: false,
      required: false,
      admin: { isClearable: true, position: 'sidebar' },
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'On Hold', value: 'onhold' },
        { label: 'Processing', value: 'processing' },
        { label: 'Completed', value: 'completed' },
      ],
    },
    { name: 'termsAccepted', type: 'checkbox', admin: { position: 'sidebar' } },
    {
      name: 'subtotalAmount',
      label: 'Subtotal',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'shippingAmount',
      label: 'plus Shipping',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'discountAmount',
      label: 'less Discounts',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'invoiceAmount',
      label: 'equals Invoice Amount',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    { name: 'orderID', type: 'text', required: true, defaultValue: randomUUID },
    { name: 'notes', type: 'textarea', required: false },
    { name: 'stripeInvoiceID', type: 'text', required: false, admin: { position: 'sidebar' } },
    {
      name: 'stripePaymentIntentID',
      type: 'text',
      required: false,
      admin: { position: 'sidebar' },
    },
    { name: 'events', type: 'json', required: false, admin: { position: 'sidebar' } },

    // LINE ITEMS
    {
      name: 'items',
      type: 'array',
      label: 'Order Items',
      labels: { singular: 'Order Item', plural: 'Order Items' },
      minRows: 1,
      fields: [
        // common line items
        {
          name: 'type',
          type: 'select',
          defaultValue: 'product',
          options: [
            { label: 'Product', value: 'product' },
            { label: 'Discount', value: 'discount' },
            { label: 'Other', value: 'other' },
          ],
        },

        // product line items
        {
          name: 'thankly',
          label: ' ',
          type: 'group',
          // interfaceName: 'productItem',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'product',
          },
          fields: [
            {
              name: 'status',
              type: 'select',
              defaultValue: 'processing',
              hasMany: false,
              required: false,
              admin: { width: '50%', isClearable: true },
              options: [
                { label: 'processing', value: 'Processing' },
                { label: 'shipped', value: 'Shipped' },
                { label: 'delivered', value: 'Delivered' },
                { label: 'cancelled', value: 'Cancelled' },
              ],
            },

            // PRODUCT
            {
              label: 'Thankly Product: ',
              type: 'collapsible',
              fields: [
                {
                  name: 'product',
                  label: 'Products',
                  type: 'relationship',
                  relationTo: 'products',
                  hasMany: true,
                },
                {
                  name: 'tracking',
                  label: 'Tracking',
                  type: 'group',
                  fields: [
                    { name: 'number', type: 'text', required: false },
                    { name: 'link', type: 'text', required: false },
                  ],
                },
                { name: 'stripePriceID', type: 'text', required: false },
              ],
            },

            // MESSAGE
            {
              label: 'Message',
              type: 'collapsible',
              fields: [
                {
                  name: 'message',
                  type: 'group',
                  fields: [
                    {
                      name: 'styles',
                      type: 'select',
                      defaultValue: 'normal',
                      hasMany: false,
                      required: false,
                      admin: { isClearable: true },
                      options: [
                        { label: 'Normal', value: 'normal' },
                        { label: 'Cursive', value: 'cursive' },
                        { label: 'Capitals', value: 'capitals' },
                      ],
                    },
                    { name: 'text', type: 'textarea', required: false },
                  ],
                },
              ],
            },

            // RECEIVER
            {
              label: ({ data }) =>
                'Receiver: ' +
                  (data?.receiver.name === '' ? '' : data?.receiver.name) +
                  (data?.receiver.business === '' ? '' : ' @ ' + data?.receiver.business) ||
                'Untitled',
              type: 'collapsible',
              fields: [
                {
                  name: 'receiver',
                  label: ' ',
                  type: 'group',
                  fields: [
                    { name: 'name', type: 'text', required: false },
                    { name: 'business', type: 'text', required: false },
                    {
                      name: 'type',
                      type: 'select',
                      defaultValue: 'residential',
                      hasMany: false,
                      required: false,
                      admin: { isClearable: true },
                      options: [
                        { label: 'residential', value: 'Residential' },
                        { label: 'business', value: 'Business' },
                        { label: 'pobox', value: 'PO Box / Locker' },
                      ],
                    },
                    { name: 'fulladdress', label: 'Full Address', type: 'text', required: false },
                    { name: 'addressLine1', type: 'text', required: false },
                    { name: 'addressLine2', type: 'text', required: false },
                    { name: 'suburb', type: 'text', required: false },
                    { name: 'state', type: 'text', required: false },
                    { name: 'postcode', type: 'text', required: false },
                  ],
                },
                {
                  name: 'requestedShipDate',
                  type: 'date',
                  required: false,
                  admin: {
                    width: '50%',
                    date: {
                      pickerAppearance: 'dayOnly',
                      displayFormat: 'd MMM yyy',
                    },
                  },
                },
                { name: 'requestedShipDate', type: 'date', required: false },
              ],
            },
          ],
        },

        // discount line items
        {
          name: 'discount',
          type: 'relationship',
          relationTo: 'discounts',
          hasMany: false,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'discount',
          },
        },
      ],
      required: true,
    },
  ],
}

export default Orders
