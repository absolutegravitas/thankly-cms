import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { regeneratePage } from '../utilities/regeneratePage'

import { CallToActionBlock } from '../blocks/CallToAction'
import { CardGridBlock } from '../blocks/CardGrid'
import { ContentBlock } from '../blocks/Content'
import { ContentGridBlock } from '../blocks/ContentGrid'
import { HeroBlock } from '../blocks/Hero'
import { LinkGridBlock } from '../blocks/LinkGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContentBlock } from '../blocks/MediaContent'
import { ReusableContentBlock } from '../blocks/ReusableContent'
// import { ReviewsBlock } from '../blocks/Reviews'

import { SliderBlock } from '../blocks/Slider'
import { StepsBlock } from '../blocks/Steps'
import { StickyHighlightsBlock } from '../blocks/StickyHighlights'

import { fullTitle } from '../fields/fullTitle'
import { slugField } from '../fields/slug'
// import { hero } from '../../fields/hero'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'fullTitle',
    preview: doc => formatPreviewURL('pages', doc),
    defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
    group: 'Website'
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

    {name: 'title',type: 'text',required: true,},
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
        // FormsBlock, // shows created form
        
        LinkGridBlock,
        MediaBlock,
        MediaContentBlock,
        StickyHighlightsBlock,

        ReusableContentBlock, // re-use an already created block, ie. one of the above types
      ],
    },
  ],
}

export default Pages