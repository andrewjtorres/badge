import got from 'got'

export interface BadgenResponse {
  color: string
  status: string
  subject: string
}

export const fetch = got.extend({
  headers: { 'user-agent': 'badge (https://github.com/ajtorres9/badge)' },
  retry: 0,
  timeout: 3200,
})

export { CancelableRequest } from 'got'
