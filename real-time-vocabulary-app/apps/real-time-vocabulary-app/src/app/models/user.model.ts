export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  phone?: string;
  avatarUrl?: string;
  token?: string;
}
