// pages/book/book.js
Page({
  data: {
    imgUrls: [
      'http://i04.pictn.sogoucdn.com/cd3c64b086aec418',
      'http://i01.pictn.sogoucdn.com/ec0bb8f000e707f6',
      'http://i02.pic.sogou.com/35af83edfaf113fe'
    ],
    // indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
  },
  //  * 生命周期函数--监听页面加载
  onLoad: function (options) {
  },
  //  * 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  },
  //  * 生命周期函数--监听页面显示
  onShow: function () {
  },
  //  * 生命周期函数--监听页面隐藏
  onHide: function () {
  },
//  生命周期函数--监听页面卸载
  onUnload: function () {
  },
  //  页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
  },
  //  页面上拉触底事件的处理函数
  onReachBottom: function () {
  },
  //  * 用户点击右上角分享
  onShareAppMessage: function () {
  },
  startWriting:function(){
    wx.navigateTo({
      url: '../writing/writing',
    }),
      wx.setNavigationBarTitle({
        title: '开始创作'
      })
  },
  allWorks:function(){
    wx.navigateTo({
      url: '../allWorks/allWorks',
    }),
      wx.setNavigationBarTitle({
        title:'全部作品'
      })
  },
  classical: function () {
    wx.navigateTo({
      url: '../classical/classical',
    }),
      wx.setNavigationBarTitle({
        title: '古典诗词'
      })
  },
  moderm: function () {
    wx.navigateTo({
      url: '../moderm/moderm',
    }),
      wx.setNavigationBarTitle({
        title: '现代诗歌'
      })
  },
  essay: function () {
    wx.navigateTo({
      url: '../essayAndEssay/essayAndEssay',
    }),
      wx.setNavigationBarTitle({
        title: '散文随笔'
      })
  },
  other: function () {
    wx.navigateTo({
      url: '../other/other',
    }),
      wx.setNavigationBarTitle({
        title: '其他体裁'
      })
  },
  search: function () {
    wx.navigateTo({
      url: '../search/search',
    }),
      wx.setNavigationBarTitle({
        title: '作品搜索'
      })
  }
})
module.exports.dates = function () {
  a: 'dwadwadwa'
}