// latest.js
var api = require('../../utils/api.js');
var mock = require('../../utils/mock.js')
// const app = getApp()
var App = getApp()
Page({
  data: {
    title: '帖子详情',
    latest: [],   //保存数组
    hidden: false, //设置loading

    navHeight: 0,
    navTop: 0,
    id:0,

    topic_info:[],
    replies:[],
  },
  //小程序生命周期加载的函数
  onLoad(options) {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
    let id = (options.id == null) ? 0 : options.id;
    if(id==0||id==undefined)
      return
    
    this.fetchData(id);
    console.log("回复信息"+JSON.stringify(this.data.replies))
  },

  fetchData: function (id) {
    var that = this;
    that.setData({
      hidden: false
    })
    //获取主题信息
    this.fetchArticle(id)
    //获取回复数据
    this.fetchReplies(id)
  },

  /**
   * 获取帖子信息
   */
  fetchArticle:function(id){
 //获取主题信息
    api.get({
      'url': mock.GET_TOPICS,
      'data': {
        id: id
      },
      success: res => {
        console.log("res"+JSON.stringify(res))
        this.setData({
          hidden: true,
          topic_info:res[0]
        })
      }
    })
  },

  /**
   * 获取回复信息
   */
  fetchReplies:function(id){
 //获取回复数据
    api.get({
      'url': mock.GET_REPLIES,
      'data': {
        topic_id: id
      },
      success: res => {
        console.log("测试测试" + JSON.stringify(res));
        this.setData({
          replies:res
        })
      }
    })
  }
})
