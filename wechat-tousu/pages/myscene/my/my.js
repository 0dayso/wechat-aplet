var my_model = require("../mymodel/my_model.js");
var myModel = new my_model.MyModel();

Page({
  data:{
    loginoutModalHidden: true,
    userInfoModel:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.setData({userInfoModel: myModel.getModelData()});
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  chooseHeadImgFunc: function () {
    var that = this
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed'],
      success: function (res) {
        var userInfoModel = myModel.getModelData();
        userInfoModel.avatarUrl = res.tempFilePaths;
        that.setData({
          userInfoModel: userInfoModel
        })
      }
    })
  },
  changePhoneNumFunc: function() {
    var that = this;
    var changePhoneNumUrl = '../changephonenum/changephonenum?phoneNum='+that.data.userInfoModel.phoneNum;
    wx.navigateTo({
      url: changePhoneNumUrl
    })
  },
  loginoutFunc: function() {
    this.setData({
      loginoutModalHidden: false
    })
  },
  loginoutModalChange: function(e) {
    this.setData({
      loginoutModalHidden: true
    })
  }
})