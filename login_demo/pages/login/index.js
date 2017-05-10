//index.js
//获取应用实例
var app = getApp()
Page({
 
  OnSubmit: function() {
    checkSession();
    var that = this;
       var eLoginKey = getApp().data.eLoginKey; 
            //  getApp().globalData.eLoginKey="132134"  

            console.log(getApp().globalData.eLoginKey)  

      that.setData({eLoginKey:'dataSection[1]'})


  },
  linkToNormalLogin: function() {
    wx.navigateTo({
      url: '../normalLogin/login'
    })},
})
function checkSession() {

    wx.checkSession({
        success: function(){
          //session 未过期，并且在本生命周期一直有效
        },
        fail: function(){
          //登录态过期
          submitLogin(); //重新登录
        }
      })
}


function submitLogin() {
    wx.request({
      url: 'https://open.e.189.cn/api/logbox/oauth2/getPreMobileUrl.do',
      data: {
        appKey: 'test',
        clientType:'20010',
        format:'json',
        version:'v1.1'
      },
       header: {
      'content-type': 'application/json'
  },
      success: function(res) {
        if(res.data.result === 0){
          var _aesCacheKey = res.data.aesCacheKey;
          wx.request({
            url: res.data.preUrl,
            header: {'content-type': 'application/x-www-form-urlencoded'},
            success: function(res) {
              var data = JSON.parse(res.data.slice(5, -1))
              if(data.result === 10000){
                 wx.request({
                  url: "https://open.e.189.cn/api/logbox/oauth2/freeLogin.do",
                  header: {'content-type': 'application/x-www-form-urlencoded'},
                  data: {
                      msg: data.msg,
                      result:data.result,
                      data:data.data,
                      aesCacheKey:_aesCacheKey,
                      returnUrl:"https://wap.189.cn/wap2/logon/unifyPlatformLogonReturn.do",
                      appKey: 'test',
                      clientType:'20010',
                      version:'v1.1'},
                  success: function(res) {
                    var eLoginKeyVal = res.data.toUrl.split("?")[1];
                    getApp().globalData.Key=eLoginKeyVal  
                  }
              })

              }
            }
          })
        }

      },
      fail: function(){
                console.log('fail');
      }})
}

