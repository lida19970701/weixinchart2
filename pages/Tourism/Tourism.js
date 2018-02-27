// pages/Tourism/Tourism.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
      "http://img1.imgtn.bdimg.com/it/u=1150255256,199572635&fm=27&gp=0.jpg",
      "http://img3.imgtn.bdimg.com/it/u=3505446058,3003192405&fm=200&gp=0.jpg",
      "http://img1.imgtn.bdimg.com/it/u=2743050422,246448373&fm=27&gp=0.jpg",
      "https://f10.baidu.com/it/u=970441131,211573603&fm=72",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=496667416,849371304&fm=27&gp=0.jpg",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4007372893,233405611&fm=200&gp=0.jpg",
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      circular: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  location:function(){
    wx:wx.navigateTo({
      url: '../location/location',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})