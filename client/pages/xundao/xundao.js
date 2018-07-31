// pages/xundao/xundao.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    libs: [
      [
        {
          id: 1,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%88%87%E6%8D%A2%E5%8F%B0.jpg',
          name: '切换台',
          price: '1000元/天',
          url: ''
        },
        {
          id: 2,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%AF%BC%E6%92%AD%E5%8F%B0.jpg',
          name: '导播台',
          price: '800元/天',
          url: ''
        }
      ]

    ]

  },

  shexiang: function () {

    wx.redirectTo({
      url: '/pages/shexiang/shexiang'
    })
  },
  sheying: function () {

    wx.redirectTo({
      url: '/pages/sheying/sheying'
    })
  },
  danfan: function () {

    wx.redirectTo({
      url: '/pages/danfan/danfan'
    })
  },
  xundao: function () {

    wx.redirectTo({
      url: '/pages/xundao/xundao'
    })
  }

})