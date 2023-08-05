import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: { useAsTitle: 'providerName', group: 'Shop' },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'note', type: 'textarea', required: false },
    {
      name: 'providerName',
      label: 'Provider Name',
      type: 'text',
      required: false,
    },
    {
      name: 'providerOrg',
      label: 'Provider Org',
      type: 'text',
      required: false,
    },
    { name: 'link', type: 'text', required: false },
    {
      name: 'channel',
      type: 'select',
      defaultValue: 'facebook',
      hasMany: false,
      options: [
        { label: 'Instagram', value: 'instagram' },
        { label: 'Facebook', value: 'facebook' },
        { label: 'Other', value: 'other' },
      ],
      required: false,
    },
    { name: 'image', label: 'Image', type: 'upload', relationTo: 'media', required: false },
    { name: 'rating', type: 'number', required: false, min: 1, max: 5 },
    // {
    //   name: 'tags',
    //   type: 'array',
    //   label: 'Tags',
    //   labels: {
    //     singular: 'Tag',
    //     plural: 'Tags',
    //   },
    //   minRows: 1,
    //   fields: [
    //     {
    //       name: 'name',
    //       type: 'text',
    //       required: true,
    //     },
    //   ],
    //   required: true,
    // },
  ],
}

export default Reviews
