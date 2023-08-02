import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

import { CallToActionBlock } from '../blocks/CallToAction'
import { CardGridBlock } from '../blocks/CardGrid'
import { ContentBlock } from '../blocks/Content'
import { ContentGridBlock } from '../blocks/ContentGrid'
import { HeroBlock } from '../blocks/Hero'
import { LinkGridBlock } from '../blocks/LinkGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
// import { ReviewsBlock } from '../blocks/Reviews'
import { SliderBlock } from '../blocks/Slider'
import { StepsBlock } from '../blocks/Steps'
import { StickyHighlightsBlock } from '../blocks/StickyHighlights'

const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: { useAsTitle: 'title', group: 'Website' },
  access: {
    create: isAdmin,
    read: () => true,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: { singular: 'Reusable Content', plural: 'Reusable Contents', },
  fields: [
    { name: 'title', type: 'text', required: true, },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeroBlock, // a hero block with image, video etc. overlays
        CallToActionBlock, // a call to action block with additional functions
        CardGridBlock, // a grid of cards that can be clicked through
        ContentBlock, // a basic content block for chunks of text
        ContentGridBlock, // show content e.g. Q&A in a grid instead of taking whole width
        // ReviewsBlock, // shows selected reviews
        SliderBlock, // a slider either of images or text 
        StepsBlock, // shows series of steps to do something

        LinkGridBlock,
        MediaBlock,
        MediaContentBlock,
        StickyHighlightsBlock,
      ],
    },
  ],
}

export default ReusableContent