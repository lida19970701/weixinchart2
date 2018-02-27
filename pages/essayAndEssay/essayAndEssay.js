const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    con:[],
    write:{},
  },  
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // tabName:function(){
  //   wx.navigateTo({
  //     url: '../main/main?path="1111"'
  //   })
  // },

  onLoad: function (options) {
    wx.request({
      url: 'http://196621l70z.iok.la/essayAndEssay',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res=>{
        // var date = res.data[0].createAt;
        if (res.statusCode === 200) {
          this.setData({
            // write: res.data.name, 
            con:res.data,
           
          })
        }
        // console.log(options)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // onShow() {
  //   console.log(this);
  // },
  essayDetails:function(e){
    // console.log("===========================")
    // console.log(e)
    wx.navigateTo({
      url: '../essayDetails/essayDetails?postid=' + e.currentTarget.id ,
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})