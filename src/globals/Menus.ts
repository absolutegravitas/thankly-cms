import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'

export const Menus: GlobalConfig = {
  slug: 'menus',
  access: {
    read: () => true,
    update: isAdmin,
  },

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

            {
              name: 'navItems',
              type: 'array',
              fields: [
                link({
                  // appearances: false,
                  appearances: ['primary', 'secondary', 'default'],
                }),
              ],
            },
          ],
        },
        {
          name: "footer",
          label: "Footer", 
          interfaceName: "footer", // optional (`name` must be present)
          fields: [
            {
              name: 'columns',
              type: 'array',
              minRows: 1,
              maxRows: 4,
              fields: [
            { name: "columnName", label: "Column Name", type: "text", required: true, },

                {
                  name: 'navItems',
                  type: 'array',
                  fields: [
                    link({
                      // appearances: false,
                      appearances: ['primary', 'secondary', 'default'],
                    }),
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "topBar",
          label: "Top Bar", 
          interfaceName: "topBar", // optional (`name` must be present)
          fields: [
            { name: "text", label: "Text", type: "text", required: false, },
            { name: "icon", label: "Text", type: "text", required: false, },

          ],
        },
      ],
    },

  ],


}
