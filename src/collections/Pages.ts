import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { regeneratePage } from '../utilities/regeneratePage'

import { CallToActionBlock } from '../blocks/CallToAction'
import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { ReusableContentBlock } from '../blocks/ReusableContent'

import { fullTitle } from '../fields/fullTitle'
import { slugField } from '../fields/slug'
import { FeaturedReviewsBlock } from '../blocks/FeaturedReviews'
import { FeaturedProductsBlock } from '../blocks/FeaturedProducts'
import { FeaturedFaqsBlock } from '../blocks/FeaturedFaqs'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'fullTitle',
    preview: doc => formatPreviewURL('pages', doc),
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
        FeaturedReviewsBlock,
        FeaturedFaqsBlock,
        FeaturedProductsBlock,
        MediaContentBlock, // image with some content positioned left & right e.g. feature

        ReusableContentBlock, // re-use an already created block, ie. one of the above types
      ],
    },
  ],
}

export default Pages
