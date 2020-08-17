
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    //默认地址
    latitude: 22.353995,
    longitude: 113.531926,
    //图书馆位置：经度113.531926，纬度22.353995；
    lat1: "",
    lng1: "",
    state: "",
    
  },

  //获取经纬度
  getLocation: function (e) {
    var that = this

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(res)

        that.latitude = res.latitude
        that.longitude = res.longitude

        that.setData({
          lng1: that.longitude,
          lat1: that.latitude,
        })
        that.distance(that.latitude, that.longitude, that.data.latitude,
          that.data.longitude)
      }
    })
  },

  //查看当前位置
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },

 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
    

  },

  
  //计算当前位置到图书馆距离
  distance: function (la1, lo1, la2, lo2) {
    console.log(la1, lo1, la2, lo2)
    var La1 = la1 * Math.PI / 180.0;
    var La2 = la2 * Math.PI / 180.0;
    var La3 = La1 - La2;
    var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
    s = s * 6378.137;//地球半径
    s = Math.round(s * 10000) / 10000;
    console.log("到图书馆距离为(KM)", s)
    var that = this
    that.setData({
      jl: s,
    })
    
  },

//当前位置打卡
  site: function (e) {
    var that = this;
    var jili = that.data.jl;  
    if (jili > 0.5) {
      wx.showModal({
        title: '温馨提示',
        content: '距离大于500米，打卡失败！',
      });
      that.setData({
        state:"失败",
      })

    }
    else if (jili < 0.5) {
      wx.showModal({
        title: '温馨提示',
        content: '打卡成功！',
      });
      that.setData({
        state: "成功",
      })
    }
    else{
      wx.showModal({
        title: '温馨提示',
        content: '获取距离失败',
      });
    }
  },


//提交表单，保存到数据库
  formSubmit: function (e) {
    console.log(e);

    var that = this;
    var formData = e.detail.value
    wx.request({
      url: 'http://localhost:8080/XCX_server/WX_gps',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("数据已保存数据库")
        console.log("打卡状态："+that.data.state)
      },
      fail: function (error) {
        //调用服务端登录接口失败
        that.showInfo('调用接口失败');
        console.log(error);
      }
    })
  },

  onLoad: function (options) {

  },

})