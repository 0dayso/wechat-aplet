//app.js
App({
  data:{
     loginway: "1|2",
     placeholder: "手机号|邮箱",
     appkey: "mail189",
     appname: "189邮箱",
     logoImgUrl: "image/**/*.png",
     hasat: true
  },
  onLaunch: function () {
      //调用API从本地缓存中获取数据
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)},
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }},
  globalData:{
    eLoginKey:""  //存放登录成功后返回的加密串
  }
})
