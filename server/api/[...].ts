import { honoApp } from '../presentation/app'

export default defineEventHandler((event) => {
  return honoApp.fetch(toWebRequest(event))
})
