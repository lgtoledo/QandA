export const server = 'https://localhost:44365';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-vwhj9-8t.us.auth0.com',
  client_id: '9y7g1M9jlhsAioRhHmkP0DkuCkZ2xExg',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
