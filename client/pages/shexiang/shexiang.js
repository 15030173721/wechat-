// pages/shexiang/shexiang.js
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
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCPXW-FS7-II.jpg',
          name: '索尼PXW-FS7-II',
          price: '600元/天',
          url: '/mine/mine'
        },
        {
          id: 2,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCPXW-FS7.jpg',
          name: '索尼PXW-FS7',
          price: '500元/天',
          url: ''
        },
        {
          id: 3,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCPMW-EX280%E9%AB%98%E6%B8%85%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '索尼PMW-EX280',
          price: '200元/天',
          url: ''
        },
        {
          id: 4,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E6%9D%BE%E4%B8%8B-p2.jpg',
          name: '松下-p2',
          price: '500元/天',
          url: ''
        },
        {
          id: 5,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BC--A7S-II.jpg',
          name: '索尼NEX-FS700',
          price: '300元/天',
          url: ''
        },
        {
          id: 6,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BDEOS-C500%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '佳能EOS C500',
          price: '600元/天',
          url: ''
        },
   
        {
          id: 7,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%A9%9A%E5%BA%86%E4%B8%93%E7%94%A8%E6%9D%BE%E4%B8%8B160%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '婚庆专用松下160',
          price: '150元/天',
          url: ''
        },
        {
          id: 8,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%A9%9A%E5%BA%86%E4%B8%93%E7%94%A8%E6%9D%BE%E4%B8%8B130%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '婚庆专用松下130',
          price: '150元/天',
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