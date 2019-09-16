// latest.js
var api = require('../../utils/api.js');
var mock = require('../../utils/mock.js')
// const app = getApp()
var App = getApp()
Page({
  data: {
    title: '最新话题',
    latest: [],   //保存数组
    hidden: false, //设置loading

    navHeight: 0,
    navTop: 0,
  },
  //小程序生命周期加载的函数
  onLoad(){
    console.log("TOP" + App.globalData.navTop);
    console.log("navHeight" + App.globalData.navHeight);
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
    // app.editTabbar();
    this.fetchData();
  },

  fetchData:function(){
    var that = this;
    that.setData({
      hidden: false
    })
  //获取latest数据
    api.get({
      'url': mock.LATEST_TOPIC,
      'data': {
        p: 1
      },
      success: res => {
        console.log("测试测试" + res);
        that.setData({
          latest: res
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      } 
    })
  },
  
  

})
