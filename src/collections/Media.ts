import path from 'path'
import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Globals',
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    staticURL: '/media',
    // staticDir: 'media',
    mimeTypes: ['image/*'],
    // imageSizes: [
    //   {
    //     name: 'thumbnail',
    //     width: 400,
    //     height: 300,
    //     position: 'centre',
    //   },
    //   {
    //     name: 'card',
    //     width: 768,
    //     height: 1024,
    //     position: 'centre',
    //   },
    //   {
    //     name: 'tablet',
    //     width: 1024,
    //     // By specifying `undefined` or leaving a height undefined,
    //     // the image will be sized to a certain width,
    //     // but it will retain its original aspect ratio
    //     // and calculate a height automatically.
    //     height: undefined,
    //     position: 'centre',
    //   },
    // ],
    // adminThumbnail: 'thumbnail',
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'alt', type: 'text', required: false },
    // {
    //   name: 'darkModeFallback',type: 'upload',relationTo: 'media',admin: {
    //     description: 'Choose an upload to render if the visitor is using dark mode.',
    //   },
    // },
  ],
}
export default Media
