import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'
import colorField from '../fields/colorPicker/config'

const GlobalSettings: GlobalConfig = {
  slug: 'globalSettings',
  access: {
    read: () => true,
    update: isAdmin,
  },
  // graphQL: { name: 'Menus' },
  fields: [
    { name: 'banner', label: 'Banner Text', type: 'text', required: false },
   
  ],
}
export default GlobalSettings
