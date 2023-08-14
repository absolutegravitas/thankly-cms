import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

import { CallToActionBlock } from '../blocks/CallToAction'
import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { FeaturedReviewsBlock } from '../blocks/FeaturedReviews'
import { FeaturedProductsBlock } from '../blocks/FeaturedProducts'
import { FeaturedFaqsBlock } from '../blocks/FeaturedFaqs'
import { FeaturedLogosBlock } from '../blocks/FeaturedLogos'

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
        BasicContentBlock,
        CallToActionBlock,
        FeaturedFaqsBlock,
        FeaturedLogosBlock,
        FeaturedProductsBlock,
        FeaturedReviewsBlock,
        HeroBlock,
        MediaContentBlock,
      ],
    },
  ],
}

export default ReusableContent
