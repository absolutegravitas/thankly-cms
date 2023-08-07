import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'

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
        {
          name: 'navItems',
          type: 'array',
          fields: [link({ appearances: ['primary', 'secondary', 'default'] })],
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
            {
              name: 'navItems',
              type: 'array',
              fields: [link({ appearances: ['primary', 'secondary', 'default'] })],
            },
          ],
        },
      ],
    },
  ],
}
export default Menus
