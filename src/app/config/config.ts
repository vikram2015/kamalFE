import { environment } from './../../environments/environment';

export let config = {
  serverAddress: environment.API_URL,
  version: 'v1',
  impersonation: false,
};
