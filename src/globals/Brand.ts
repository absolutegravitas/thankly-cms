import type { GlobalConfig } from 'payload/types'
import colorField from "../fields/colorPicker/config";
import { isAdmin } from '../access/isAdmin'

export const Brand: GlobalConfig = {
  slug: 'brand',
  typescript: {
    interface: 'Brand',
  },
  graphQL: {
    name: 'Brand',
  },
  access: {
    read: () => true,
    update: isAdmin,

  },
  fields: [
    {
      type: "tabs", // required
      tabs: [
        {
          name: "basicInfo",
          label: "Basic", // required
          interfaceName: "basicInfo", // optional (`name` must be present)
          description: "Basic business information here.",
          fields: [
            { name: "name", label: "Name", type: "text", required: true, },
            { name: "tagline", label: "Tagline", type: "text", required: true, },
            { name: "domain", label: "Domain", type: "text", required: true, },
            { name: "copyright", label: "Copyright Notice", type: "text", required: true, },
            { name: "cookieNotice", label: "Cookie Notice", type: "text", required: true, },
          ],
        },
        {
          name: "styleLight",
          label: "Global Style (Light)", // required
          interfaceName: "styleLight", // optional (`name` must be present)
          description: 'Inherited by all posts, pages, products etc. unless customised on a given post / page',
          fields: [
            { name: 'logo', label: "Logo", type: 'upload', relationTo: 'media', required: false, },
            colorField('colorText', 'Text Color'),
            colorField('colorAccent', 'Accent Color'),
            colorField('colorBackground', 'Background Color'),
          ],
        },
        {
          name: "styleDark",
          label: "Global Style (Dark Mode)", // required
          interfaceName: "styleDark", // optional (`name` must be present)
          description: 'Inherited by all posts, pages, products etc. unless customised on a given post / page',

          fields: [
            { name: 'logo', type: 'upload', relationTo: 'media', required: false, },
            colorField('colorText', 'Text Color'),
            colorField('colorAccent', 'Accent Color'),
            colorField('colorBackground', 'Background Color'),
          ],
        },
        {
          name: "keyPages",
          label: "Key Pages", // required
          interfaceName: "keyPages", // optional (`name` must be present)
          fields: [
            {
              name: 'homePage',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Home Page',
            },
            {
              name: 'shopPage',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Shop Page',
            },
            {
              name: 'blogPage',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Blog Page',
            },
            {
              name: 'privacyPage',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Privacy Page',
            },
            {
              name: 'termsPage',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Terms Page',
            },

          ],
        },
      ],
    },
  ],
}
