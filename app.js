// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // if (option.scene == 1007 || option.scene == 1008) {
    //   this.globalData.share = true
    // } else {
    //   this.globalData.share = false
    // }

    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    let naviTop = 0;
    let naviHeight = 0;
    let statusBarHeight = 0;
    wx.getSystemInfo({
      success: (result) => {
        statusBarHeight = result.statusBarHeight;
        naviTop = menuButtonObject.top, //胶囊按钮与顶部的距离
        naviHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.globalData.naviHeight = naviHeight;
        this.globalData.statusBarHeight = statusBarHeight;
        this.globalData.navTop = naviTop;
        this.globalData.windowHeight = result.windowHeight;
        console.log(`statusBarHeight 高度：` + statusBarHeight)
        console.log(`navi2 高度：${this.globalData.naviHeight}`)
      }
    })
  },
  globalData: {
    userInfo: null,
    share: false, // 分享默认为false
    naviHeight: 0,
    statusBarHeight: 0,
    naviTop: 0,
    windowHeight: 0
  }
})