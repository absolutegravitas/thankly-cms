import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import adminsAndUser from './access/adminsAndUser'
import { checkRole } from './checkRole'
import { createStripeCustomer } from './hooks/createStripeCustomer'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'
import { loginAfterCreate } from './hooks/loginAfterCreate'
import { CustomerSelect } from './ui/CustomerSelect'

export const UserFields: CollectionConfig['fields'] = [
  {
    type: 'row',
    fields: [
      { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
      {
        name: 'business',
        label: 'Business / Organisation',
        type: 'text',
        required: false,
        admin: { width: '50%' },
      },
      {
        name: 'roles',
        type: 'select',
        hasMany: true,
        defaultValue: ['customer'],
        admin: {
          width: '50%',
        },
        options: [
          {
            label: 'admin',
            value: 'admin',
          },
          {
            label: 'customer',
            value: 'customer',
          },
          {
            label: 'user',
            value: 'user',
          },
        ],
        hooks: {
          beforeChange: [ensureFirstUserIsAdmin],
        },
        access: {
          read: admins,
          create: admins,
          update: admins,
        },
      },
      {
        name: 'stripeCustomerID',
        label: 'Stripe Customer',
        type: 'text',
        access: {
          read: ({ req: { user } }) => checkRole(['admin'], user),
        },
        admin: {
          // psosition: 'sidebar',
          width: '50%',
          components: {
            Field: CustomerSelect,
          },
        },
      },
    ],
  },
  {
    name: 'skipSync',
    label: 'Skip Sync',
    type: 'checkbox',
    admin: {
      position: 'sidebar',
      readOnly: true,
      hidden: true,
    },
  },
]

const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: adminsAndUser, // admin and user can read their profile
    create: anyone, // anyone can signup
    update: adminsAndUser, // admin and user can update their profile
    delete: admins, // only admins can delete
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  hooks: {
    beforeChange: [createStripeCustomer],
    afterChange: [loginAfterCreate],
  },
  auth: true,
  fields: UserFields,
  timestamps: true,
}

export default Users
