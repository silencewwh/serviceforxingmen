// pages/index/selectcontent.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:undefined,
    title:undefined,
    author:"",
    date:undefined,
    id:"",
    readername:"",
    readeravatar:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
            content: options.content,
            title:options.title,
            author:options.author,
            date:options.date,
            id:options.id
          })
      console.log(options.id)
    
    const db=wx.cloud.database()
     const _ = db.command
    const card =db.collection('tables')

    card.where({_id:options.id}).update({
      data:{
        'reader.readername':_.addToSet(app.globalData.userInfo.nickName),
        'reader.readeravatar':_.addToSet(app.globalData.userInfo.avatarUrl),
      },//查看人名字头像上传
      success: function() {
        console.log(1)}     
    })
    card.doc(options.id)
    .get()
    .then(res=>{
      this.setData({
      readername:res.data.reader.readername,
      readeravatar:res.data.reader.readeravatar,
      })
    })

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

  },

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
  
 Tonew(){
  wx.switchTab({
    url:'../index/index3'
  })
 },
  
 Tohome(){
  wx.switchTab({
    url:'../index/index2'
  })
 }
})