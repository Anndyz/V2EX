// latest.js
let api = require('../../utils/api.js');
let mock = require('../../utils/mock.js')
// const app = getApp()
let App = getApp()
Page({
  data: {
    title: '',
    latest: [],   //保存数组
    hidden: false, //设置loading

    navHeight: 0,
    navTop: 0,
  },
  //小程序生命周期加载的函数
  onLoad(options){
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
    let id = (options.id == null) ? 0 : options.id;
    let tag = (options.tag == null) ? 0 : options.tag;
    console.log("tag"+JSON.stringify(tag))
    this.setData({
      title:tag
    })
    if(id==0||id==undefined)
      return
    this.fetchData(id);
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


  fetchData:function(shortname){
    let that = this;
    that.setData({
      hidden: false
    })
  //获取latest数据
    api.get({
      'url': mock.HOT_TOPIC,
      'data': {
        node_id: shortname
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
