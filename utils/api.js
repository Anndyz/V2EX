'use strict';

var app = getApp();
var host = "https://www.v2ex.com/api/";
module.exports = {
  HOST: host,
  API_ROOT: host,
  // API_VERSION: '1.1.0',
  post(options) {
    this.request(options);
  },
  get(options) {
    options.method = 'GET';
    this.request(options);
  },

  request(options) {
    var apiRoot = this.API_ROOT;
    var token = '';
    try {

      token = wx.getStorageSync('token')
    } catch (e) {
      // Do something when catch error
    }

    // var requireLogin = true;

    // if (typeof options.login == 'undefined' || options.login == true) {
    //   requireLogin = true;
    // } else {
    //   requireLogin = false;
    // }

    wx.request({
      url: apiRoot + options.url,
      data: options.data,
      method: options.method ? options.method : 'POST',
      header: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'token': token,
        'XX-Device-Type': 'wxapp',
        'XX-Api-Version': this.API_VERSION
      },
      success: res => {
        var data = res.data;
        console.log("request resp ", res)
        options.success(data); 
      },
      fail: function (res) {
        if (options.fail) {
          options.fail(res)
        }
      },
      complete: options.complete ? options.complete : null
    });
  },
};
