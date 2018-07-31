// pages/sheying/sheying.js
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
          img: 'http://p7vkeyn2h.bkt.clouddn.com/RED-EPIC-X%E7%94%B5%E5%BD%B1%E6%91%84%E5%BD%B1%E6%9C%BA.jpg',
          name: 'RED-EPIC-X电影摄影机',
          price: '3000元/天',
          url: '/mine/mine'
        },
        {
          id: 2,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCPMW-F55%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '索尼PMW-F55',
          price: '1200元/天',
          url: ''
        },
        {
          id: 3,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCpmw-f5%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '索尼pmw-f5',
          price: '1500元/天',
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