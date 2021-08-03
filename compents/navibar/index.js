// pages/commpents/navibar/index.js
const app = getApp()

Component({
  properties: {
    navibarData:{
      type:Object,
      value:{},
      observer:function(newVal, oldVal) {}
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
        //默认值  默认显示左上角
    navibarData: {
      showCapsule:1
    },
    naviHeight: app.globalData.naviHeight,
    statusBarHeight: app.globalData.statusBarHeight,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      naviHeight: app.globalData.naviHeight
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