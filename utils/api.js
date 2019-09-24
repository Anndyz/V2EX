'use strict';

let app = getApp();
let host = "https://www.v2ex.com/api/";
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
    let apiRoot = this.API_ROOT;
    let token = '';
    try {

      token = wx.getStorageSync('token')
    } catch (e) {
     
    }

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
        let data = res.data;
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
