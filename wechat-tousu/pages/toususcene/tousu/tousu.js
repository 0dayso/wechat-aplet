var uploadImageList=[];

Page({
  data:{
    imageList: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  uploadImgFunc: function () {
    var that = this
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed'],
      success: function (res) {
        uploadImageList.push(res.tempFilePaths[0]);
        that.setData({
          imageList: uploadImageList
        })
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src

    wx.previewImage({
      current: current,
      urls: this.data.imageList,
      success: function (res) {
         var localIds = res.localIds;
      },
      fail: function (res) {
         var localIds = res.localIds;
      },
      complete: function (res) {
         var localIds = res.localIds;
      }
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
})