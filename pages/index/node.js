// latest.js
var api = require('../../utils/api.js');
var mock = require('../../utils/mock.js')
//节点数据 以js形式存储
var all_nodes = require('../../utils/all_nodes.js')

var App = getApp()
Page({
  data: {
    hidden: false, //设置loading
    navHeight: 0,
    navTop: 0,
    nodes:[]
  },
  //小程序生命周期加载的函数
  onLoad() {
    console.log("TOP" + App.globalData.navTop);
    console.log("navHeight" + App.globalData.navHeight);
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
    setTimeout(function () {
      this.fetchData();
      },1000);
  },
  onShow: function () {
    this.setData({
      hidden: false,
      nodes: [],
    })
    this.fetchData();
  },

  fetchData: function () {
    var that = this;
    that.setData({
      hidden: false
    })
  //设置nodes数据
    that.setNodes()
    console.log("Type" + JSON.stringify(that.data.nodes));
  },

  setNodes:function(){
    let that = this
    setTimeout(function () {
      that.setData({
        hidden: true,
        nodes: all_nodes.default,
        })
      }, 1000)
  },
})
