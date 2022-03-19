// pages/index/index2.js
var app = getApp()
var cardId
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    card:[],
    mycard:[],
    triggered: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var opid = app.globalData.opid;//获取全局变量opid
    console.log(app.globalData);
    const db =wx.cloud.database()
    const card =db.collection('tables') //数据库
    card.get().then(res=>{
        this.setData({
          card:res.data.reverse()
        })
        
    })
    

    card.where({
      _openid:opid,
    })
    .get()
    .then(res=>{
      this.setData({
        mycard:res.data.reverse()
      })
    })

    this.setData({
      triggered:true
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      this.setData({
        triggered: true,
      })
    }, 1000)
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


opencontent(e){
  //传参
  if (app.globalData.userInfo.nickName=="微信用户") {
    console.log(app.globalData);
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo,
        })
        app.globalData.userInfo=res.userInfo
        this.setData({
          showModal:true,
        })
      },
    })
  }
  console.log(app.globalData.hasUserInfo)
  let content  = e.currentTarget.dataset.content;
  let title  = e.currentTarget.dataset.title;
  let author = e.currentTarget.dataset.author; 
  let date = e.currentTarget.dataset.date;
  let id = e.currentTarget.dataset.id;
  wx.navigateTo({
  url: '/pages/index/selectcontent?content=' + content +"&title="+title+"&author="+author+"&date="+date+"&id="+id,
})
},

onRefresh() {
  if (this._freshing) return
  this._freshing = true
  setTimeout(() => {
    this.setData({
      triggered: false,
    })
    this._freshing = false
  }, 1000)
  this.onLoad()
},

deletecard:function(e){
    var that=this
    this.setData({
      showModal:true,
    })
    this.cardId = e.currentTarget.dataset.id  //长按的卡片ID
},
confirm(e){
  const db =wx.cloud.database()
  const card =db.collection('tables') //数据库
  card.doc(this.cardId).remove({})
  this.setData({
    triggered:true
  })
  this.onLoad()
}

  })
  