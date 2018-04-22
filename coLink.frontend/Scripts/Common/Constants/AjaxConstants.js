export const TYPE_POST = 'POST';
export const TYPE_GET = 'GET';
export const TYPE_PUT = 'PUT';
export const TYPE_DELETE = 'DELETE';

export const AXIOS_CONFIG = ({ method, url, query, headers, ...others }) => ({
  url,
  method,
  [method === TYPE_GET || method === TYPE_DELETE ? 'params' : 'data']: query,
  headers: {
    'content-type': 'application/json',
    ...headers
  },
  ...others
});
