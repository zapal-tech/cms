import { Admin } from 'payload/generated-types';
import type { Access, AccessArgs } from 'payload/types';

import { Role } from 'types/role';

export const rootAccessLevel = ({ req: { user } }: AccessArgs<any, Admin>): boolean =>
  [Role.ROOT].includes(user?.role as Role);

export const adminAccessLevel = ({ req: { user } }: AccessArgs<any, Admin>): boolean =>
  [Role.ROOT, Role.ADMIN].includes(user?.role as Role);

export const noAccess = (): boolean => false;

export const onlyServiceAccess = ({ req: { user } }: AccessArgs<any, Admin>): boolean =>
  [Role.SERVICE].includes(user?.role as Role);

export const publicUploadCollectionWithoutApiAccess: Access = ({ req: { originalUrl, user } }) => {
  if (originalUrl.startsWith('/api')) return !!user;

  return true;
};
