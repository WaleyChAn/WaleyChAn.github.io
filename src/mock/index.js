import Mock from 'mockjs'
import { param2Obj } from '@/plugin/utils'
import ads from './data/ads'
import categories from './data/categories'
import posts from './data/posts'

const mocks = [
  ...ads,
  ...categories,
  ...posts
]

Mock.setup({
  timeout: 200 - 400
})
function XHR2ExpressReqWrap (respond) {
  return function (options) {
    let result = null
    if (respond instanceof Function) {
      const { body, type, url } = options
      // https://expressjs.com/en/4x/api.html#req
      result = respond({
        method: type,
        body: JSON.parse(body),
        query: param2Obj(url)
      })
    } else {
      result = respond
    }
    return Mock.mock(result)
  }
}
mocks.map(item => {
  Mock.mock(new RegExp(item.url), item.type || 'get', XHR2ExpressReqWrap(item.respond))
})
