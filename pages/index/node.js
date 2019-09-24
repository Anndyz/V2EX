// latest.js
let api = require('../../utils/api.js');
let mock = require('../../utils/mock.js')
//节点数据 以js形式存储
let all_nodes = require('../../utils/all_nodes.js')

let App = getApp()
Page({
  data: {
    hidden: false, //设置loading
    navHeight: 0,
    navTop: 0,
    nodes:[]
  },
  //小程序生命周期加载的函数
  onLoad() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
    this.fetchData()
  },
  onShow: function () {
    this.setData({
      hidden: false,
      nodes: [],
    })
    this.fetchData();
  },

  fetchData: function () {
    let that = this;
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

  /**
   * 点击跳转到节点页面
   */
  toDetail:function(e){
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
