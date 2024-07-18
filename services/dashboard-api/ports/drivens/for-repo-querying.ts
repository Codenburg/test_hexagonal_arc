import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
// Este User no es el mismo que el usuario que tengo comprendido en mis tipos (for-authenticating.ts)
// Por que? La idea es utilizar el mismo User que viene del Repo
export interface ForRepoQuerying {
  getUser(email: string): Promise<RepoUser>;
  createUser(user: User, password: string): Promise<User>;
}
