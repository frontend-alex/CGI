export enum AccountProviders {
  Credentials = 'Credentials',
  Google = 'Google',
  Github = 'Github',
  Facebook = 'Facebook',
}

export enum UserRoles {
  Admin = 'Admin',
  User = 'User',
}

export type User = {
  _id: string;
  username: string;
  email: string;
  provider: AccountProviders;
  emailVerified: boolean;
  hasPassword: boolean;
  createdAt: string;
  updatedAt: string;
  role: UserRoles;
}