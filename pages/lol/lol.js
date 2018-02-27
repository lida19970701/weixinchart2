const app = getApp()
Page({
  data: {
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      '../../public/images/qinnv.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      '../../public/images/lakesi.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      '../../public/images/fengnv.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    content: [
      'aaaa',
      'aaaa'
    ],
    vertical: true,
    indicatorDots: false,
    image: [
      '../../public/images/huli.jpg',
      '../../public/images/vn.jpg',
      '../../public/images/namei.jpg'
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // member: function () {
  //   wx.navigateTo({
  //     url: '../member/member'
  //   })
  // },
})
