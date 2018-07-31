// pages/danfan/danfan.js
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
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD-5D-III.jpg',
          name: '佳能-5D-III',
          price: '150元/天',
          url: '/mine/mine'
        },
        {
          id: 2,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD-5D-IV.jpg',
          name: '佳能-5D-IV',
          price: '200元/天',
          url: ''
        },
        {
          id: 3,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD-5D-Mark-III.jpg',
          name: '佳能-5D-Mark-III',
          price: '150元/天',
          url: ''
        },
        {
          id: 4,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BC--A7S-II.jpg',
          name: '索尼--A7S - II',
          price: '200元/天',
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