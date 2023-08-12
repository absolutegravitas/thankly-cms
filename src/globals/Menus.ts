import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'
import linkGroup from '../fields/linkGroup'

const Menus: GlobalConfig = {
  slug: 'menus',
  access: {
    read: () => true,
    update: isAdmin,
  },
  // graphQL: { name: 'Menus' },
  fields: [
    {
      label: 'Header',
      type: 'group',
      name: 'header',
      fields: [
        { name: 'name', label: 'Name (used for header menu)', type: 'text', required: true },
        { name: 'banner', label: 'Banner Text', type: 'text', required: false },
        {
          name: 'menuItems',
          label: 'Menu Items',
          type: 'array',

          fields: [
            { name: 'useSubMenu', label: 'Use Sub Menus', type: 'checkbox' },

            // a single link turns out not needed
            // link({
            //   appearances: ['primary', 'secondary', 'default'],
            //   overrides: {
            //     admin: { condition: (_, siblingData) => !siblingData.useSubMenu },
            //   },
            // }),

            // and/or nested links
            {
              name: 'name',
              label: 'Item Name',
              type: 'text',
              required: false,
              admin: { condition: (_, siblingData) => siblingData.useSubMenu },
            },

            linkGroup({
              overrides: {
                minRows: 1,
                maxRows: 1,
                
                admin: {
                
                  condition: (_, siblingData) => !siblingData.useSubMenu,
                },
              },
            }),
            linkGroup({
              overrides: {
                admin: { condition: (_, siblingData) => siblingData.useSubMenu },
              },
            }),
          ],
        },
      ],
    },
    {
      label: 'Footer',
      type: 'group',
      name: 'footer',
      fields: [
        { name: 'logo', label: 'Logo', type: 'upload', relationTo: 'media', required: false },
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'tagline', label: 'Tagline', type: 'text', required: true },
        {
          name: 'copyright',
          label: 'Copyright Notice (will be prepended with (c) 20xx year)',
          type: 'text',
          required: true,
        },

        {
          name: 'columns',
          label: 'Footer Columns',
          type: 'array',
          fields: [
            { name: 'name', label: 'Column Name', type: 'text', required: true },
            linkGroup(),
            // {
            //   name: 'navItems',
            //   type: 'array',
            //   fields: [link({ appearances: ['primary', 'secondary', 'default'] })],
            // },
          ],
        },
      ],
    },
  ],
}
export default Menus
