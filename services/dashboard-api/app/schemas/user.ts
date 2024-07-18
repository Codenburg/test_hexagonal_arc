export interface AuthenticatedUser {
    email: string;
    name: string;
    token: string;
    refreshToken: string;
  }
  
  export type User = Pick<AuthenticatedUser, "email" | "name">;
  