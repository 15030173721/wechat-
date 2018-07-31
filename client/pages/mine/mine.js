// pages/mine/mine.js
var app = getApp();

Page({
  data: { 
    markers: [
      {
      iconPath: "/images/map.png",
      id: 0, 
      latitude: 39.975810,
      longitude: 116.321700,
      width: 45,
      height: 45,
      title: "北京市海淀区知春路108号豪景大厦B座1401"
    },
    {
        iconPath: "/images/map.png",
        id: 1,
        latitude: 39.910080, 
        longitude: 116.553850,
        width: 45,
        height: 45,
        title: "北京市朝阳区定福庄东街3号楼2单元102室"
      },
    {
      iconPath: "/images/map.png",
      id: 2,
      latitude: 39.905700,
      longitude: 116.459760, 
      width: 45,
      height: 45,
      title: "北京市朝阳区建外soho东区2号楼701室"
    },
     {
      iconPath: "/images/map.png",
      id: 3, 
      latitude: 39.844700,
      longitude: 116.371490, 
      width: 45,
      height: 45,
      title: "北京市丰台区马家堡西路24号院1号楼5单元102"
    },
     {
       iconPath: "/images/map.png",
       id: 4,
       latitude: 31.180620,
       longitude: 121.432140,
       width: 45,
       height: 45,
       title: "上海市徐汇区中山西路2368号华鼎大厦1104"
     }
    ]
  },
 
  // 点击按钮进入拨号页面
  callTap:function(){

    wx.makePhoneCall({

      phoneNumber: '18513127642'
    })
  },
  callaTap: function () {

    wx.makePhoneCall({

      phoneNumber: '17521049912'
    })
  },
  callsTap: function () {

    wx.makePhoneCall({

      phoneNumber: '01082101099'
    })
  },
  
  // 获取当前位置地图
  Location:function(){
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        
        wx.openLocation({
          latitude: 39.975810, 
          longitude: 116.321700,
          scale: 18,
          name: '华视风行影视器材租赁',
          address: '北京市海淀区知春路108号豪景大厦B座1401'
        })  
      }
    })
  },
  // 获取当前位置地图2
  Location2: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        wx.openLocation({
          latitude: 39.910080,
          longitude: 116.553850, 
          scale: 18,
          name: '华视风行影视器材租赁',
          address: '北京市朝阳区定福庄东街3号楼2单元102室'
        })
      }
    })
  },
  // 获取当前位置地图3
  Location3: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        wx.openLocation({
          latitude: 39.905700,
          longitude: 116.459760,
          scale: 18,
          name: '华视风行影视器材租赁',
          address: '北京市朝阳区建外soho东区2号楼701室'
        })
      }
    })
  },
  // 获取当前位置地图4
  Location4: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        wx.openLocation({
          latitude: 39.844700,
          longitude: 116.371490, 
          scale: 18, 
          name: '华视风行影视器材租赁',
          address: '北京市丰台区马家堡西路24号院1号楼5单元102'
        })
      }
    })
  },
// 获取当前位置地图5
  Location5: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        wx.openLocation({
          latitude: 31.180620,
          longitude: 121.432140, 
          scale: 18,
          name: '华视风行影视器材租赁',
          address: '上海市徐汇区中山西路2368号华鼎大厦1104'
        })
      }
    })
  }
})