import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { beforeProductChange } from './hooks/beforeChange'
import { deleteProductFromCarts } from './hooks/deleteProductFromCarts'
import { slugField } from '../../fields/slug'
import { formatPreviewURL } from '../../utilities/formatPreviewURL'
import { regeneratePage } from '../../utilities/regeneratePage'
import { fullTitle } from '../../fields/fullTitle'
import { isAdmin } from '../../access/isAdmin'
import { publishedOnly } from '../../access/publishedOnly'


import { CallToActionBlock } from '../../blocks/CallToAction'
import { BasicContentBlock } from '../../blocks/BasicContent'
import { HeroBlock } from '../../blocks/Hero'
import { LinkGridBlock } from '../../blocks/LinkGrid'
import { MediaBlock } from '../../blocks/Media'
import { MediaContentBlock } from '../../blocks/MediaContent'
import { ReusableContentBlock } from '../../blocks/ReusableContent'


// export const Products: CollectionConfig = {
//   slug: 'products',
//   admin: {
//     useAsTitle: 'fullTitle',
//     defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
//     preview: doc => formatPreviewURL('products', doc),
//     group: 'Shop'
//   },
//   hooks: {
//     beforeChange: [beforeProductChange],
//     // afterRead: [populateArchiveBlock],
//     afterDelete: [deleteProductFromCarts],
//     afterChange: [
//       ({ req: { payload }, doc }) => {
//         regeneratePage({
//           payload,
//           collection: 'products',
//           doc,
//         })
//       },
//     ],
//   },
//   versions: { drafts: true, },
//   access: {
//     create: isAdmin,
//     read: publishedOnly,
//     readVersions: isAdmin,
//     update: isAdmin,
//     delete: isAdmin,
//   },
//   fields: [
//     slugField(),
//     fullTitle,
//     { name: 'title', type: 'text', required: true, },
//     { name: 'description', type: 'textarea', required: true, },
//     {
//       type: "row",
//       fields: [
//         { name: 'price', type: 'number', required: true, admin: { width: '50%', }, },
//         { name: 'stripeProductID', type: 'text', required: true, admin: { width: '50%', }, },
//         {
//           name: 'type',
//           type: 'select',
//           hasMany: false, required: true, admin: { width: '50%', isClearable: true, },
//           options: [
//             { label: 'Card', value: 'card', },
//             { label: 'Bundle', value: 'Bundle', },
//           ],
//         },
//       ]
//     },
//     {
//       type: "tabs",
//       tabs: [
//         {
//           name: "images",
//           label: "Images",
//           interfaceName: "images", // optional (`name` must be present)
//           description:'First image will be used as the main image on UI',
//           fields: [
//             {
//               name: "images",
//               type: "array",
//               label: "Product Images",
//               minRows: 1,
//               maxRows: 4,
//               labels: { singular: "Image", plural: "Images", },
//               fields: [
//                 // { name: "title", type: "text", },
//                 { name: "image", type: "upload", relationTo: "media", required: true, },
//                 { name: "alt", type: "text", },
//               ],
//             },
//           ]
//         },
//         {
//           name: "components",
//           label: "Product Builder",
//           interfaceName: "components", // optional (`name` must be present)
//           description:'Build the product sell by referencing one or more cards & gifts.',
//           fields: [
//             {
//               type: 'row',
//               fields: [
//                 { name: 'quantity', type: 'number', required: true, },
//                 { name: 'sku', label: 'SKU', type: 'text', required: true, },
//                 {
//                   name: "stock",
//                   type: "array",
//                   label: "Stock",
//                   minRows: 1,
//                   // maxRows: 4,
//                   labels: { singular: "Stock", plural: "Stock", },
//                   fields: [
//                     {
//                       name: 'stock',
//                       type: 'relationship',
//                       relationTo: 'stockItems',
//                       hasMany: true,
//                       // admin: { width: '50%', },
//                     },
//                   ],
//                 },
//               ],
//             },

//           ]
//         },
//         {
//           name: "layout",
//           label: "Page Layout",
//           interfaceName: "layout", // optional (`name` must be present)
//           fields: [
//             {
//               name: 'layout',
//               label: ' ',
//               type: 'blocks',
//               required: true,
//               blocks: [
//                 HeroBlock, // a hero block with image, video etc. overlays
//                 CallToActionBlock, // a call to action block with additional functions
//                 CardGridBlock, // a grid of cards that can be clicked through
//                 ContentBlock, // a basic content block for chunks of text
//                 ContentGridBlock, // show content e.g. Q&A in a grid instead of taking whole width
//                 FeaturedReviewsBlock, // shows selected reviews
//                 SliderBlock, // a slider either of images or text 
//                 StepsBlock, // shows series of steps to do something
//                 FeaturedPartnersBlock, // series of logos of "as seen on" or "working with"
//                 ProductOverviewBlock, // a block that pulls in other info and shows the product, buy button, price etc.
//                 LinkGridBlock, // a listing of links e.g. for FAQ or grouped Legalese, each link spawns new page
//                 MediaBlock, // just a image placement with a caption, mostly useful for blogs
//                 MediaContentBlock, // image with some content positioned left & right e.g. feature
//                 StickyHighlightsBlock, // big feature with parallax effect

//                 ReusableContentBlock, // re-use an already created block, ie. one of the above types
//               ],
//             },
//           ]
//         }
//       ]
//     }
//   ]
// }

// export default Products



const OldProducts: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'fullTitle',
    preview: doc => formatPreviewURL('products', doc),
    defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
    group: 'Website',
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [
      ({ req: { payload }, doc }) => {
        regeneratePage({
          payload,
          collection: 'pages',
          doc,
        })
      },
    ],
  },
  fields: [
    fullTitle,
    slugField(),

    { name: 'title', type: 'text', required: true },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock, // a hero block with image, video etc. overlays
        CallToActionBlock, // a call to action block with additional functions
        BasicContentBlock, // a basic content block for chunks of text
        LinkGridBlock, // a listing of links e.g. for FAQ or grouped Legalese, each link spawns new page
        MediaBlock, // just a image placement with a caption, mostly useful for blogs
        MediaContentBlock, // image with some content positioned left & right e.g. feature

        ReusableContentBlock, // re-use an already created block, ie. one of the above types
      ],
    },
  ],
}

export default OldProducts