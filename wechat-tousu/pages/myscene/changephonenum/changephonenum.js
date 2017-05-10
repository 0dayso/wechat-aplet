var changedPhoneNum="";
var reMobile = /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
var my_model = require("../mymodel/my_model.js");
var myModel = new my_model.MyModel();

Page({
  data:{
      phoneNum:"",
      disabled: true,
      toastHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({phoneNum:options.phoneNum});
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindKeyInputFunc:function(e) {
    changedPhoneNum=e.detail.value;
    if(this.data.disabled){
      this.setData({
        disabled: false
      })
    } 
  },
  changeFunc:function() {
    if(reMobile.test(changedPhoneNum)){
      //调用修改手机号码接口
      var userInfoModel = myModel.getModelData();
      userInfoModel.phoneNum = changedPhoneNum;
      myModel.setModelData(userInfoModel);
      wx.navigateBack();
    }else{
      this.setData({toastHidden: false});
    }
  },
  toastChange: function(){
        this.setData({toastHidden: true});
  }
})