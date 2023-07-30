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
      type: "tabs",
      tabs: [
        {
          name: "header",
          label: "Header",
          interfaceName: "header", // optional (`name` must be present)
          description: "Menu shown in header on all pages.",
          fields: [
            { name: "name", label: "Name (used for header menu)", type: "text", required: true, },
            { name: 'navItems', type: 'array', fields: [link({ appearances: ['primary', 'secondary', 'default'], }),], },
          ],
        },
        {
          name: "footer",
          label: "Footer",
          interfaceName: "footer", // optional (`name` must be present)
          fields: [
            { name: 'logo', label: "Logo", type: 'upload', relationTo: 'media', required: false, },
            { name: "name", label: "Name", type: "text", required: true, },
            { name: "tagline", label: "Tagline", type: "text", required: true, },
            { name: "copyright", label: "Copyright Notice (will be prepended with (c) 20xx year)", type: "text", required: true, },

            {
              name: 'columns',
              type: 'array',
              minRows: 1,
              maxRows: 4,
              fields: [
                { name: "name", label: "Column Name", type: "text", required: true, },
                { name: 'navItems', type: 'array', fields: [link({ appearances: ['primary', 'secondary', 'default'], }),], },
              ],
            },
          ],
        },
      ],
    },

  ],
}
export default Menus