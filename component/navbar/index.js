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
    barFlag:false,
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

    let pageList= getCurrentPages();
    //  console.log("当前页面数组"+JSON.stringify(pageList));
    let currentPage = pageList[pageList.length-1].route;
    //  replace("pages/","")
    console.log("当前页面"+JSON.stringify(currentPage));
 
    let reg = new RegExp(currentPage);
    console.log("REG"+reg);
 
    let globalDataList = App.globalData.tabBar.list;
    console.log("globalDataList"+JSON.stringify(globalDataList))
    for(let item of Array.from(globalDataList)){
      console.log("item.pagePath"+JSON.stringify(item.pagePath))
       if((item.pagePath).match(reg)){
          console.log("测试正则"+JSON.stringify(item));
         this.setData({
           barFlag:false,
         });
         break;
       }else{
         this.setData({
           barFlag:true,
         });
       }
     }
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