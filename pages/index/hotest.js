// latest.js
let api = require('../../utils/api.js');
let mock = require('../../utils/mock.js')
// const app = getApp()
let App = getApp()
Page({
  data: {
    title: '最热话题',
    infoList: [],   //保存数组
    hidden: false, //设置loading

    navHeight: 0,
    navTop: 0,
  },
  //小程序生命周期加载的函数
  onLoad() {
    console.log("TOP" + App.globalData.navTop);
    console.log("navHeight" + App.globalData.navHeight);
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
    this.fetchData();
  },


  onShow: function () {
    this.setData({
      infoList: [],   //保存数组
      hidden: false, //设置loading
    })
    this.fetchData();
  },

  /**
   * 获取数据
   */
  fetchData: function () {
    let that = this;
    that.setData({
      hidden: false
    })
    //获取infoList数据
    api.get({
      'url': mock.HOT_TOPIC,
      'data': {
        p: 1
      },
      success: res => {
        console.log("测试测试HOT_TOPIC" + res);
        that.setData({
          infoList: res
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },

  /**
   * 根据id
   * 跳转到帖子详情
   */
  toDetail:function(e){
    let id = e.currentTarget.id;
    if(id==0||id==undefined)
      return
    wx.navigateTo({
      url: './detail?id='+id,
    })
    console.log(id)
  },


  /**
   * 点击跳转到节点页面
   */
  toNodeDetail:function(e){
    console.log(JSON.stringify(e.currentTarget.dataset.tag))
    let id =  e.currentTarget.id;
    let tag =  e.currentTarget.dataset.tag;
    if(id==null||id==undefined)
      return
    wx.navigateTo({
      url: './nodeDetail?id='+id+'&tag='+tag,
    })
  },

})
