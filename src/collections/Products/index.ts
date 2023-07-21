import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { Banner } from '../../blocks/Banner'
import { beforeProductChange } from './hooks/beforeChange'
import { CallToAction } from '../../blocks/CallToAction'
import { CardGrid } from '../../blocks/CardGrid'
import { Content } from '../../blocks/Content'
import { ContentGrid } from '../../blocks/ContentGrid'
import { deleteProductFromCarts } from './hooks/deleteProductFromCarts'
import { HoverHighlights } from '../../blocks/HoverHighlights'
import { LinkGrid } from '../../blocks/LinkGrid'
import { MediaBlock } from '../../blocks/Media'
import { MediaContent } from '../../blocks/MediaContent'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { Pricing } from '../../blocks/Pricing'
import { ReusableContent } from '../../blocks/ReusableContent'
import { Slider } from '../../blocks/Slider'
import { slugField } from '../../fields/slug'
import { Steps } from '../../blocks/Steps'
import { StickyHighlights } from '../../blocks/StickyHighlights'
import { Hero } from '../../blocks/Hero'
import { formatPreviewURL } from '../../utilities/formatPreviewURL'
import { regeneratePage } from '../../utilities/regeneratePage'
import { fullTitle } from '../../fields/fullTitle'
import { isAdmin } from '../../access/isAdmin'
import { publishedOnly } from '../../access/publishedOnly'


export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'fullTitle',
    defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
    preview: doc => formatPreviewURL('products', doc),
    group: 'Shop'
  },
  hooks: {
    beforeChange: [beforeProductChange],
    // afterRead: [populateArchiveBlock],
    afterDelete: [deleteProductFromCarts],
    afterChange: [
      ({ req: { payload }, doc }) => {
        regeneratePage({
          payload,
          collection: 'products',
          doc,
        })
      },
    ],
  },
  versions: { drafts: true, },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'title', type: 'text', required: true, },
    fullTitle,
    slugField(),
    { name: 'price', type: 'number', required: true, },
    { name: 'stripeProductID', type: 'text', required: true, },
    { name: 'description', type: 'textarea', required: true, },
    {
      type: "tabs", // required
      tabs: [
        {
          name: "images",
          label: "Images", // required
          interfaceName: "images", // optional (`name` must be present)
          fields: [
            {
              name: "images", // required
              type: "array", // required
              label: "Product Images",
              minRows: 1,
              maxRows: 4,
              labels: { singular: "Image", plural: "Images", },
              fields: [
                { name: "title", type: "text", },
                { name: "image", type: "upload", relationTo: "media", required: true, },
                { name: "alt", type: "text", },
              ],
            },
          ]
        },
        {
          name: "components",
          label: "Components", // required
          interfaceName: "components", // optional (`name` must be present)
          fields: [
            {
              type: 'row', // required
              fields: [
                { name: 'quantity', type: 'number', required: true, },
                { name: 'sku', label: 'SKU', type: 'text', required: true, },
                {
                  name: "stock", // required
                  type: "array", // required
                  label: "Stock",
                  minRows: 1,
                  // maxRows: 4,
                  labels: { singular: "Stock", plural: "Stock", },
                  fields: [
                    {
                      name: 'stock',
                      type: 'relationship',
                      relationTo: 'stockItems',
                      hasMany: true,
                      // admin: { width: '50%', },
                    },
                  ],
                },
              ],
            },

          ]
        },
        {
          name: "layout",
          label: "Page Layout", // required
          interfaceName: "layout", // optional (`name` must be present)
          fields: [
            {
              name: 'layout',
              label: ' ',
              type: 'blocks',
              required: true,
              blocks: [
                Hero,
                Banner,
                CallToAction,
                CardGrid,
                Content,
                ContentGrid,
                HoverHighlights,
                LinkGrid,
                MediaBlock,
                MediaContent,
                Pricing,
                ReusableContent,
                Slider,
                Steps,
                StickyHighlights,
              ],
            },
          ]
        }
      ]
    }
  ]
}





//   // {
//   //   name: 'stockItems',
//   //   type: 'relationship',
//   //   label: 'Component Stock Items',
//   //   relationTo: 'stockItems',
//   //   required: true,
//   //   hasMany: true,
//   //   admin: {
//   //     position: 'sidebar',
//   //   },
//   // },
//   {
//     name: 'categories',
//     type: 'relationship',
//     relationTo: 'categories',
//     hasMany: true,
//     admin: {
//       position: 'sidebar',
//     },
//   },
//   {
//     name: 'skipSync',
//     label: 'Skip Sync',
//     type: 'checkbox',
//     admin: {
//       position: 'sidebar',
//       readOnly: true,
//       hidden: true,
//     },
//   },

// ]



export default Products
