// pages/index/index3.js
var util=require('../../util.js');
var Today = util.formatDate(new Date());//今日日期
var Totime =util.formatTime(new Date())//今日日期和时间
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: null,
    content:"",
    title:"",
    author:"",
    showModal:false,
    upload_time:null,
    n:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    date:Today,
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
      selected: 1
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

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value        /*date*/
    })
  },

  getContent(e) { /*content*/           
    this.setData({
      content:e.detail.value,
    })
    
  },
  getTitle(e){
    this.setData({
      title:e.detail.value,
    });    /*title*/
  },
  submit:function(){
    this.setData({
      showModal:true,
    })
  },
  getauthor(e){this.setData({
    author:e.detail.value,
  });    /*author*/},


  confirm(){
    console.log(this.data.title);
    console.log(this.data.content);
    console.log(this.data.date);
    console.log(this.data.author)
    if (this.data.title=="") {  
      wx.lin.showMessage({
        content:'标题不能为空',
        type:'error'
    })
      this.n=1
    }
    if (this.data.content=="") {  
      wx.lin.showMessage({
        content:'内容不能为空',
        type:'error'
    })
      this.n=2
    }
    const db=wx.cloud.database()
    const board=db.collection('tables')
    var reader={
      readername:[],
      readeravatar:[],
    }
    switch(this.n){
      case 1:break;
      case 2:break;
      default:wx.lin.showMessage({type:'success',content:'发布成功'})
      board.add({
        data:{
          _id:Math.random().toString(36).substring(2),
          title:this.data.title,
          content:this.data.content,
          time:this.data.date,
          upload_time:Totime,
          author:this.data.author,
          "reader":reader
        }
      })
      break
    }
    this.n=0
    wx.switchTab({
      url: '../../pages/index/index2',
      success: function(e) {  
        var page = getCurrentPages().pop();  
        if (page == undefined || page == null) return;  
        page.onLoad(); }
    })
    
  }

})