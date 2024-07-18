import { RepoQuerierStub } from "../adapters/drivens";
import { ControlAuthenticatingStub } from "../adapters/drivens/control-authenticator-stub-adapter";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatingStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub
  );
  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );
  return {
    authenticatorProxyAdapter,
  };
};

export const { authenticatorProxyAdapter } = compositionMock();


const registerMock = { 
  name: 'Test',
  email: 'test@gmail.com',
}

authenticatorProxyAdapter.login('test@gmail.com',"12345678");
authenticatorProxyAdapter.register(registerMock,"12345678");