Page({
  data: {
    selectPerson: true,
    selectArea: false,
  },
  //点击选择类型
  chickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  //点击切换
  // mySelect: function (e) {
  //   this.setData({
  //     selectPerson: true,
  //     selectArea: false,
  //   })
  // },
  mySelectA:function(e){
    this.setData({
      selectPerson: true,
      selectArea: false,
    }),
    wx.navigateTo({
      url: '../lol/lol',
    })
  },
  mySelectB: function (e) {
    this.setData({
      selectPerson: true,
      selectArea: false,
    })
  },
  mySelectC: function (e) {
    this.setData({
      selectPerson: true,
      selectArea: false,
    }),
    wx.navigateTo({
      url: '../book/book',
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  game:function(){
    wx.navigateTo({
      url: '../lol/lol',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },book:function(){
    wx.navigateTo({
      url: '../book/book',
    })
  }, tourism:function(){
    wx:wx.navigateTo({
      url: '../Tourism/Tourism',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})