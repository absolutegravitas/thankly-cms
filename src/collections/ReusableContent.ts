import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

import { CallToActionBlock } from '../blocks/CallToAction'
import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { PerksBlock } from '../blocks/Perks'
import { FeaturedReviewsBlock } from '../blocks/FeaturedReviews'
import { FeaturedProductsBlock } from '../blocks/FeaturedProducts'
import { FeaturedFaqsBlock } from '../blocks/FeaturedFaqs'

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
        HeroBlock,
        BasicContentBlock,
        CallToActionBlock,
        FeaturedFaqsBlock,
        FeaturedProductsBlock,
        FeaturedReviewsBlock,
        MediaContentBlock,
        PerksBlock,
      ],
    },
  ],
}

export default ReusableContent
