import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'

// user alova instance
export const tenapiAlova = createAlova({
  baseURL: '/tenapi',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  async responded(response, method) {
    const json = await response.json()
    console.log(json)

    return json.data
  },
})


