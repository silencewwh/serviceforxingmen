// pages/index/index2.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    banner:[],
    mycard:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userInfo = app.globalData.userInfo;
    console.log(app.globalData);
    const db =wx.cloud.database()
    const card =db.collection('tables')
    card.get().then(res=>{
        this.setData({
          card:res.data
        })
    })

    card.where({
      author_name:userInfo.nickName,
    })
    .get()
    .then(res=>{
      this.setData({
        mycard:res.data
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
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({  
      selected: 0
    })
  }
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

  content:function(e){
    this.setData({
      content:e.detail.value
    })
  },

preventTouchMove:function(){

},//阻止touchmove事件传递

go:function(){
  this.setData({
    showModal:false,
  })
},//取消按钮

opencontent(e){
  //传参
  let content  = e.currentTarget.dataset.content;
  let title  = e.currentTarget.dataset.title;  
  wx.navigateTo({
  url: '/pages/index/selectcontent?content=' + content +"&title="+title,
})
}


  })
  