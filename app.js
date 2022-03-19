// app.js

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    if(!wx.cloud){
      console.error('请使用2.2.3以上的基础库使用云能力')
    }
    else{
      wx.cloud.init({
        env:'cloud1-8gqur419b2e33da0',
      })
    }
    this.getUserInfo();
    this.getUserOpid();
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
  /* 全局变量 */
  globalData:{
    userInfo:null,
    opid:null,
    textsize:"4.5mm"
  },
  
  getUserInfo:function(cb){
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })
  },

  getUserOpid:function(cb){
    var that=this
    wx.cloud.callFunction({
      name: 'hellocloud',
      complete: res => {
        that.globalData.opid = res.result.openid
        typeof cb == "function" && cb(that.globalData.opid)
      }
    })
  }


})

