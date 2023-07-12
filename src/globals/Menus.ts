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
    { name: "topBar", label: "Top Bar Text", type: "text", required: false, },
    {
      type: "tabs",
      tabs: [
        {
          name: "header",
          label: "Header", // required
          interfaceName: "header", // optional (`name` must be present)
          description: "Menu shown in header on all pages.",

          fields: [

            {
              name: 'navItems',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
          ],
        },

        {
          name: "footer",
          label: "Footer", // required
          interfaceName: "footer", // optional (`name` must be present)
          fields: [
            {
              name: 'columns',
              type: 'array',
              minRows: 1,
              maxRows: 3,
              fields: [
                {
                  name: 'navItems',
                  type: 'array',
                  fields: [
                    link({
                      appearances: false,
                    }),
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

  ],


}
