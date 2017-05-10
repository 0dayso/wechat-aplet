// 模型类定义：模型类除了需要从后台获取数据，还需要将数据传递给页面js文件的data中的对应属性


// 模拟接口数据
var userInfo = {
        userId:123456789,
        avatarUrl: "http://wx.qlogo.cn/mmhead/ZqDaDiccbgkiaKrOibZTVZCicFto1TLiasW9ibqH9mI4Z15TBmUohmUt8LNQ/132", 
        nickName: "nicole", 
        phoneNum:"13560386863",
        email:"13560386863@qq.com",
        gender: 1, 
        province: "Guangdong", 
        city: "Guangzhou"
    };
// ES6定义类语法
class MyModel {
    constructor() {
        // this.userId = 0;
        // this.avatarUrl = "";
        // this.nickName = "";
        // this.phoneNum = "";
        // this.email = "";
        // this.gender = 0;
        // this.province = "";
        // this.city = "";
        this.model = {}
        this.loadModelData();
    }

    loadModelData() {
        // this.userId = userInfo.userId;
        // this.avatarUrl = userInfo.avatarUrl;
        // this.nickName = userInfo.nickName;
        // this.phoneNum = userInfo.phoneNum;
        // this.email = userInfo.email;
        // this.gender = userInfo.gender;
        // this.province = userInfo.province;
        // this.city = userInfo.city;
        this.model = userInfo;
    }

    getModelData() {
        var obj = new Object();
        // obj.userId = this.userId;
        // obj.avatarUrl = this.avatarUrl;
        // obj.nickName = this.nickName;
        // obj.phoneNum = this.phoneNum;
        // obj.email = this.email;
        // obj.gender = this.gender;
        // obj.province = this.province;
        // obj.city = this.city;
        obj = this.model;
        return obj;
    }

    setModelData(model) {
        this.model = model;
    }
}

module.exports = {
    MyModel: MyModel
}