import { got } from 'got'

export interface BadgenResponse {
  color: string
  status: string
  subject: string
}

export const fetch = got.extend({
  headers: {
    'user-agent': 'badge (https://github.com/ajtorres9/badge)',
  },
  retry: {
    limit: 0,
  },
  timeout: {
    request: 3200,
  },
})

export { CancelableRequest } from 'got'
