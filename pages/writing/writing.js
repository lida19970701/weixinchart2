const app = getApp()
const date = new Date()
const years = ['散文随笔', "词", "曲", "五言绝句", "五言律诗", "七言绝句", "七言律诗", "现代诗", "其他体裁"]
// for (let i = 1990; i <= date.getFullYear(); i++) {
//   years.push(i)
// }

var book=require('../book/book.js')
Page({
  data: {
    userInfo:{},
    con: ['散文随笔', "词", "曲", "五言绝句", "五言律诗", "七言绝句", "七言律诗", "现代诗","其他体裁"],
    years: years,
    year:'散文随笔'
  },
  
  onLoad: function () {
    // console.log(this);
    if (app.globalData.userInfo) {
    // console.log(this)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
        
      })
      // console.log(this);
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit: function (e) {   
    e.detail.value.avatarUrl = this.data.userInfo.avatarUrl;
    // e.detail.myName = this.data.userInfo.onename;
    // e.detail.firstname = this.data.userInfo.nickName;
    e.detail.value.myName=this.data.userInfo.nickName;
     console.log(e)
    // e.detail.choose = this.data.userInfo.select;
    // console.log(e.detail.value);
    // console.log(this.data);
      wx.request({
      url: 'http://196621l70z.iok.la/', //仅为示例，并非真实的接口地址
        data:e.detail.value,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res){
          if(res.data===1){
            // console.log("1111"+res);
          }
        }
        // success: function (res) {
        //   console.log(res.data)
        // }
      })
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]]
    })
  }
})
