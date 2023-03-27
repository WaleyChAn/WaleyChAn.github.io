export default [
  {
    url: '/api/rest/categories.*',
    type: 'get',
    respond: param => {
      return {
        result: [
          {
            _id: '6135de324570943f98aed3e9',
            color: '#409eff',
            name: '生活',
            catID: 'catdefault',
            __v: 0
          },
          {
            _id: '6135e3da4570943f98aed43e',
            color: '#67c23a',
            name: '前端',
            catID: 'catkt8gny0g',
            __v: 0
          },
          {
            _id: '6135e3e64570943f98aed44e',
            color: '#f56c6c',
            name: 'ACG',
            catID: 'catkt8go78h',
            __v: 0
          },
          {
            _id: '6135e3ed4570943f98aed454',
            color: '#f8b62b',
            name: '宠物',
            catID: 'catkt8gocrq',
            __v: 0
          }
        ],
        total: 4
      }
    }
  }
]
