import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../types/_global'

type isAdmin = (args: AccessArgs<any, User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}
