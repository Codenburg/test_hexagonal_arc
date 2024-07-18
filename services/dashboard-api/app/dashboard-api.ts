import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { ForAuthenticating } from "../ports/drivers/for-authenticating";
import { AuthenticatedUser, User } from "./schemas";

export class DashboardApi implements ForAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly RepoQuerier: ForRepoQuerying
  ) {}
  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      email,
      password
    );
    const user = await this.RepoQuerier.getUser(email);
    const result = {
      ...user,
      ...authDetails,
      ...permissions,
    };
    console.log("LOGIN", result);

    return result;
  }
  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.RepoQuerier.createUser(user, password);
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      password
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      password
    );
    const result = { ...newUser, ...authDetails, ...permissions };
    console.log("REGISTER", result);

    return result;
  }
}
