import type { GlobalConfig } from 'payload/types'
import colorField from "../fields/colorPicker/config";
import { isAdmin } from '../access/isAdmin'

export const Brand: GlobalConfig = {
  slug: 'brand',
  typescript: {
    interface: 'Brand',
  },
  // graphQL: {
  //   name: 'Brand',
  // },
  access: {
    read: () => true,
    update: isAdmin,

  },
  fields: [
    { name: "name", label: "Name", type: "text", required: false, admin: { width: '50%', }, },
    { name: "domain", label: "Domain", type: "text", required: false, admin: { width: '50%', }, },
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
    // {
    //   type: "tabs",
    //   tabs: [
      
    //     // {
    //     //   name: "styleLight",
    //     //   label: "Global Style (Light)",
    //     //   interfaceName: "styleLight", // optional (`name` must be present)
    //     //   description: 'Inherited by all posts, pages, products etc. unless customised on a given post / page',
    //     //   fields: [
    //     //     { name: 'logo', label: "Logo", type: 'upload', relationTo: 'media', required: false, },
    //     //     colorField('colorText', 'Text Color'),
    //     //     colorField('colorAccent', 'Accent Color'),
    //     //     colorField('colorBackground', 'Background Color'),
    //     //   ],
    //     // },
    //     // {
    //     //   name: "styleDark",
    //     //   label: "Global Style (Dark Mode)",
    //     //   interfaceName: "styleDark", // optional (`name` must be present)
    //     //   description: 'Inherited by all posts, pages, products etc. unless customised on a given post / page',

    //     //   fields: [
    //     //     { name: 'logo', type: 'upload', relationTo: 'media', required: false, },
    //     //     colorField('colorText', 'Text Color'),
    //     //     colorField('colorAccent', 'Accent Color'),
    //     //     colorField('colorBackground', 'Background Color'),
    //     //   ],
    //     // },
    //     {
    //       name: "keyPages",
    //       label: "Key Pages",
    //       interfaceName: "keyPages", // optional (`name` must be present)
    //       fields: [
     

    //       ],
    //     },
    //   ],
    // },
  ],
}
