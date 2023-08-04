import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

import { CallToActionBlock } from '../blocks/CallToAction'
import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { LinkGridBlock } from '../blocks/LinkGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { FeaturedContentBlock } from '../blocks/FeaturedContent'

const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: { useAsTitle: 'title' },
  access: {
    create: isAdmin,
    read: () => true,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: { singular: 'Reusable Content', plural: 'Reusable Contents' },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        // Common
        HeroBlock, // a hero block with image, video etc. overlays
        CallToActionBlock, // a call to action block with additional functions
        BasicContentBlock, // a basic content block for chunks of text
        FeaturedContentBlock,
        // type FeaturedFAQ, FeaturedProduct, FeaturedReviews
        // layout
        // Pages

        // Products
        // ProductGridBlock
        // ProductMain

        LinkGridBlock,
        MediaContentBlock,
      ],
    },
  ],
}

export default ReusableContent
