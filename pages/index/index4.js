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
    rootFontSize: wx.getStorageSync('rootFontSize'),
    pageFontSize: wx.getStorageSync('pageFontSize'),
    items: [
      //{value: "1rem", valuePage: "0.64rem", name: '小', checked: false,style: "0.7rem"},
      //{value: "1.2rem", valuePage: "0.66rem", name: '中', checked: false,style: "0.8rem"},
      //{value: "1.4rem", valuePage: "0.68rem", name: '大', checked: false,style: "0.9rem"},
      //{value: "1.6rem", valuePage: "0.75rem", name: '特大', checked: false,style: "1rem"},
    ]
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

  radioChange(e) {
		console.log('radio发生change事件，携带value值为：', e.detail.value)
		const items = this.data.items
		for (let i = 0, len = items.length; i < len; ++i) {
			items[i].checked = items[i].value === e.detail.value
		}
		this.setData({
			items
		})
	},
})