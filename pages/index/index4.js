// pages/index/index4.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:"",
    avatar:"",
    dialogShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var opid = app.globalData.opid;//获取全局变量opid
    var that =this;
    var nickName=app.globalData.userInfo.nickName;
    var avatar=app.globalData.userInfo.avatarUrl;
    this.setData({
      nickName:nickName,
      avatar:avatar

    })
    console.log(nickName,avatar);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({  
      selected: 2
    })
  }},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

setting:function(){
    this.setData({
      dialogShow:true
    })
  },

})