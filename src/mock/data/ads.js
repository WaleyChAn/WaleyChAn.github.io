export default [
  {
    url: '/api/rest/ads.*',
    type: 'get',
    respond: param => {
      return {
        result: [
          {
            site: {
              title: '微信拟推出聊天记录云存储；Apollo 50 亿收购雅虎；Windows Server 2022 上市；韩国新规约束苹果谷歌支付垄断行为',
              url: 'https://www.infoq.cn/news/50HGggKLkjDTfEkum8EK',
              cover: 'http://localhost:3000/uploads/bf3a8d75b0eed16077c65db7e913d12e',
              desc: '本周架构视点：微信拟推出聊天记录云存储；Apollo 50 亿收购雅虎；工信部发布首张互联网标识服务许可证；Windows Server 2022 上市；晶圆代工厂商台积电一家独大；韩国发新规约束苹果谷歌支付垄断行为；Apple Store 长沙店开业。'
            },
            _id: '61363bff4570943f98aed995',
            type: 2,
            adID: 'ad2kt8u3lxc',
            __v: 0
          },
          {
            _id: '61363c614570943f98aed9a5',
            type: 1,
            post: {
              _id: '6136330d4570943f98aed8ba',
              title: '为什么除了 Flutter 之外，我们还需要另一个跨平台开发框架？',
              cover: 'http://localhost:3000/uploads/4397e594b6876b4158748974268c919d',
              desc: '不久前，谷歌正式推出Jetpack Compose 1.0 版本。近日，JetBrains 在此基础...'
            },
            adID: 'ad1kt8u5p2p',
            __v: 0
          },
          {
            _id: '61363c6e4570943f98aed9b1',
            type: 1,
            post: {
              _id: '613632424570943f98aed8ae',
              title: '测试宠物帖子，虽然是宠物，但是没有什么宠物内容',
              cover: 'http://localhost:3000/uploads/27a7895d68d6d68ce2d6b4e78f3e7145',
              desc: '只是测试帖子嘛，随便打点字'
            },
            adID: 'ad1kt8u5z2f',
            __v: 0
          }
        ],
        total: 0
      }
    }
  }
]
