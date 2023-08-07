import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

import { CallToActionBlock } from '../blocks/CallToAction'
import { BasicContentBlock } from '../blocks/BasicContent'
import { HeroBlock } from '../blocks/Hero'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { FeaturedContentBlock } from '../blocks/FeaturedContent'
import { PerksBlock } from '../blocks/Incentive'

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
        FeaturedContentBlock,
        MediaContentBlock,
        PerksBlock,
      ],
    },
  ],
}

export default ReusableContent
