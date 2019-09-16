//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
        navTop = menuButtonObject.top,
        navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err + "错误信息");
      },
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // editTabbar: function () {
  //   let tabbar = this.globalData.tabBar;
  //   let currentPages = getCurrentPages();
  //   let _this = currentPages[currentPages.length - 1];
  //   let pagePath = _this.route;

  //   (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);

  //   for (let i in tabbar.list) {
  //     tabbar.list[i].selected = false;
  //     (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
  //   }
  //   _this.setData({
  //     tabbar: tabbar
  //   });
  // },
  globalData: {
    userInfo: null
  }
})