// pages/location/location.js
var status = true;
Page({
  data: {
    l: ["全国", "北京市", "天津市", "河北省", "山西省", 
    ],
    lo:[
      "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", 
    ],
    loc:[
      "上海市", "江苏省", "浙江省", "安徽省", "福建省",
    ],
    loca: [
      "江西省", "山东省", "河南省", "湖北省", "湖南省", 
    ],
    locat: [
      "广东省", "海南省", "广西壮族自治区", "甘肃省", 
    ],
    locati: [
      "陕西省", "新疆维吾尔自治区", "青海省", 
    ],
    locatio: [
      "宁夏回族自治区", "重庆省", "四川省", "贵州省",
    ],
    location: [
      "云南省", "西藏自治区", "台湾省", "澳门特别行政区",
    ],
    locations: [
      "香港特别行政区"
    ],
    l1:[1,2,3,4,5],
    status: status,
    showView: true
  },
  aaaa:function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
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
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    this.setData({ status: status })　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide: function (event) {
    console.log("触发bindchange，隐藏toast")
    status = true
    this.setData({ status: status })
  },
})