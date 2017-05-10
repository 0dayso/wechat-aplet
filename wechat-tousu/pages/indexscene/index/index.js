var index_model = require("../indexmodel/index_model.js");
var indexModel = new index_model.IndexModel();
var pageNum = 0;


Page({
  data:{
    indexList:{},
    isLoadMore:true
    },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadFirstModelData();
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
  onPullDownRefresh:function(){
    pageNum=0;
    this.loadFirstModelData();
  },
  loadMoreFunc:function(){
    pageNum++;
    indexModel.setModelData(pageNum);
    var indexModelData = indexModel.getModelData();
    this.setData({
      indexList: indexModelData.indexList,
      isLoadMore: indexModelData.isLoadMore
      });
  },
  loadFirstModelData:function(){
    var firstModelData = indexModel.getFirstModelData();
    this.setData({
      indexList: firstModelData.indexList,
      isLoadMore: firstModelData.isLoadMore
      });
  }
})