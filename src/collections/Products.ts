import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { regeneratePage } from '../utilities/regeneratePage'

import { CallToActionBlock } from '../blocks/CallToAction'
import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { LinkGridBlock } from '../blocks/LinkGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { ReusableContentBlock } from '../blocks/ReusableContent'
import { fullTitle } from '../fields/fullTitle'
import { slugField } from '../fields/slug'
import { FeaturedContentBlock } from '../blocks/FeaturedContent'

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
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock, // a hero block with image, video etc. overlays
        CallToActionBlock, // a call to action block with additional functions
        BasicContentBlock, // a basic content block for chunks of text
        FeaturedContentBlock,

        LinkGridBlock, // a listing of links e.g. for FAQ or grouped Legalese, each link spawns new page
        MediaBlock, // just a image placement with a caption, mostly useful for blogs
        MediaContentBlock, // image with some content positioned left & right e.g. feature

        ReusableContentBlock, // re-use an already created block, ie. one of the above types
      ],
    },
  ],
}

export default Products
