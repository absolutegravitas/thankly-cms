import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { CallToAction } from '../blocks/CallToAction'
import { CardGrid } from '../blocks/CardGrid'
import { Content } from '../blocks/Content'
import { ContentGrid } from '../blocks/ContentGrid'
// import { Form } from '../blocks/Form'
import { HoverHighlights } from '../blocks/HoverHighlights'
import { LinkGrid } from '../blocks/LinkGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContent } from '../blocks/MediaContent'
import { Pricing } from '../blocks/Pricing'
import { ReusableContent } from '../blocks/ReusableContent'
import { Slider } from '../blocks/Slider'
import { Steps } from '../blocks/Steps'
import { StickyHighlights } from '../blocks/StickyHighlights'

import { Banner } from '../blocks/Banner'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { fullTitle } from '../fields/fullTitle'
import { hero } from '../fields/hero'
import { regeneratePage } from '../utilities/regeneratePage'
import { slugField } from '../fields/slug'
import { Hero } from '../blocks/Hero'

export const Pages: CollectionConfig = {
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
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    fullTitle,
    // {
    //   type: 'tabs',
    //   tabs: [
    //     // {
    //     //   label: 'Hero',
    //     //   fields: [hero],
    //     // },
    //     {
    //       label: 'Layout',
    //       fields: [
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        Hero,
        Banner,
        CallToAction,
        CardGrid,
        Content,
        ContentGrid,
        // Form,
        HoverHighlights,
        LinkGrid,
        MediaBlock,
        MediaContent,
        Pricing,
        ReusableContent,
        Slider,
        Steps,
        StickyHighlights,
        //     ],
        //   },
        // ],
        // },
      ],
    },
    slugField(),
  ],
}
