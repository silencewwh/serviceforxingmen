// app.js
const MPServerless = require('/sdk/mpserverless.js');
const mpServerless = new MPServerless({
  uploadFile: wx.uploadFile,
  request: wx.request,
  getAuthCode: wx.login,
  getFileInfo: wx.getFileInfo,
  getImageInfo: wx.getImageInfo,
}, {
  appId: 'wx20be3f49191a89d7', // 小程序应用标识
  spaceId: '4ea6f1ff-6b1f-4648-a605-f6788a48c050', // 服务空间标识
  clientSecret: '7tOPoLPXjBa6ofvgsGxHIg==', // 服务空间 secret key
  endpoint: 'alymghlmgz-1506937047332804-file.oss-cn-zhangjiakou.aliyuncs.com', // 服务空间地址，从小程序 serverless 控制台处获得
});


App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    userInfo:null,
  }
})

