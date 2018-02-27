// pages/essayDetails/essayDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    wx.request({
      url: 'http://196621l70z.iok.la/essayDetails?id='+this.options.postid, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      // success: function (res) {
      //   // if (res.statusCode === 200) {
      //     console.log("1111" + res.data[0]);
      //   // }
      // }
      success: res => {
        // var date = res.data[0].createAt;
        
        if (res.statusCode === 200) {
          this.setData({
            detail: res.data,
          })
        }
       
      },
    })
   
    // console.log(this)
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
  
  }
  
})
