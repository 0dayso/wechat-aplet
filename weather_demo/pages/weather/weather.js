//weather.js
//获取应用实例

var weatherutil = require('../../utils/weatherutil.js')

Page({

  data: {
    weather: {}
  },
  onLoad: function () {
    
    var that = this;

    weatherutil.loadWeatherData(function(data){
      
      console.log(data);
      that.setData({
        weather: data
      });
      // that.data.weather = data;

    });    

  }

})
