import Flux from "@cobuildlab/flux-state";

export const ON_APOLLO_CLIENT = "OnApolloClient";
export const On_ERROR_USER = "OnErrorAuth";
export const On_CREATE_USER = "OnCreateUser";

class AuthStore extends Flux.Store {
  constructor() {
    super();
    this.addEvent(ON_APOLLO_CLIENT);
    this.addEvent(On_ERROR_USER);
    this.addEvent(On_CREATE_USER);
  }
}

const authStore = new AuthStore();

export { authStore };
