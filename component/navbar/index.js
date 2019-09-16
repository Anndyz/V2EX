// components/navbar/index.js
const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['custom-class'],
  properties: {
    pageName:String,
    showNav: {
      type: Boolean,
      value: true
    },
    bgColor:{
      type: String,
      value: '#fff'
    },
    iconColor:{
      type: String,
      value: '#000'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    barFlag:true,
    navTop:0,
    navHeight:0
  },

  attached: function () {
    console.log("TOP" + App.globalData.navTop);
    console.log("navHeight" + App.globalData.navHeight);
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop
    });
   },

  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    _navBack: function () {
      console.log("Test gateBack");
      wx.navigateBack();
    },
    //回主页
    _toIndex: function () {
      // wx.switchTab({
      //   url: '/pages/tabBar/index/index'
      // })
    },
  }
})