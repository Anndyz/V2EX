// latest.js
let api = require('../../utils/api.js');
let mock = require('../../utils/mock.js')
// const app = getApp()
let App = getApp()
Page({
  data: {
    title: '',
    nodeList: [],   //保存数组
    hidden: false, //设置loading

    navHeight: 0,
    navTop: 0,
  },
  //小程序生命周期加载的函数
  onLoad(options){
    let id = (options.id == null) ? 0 : options.id;
    let username = (options.username == null) ? 0 : options.username;
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
      title:username
    });
    if(id==0||id==undefined)
      return
    this.fetchData(id);
  },

  onShow: function () {
    this.setData({
      nodeList: [],   //保存数组
      hidden: false, //设置loading
    })
    this.fetchData();
  },


  fetchData:function(){
    let that = this;
    that.setData({
      hidden: false
    })
    api.get({
      'url': mock.GET_USERINFO,
      'data': {
        id: id
      },
      success: res => {
        console.log("测试测试" + res);
        that.setData({
          nodeList: res
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
