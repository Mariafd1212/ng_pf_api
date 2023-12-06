export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT';
export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  token: string;
  role: UserRole;
  password: string;
}