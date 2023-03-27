export default [
  {
    url: '/api/rest/posts.*',
    type: 'get',
    respond: param => {
      return {
        result: [],
        total: 0
      }
    }
  }
]
