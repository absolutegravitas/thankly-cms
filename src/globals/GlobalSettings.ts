import type { GlobalConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

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
