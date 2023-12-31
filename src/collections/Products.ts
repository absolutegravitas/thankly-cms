import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { regeneratePage } from '../utilities/regeneratePage'

import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { ReusableContentBlock } from '../blocks/ReusableContent'
import { fullTitle } from '../fields/fullTitle'
import { slugField } from '../fields/slug'
import { ProductOverviewBlock } from '../blocks/ProductOverview'
import { FeaturedReviewsBlock } from '../blocks/FeaturedReviews'
import { FeaturedFaqsBlock } from '../blocks/FeaturedFaqs'
import { FeaturedLogosBlock } from '../blocks/FeaturedLogos'

const Products: CollectionConfig = {
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
    { name: 'description', type: 'textarea', required: true },
    { name: 'quantity', type: 'number', required: true, admin: { position: 'sidebar' } },
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
      label: 'Price Details',
      type: 'collapsible',
      fields: [
        { name: 'stripeProductID', type: 'text', required: false },
        { name: 'stripePriceID', type: 'text', required: false },

        {
          name: 'unit_amount',
          label: 'price',
          type: 'number',
          required: false,
          defaultValue: '0',
        },
        {
          name: 'currency',
          type: 'text',
          required: false,
          defaultValue: 'aud',
        },
      ],
    },

    {
      name: 'stock',
      type: 'array',
      label: 'Stock Items',
      // admin: { position: 'sidebar' },
      minRows: 1,
      // maxRows: 4,
      labels: { singular: 'Stock', plural: 'Stock' },
      fields: [
        {
          name: 'stock',
          type: 'relationship',
          relationTo: 'stockItems',
          hasMany: true,
          //
        },
      ],
    },

    {
      name: 'layout',
      label: ' ',
      type: 'blocks',
      required: true,
      blocks: [
        BasicContentBlock, // a basic content block for chunks of text
        FeaturedFaqsBlock,
        FeaturedLogosBlock,
        FeaturedReviewsBlock,
        HeroBlock, // a hero block with image, video etc. overlays
        MediaContentBlock, // image with some content positioned left & right e.g. feature
        ProductOverviewBlock, //https://tailwindui.com/components/ecommerce/components/product-overviews#component-2904df5d10ee9fc81ba07d1ad61a27ca
        ReusableContentBlock, // re-use an already created block, ie. one of the above typess
      ],
    },
  ],
}

export default Products
