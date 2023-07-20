import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const ProductBrands: CollectionConfig = {
  slug: 'product-brands',
  admin: {
    useAsTitle: 'title',
    group: 'Shop'

  },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row', // required
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'website',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },]
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

  ],
}

export default ProductBrands
