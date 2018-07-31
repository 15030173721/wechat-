//index.js
var app = getApp();

Page({
　　
  data: {
    
    banners: [
      {
        id: 3,
        img: 'http://p7vkeyn2h.bkt.clouddn.com/wx.banner1.jpg',
        url: '',
        name: '公司banner'
      },
      {
        id: 1,
        img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%99%A8%E6%9D%90%E7%A7%9F%E8%B5%81.jpg',
        url: '',
        name: '摄影器材租赁'
      },
      {
        id: 2,
        img: 'http://orgqmk5hp.bkt.clouddn.com/wx.banner0441.jpg',
        url: '',
        name: '镜头展示'
      }
    ],
    icons: [
      [
        {
          id: 1,
          img: '/images/icon_1.jpg',
          name: '机身',
          url: '/pages/libs/libs'
        },
        {
          id: 2,
          img: '/images/icon_2.jpg',
          name: '镜头',
          url: '/pages/jingtou/jingtou'
        },
        {
          id: 3,
          img: '/images/icon_3.jpg',
          name: '无人机',
          url: '/pages/wrj/wrj'
        },
        {
          id: 4,
          img: '/images/icon_4.jpg',
          name: '录音',
          url: '/pages/luyin/luyin'
        },
        {
          id: 5,
          img: '/images/icon_5.jpg',
          name: '灯光',
          url: '/pages/dengguang/dengguang'
        },
        {
          id: 6,
          img: '/images/icon_6.jpg',
          name: '辅助',
          url: '/pages/fuzhu/fuzhu'
        },
        {
          id: 7,
          img: '/images/icon_7.jpg',
          name: '耗材',
          url: '/pages/haocai/haocai'
        },
        {
          id: 8,
          img: '/images/icon_8.jpg',
          name: '其他',
          url: '/pages/qita/qita'
        }
      ]

    ],
    libs: [
      [
        {
          id: 1,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD-5D-IV.jpg',
          name: '佳能-5D-IV',
          price:'200元/天',
          url: '/mine/mine'
        },
        {
          id: 2,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD-5D-III.jpg',
          name: '佳能-5D-III',
          price: '150元/天',
          url: ''
        },
        {
          id: 3,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCPXW-FS7.jpg',
          name: '索尼PXW-FS7',
          price: '500元/天',
          url: ''
        },
        {
          id: 4,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E7%B4%A2%E5%B0%BCPMW-EX280%E9%AB%98%E6%B8%85%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '索尼PMW-EX280',
          price: '150元/天',
          url: ''
        },
        {
          id: 5,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/10%E7%B1%B3-%E5%8D%A0%E7%BE%8E%E5%A4%A7%E6%91%87%E8%87%82.jpg',
          name: '12米-占美大摇臂',
          price: '1500元/天',
          url: ''
        },
        {
          id: 6,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/10%E7%B1%B3-%E5%8D%A0%E7%BE%8E%E5%A4%A7%E6%91%87%E8%87%82.jpg',
          name: '10米-占美大摇臂',
          price: '1200元/天',
          url: ''
        },
        {
          id: 7,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD16-35mm.jpg',
          name: '佳能16-35mm',
          price: '100元/天',
          url: ''
        },
        {
          id: 8,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E4%BD%B3%E8%83%BD24-70mm-f-2.8L-II-USM%E5%8D%95%E5%8F%8D%E9%95%9C%E5%A4%B4.jpg',
          name: '	佳能24-70mm',
          price: '100元/天',
          url: ''
        },
        {
          id: 9,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%A9%9A%E5%BA%86%E4%B8%93%E7%94%A8%E6%9D%BE%E4%B8%8B130%E6%91%84%E5%83%8F%E6%9C%BA.jpg',
          name: '婚庆专用松下130摄像机',
          price: '150元/天',
          url: ''
        },
        {
          id: 10,
          img: 'http://p7vkeyn2h.bkt.clouddn.com/%E5%AF%BC%E6%92%AD%E5%8F%B0.jpg',
          name: '导播台',
          price: '800元/天',
          url: ''
        }

      ]
    ]
    
  },



onShareAppMessage: function () {
   
  console.log('onShareAppMessage')

    return {
      title: '摄影器材租赁',
      path: '/pages/index/index',  
    }
  },

});