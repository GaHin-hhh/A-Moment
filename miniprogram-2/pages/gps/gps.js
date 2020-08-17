// pages/gps/gps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    V_wd: 22.353995,
    V_jd: 113.531926,
   //经度113.531926，纬度22.353995；
  },
  site: function () { 
    var that = this;
    that.latitude=0;
    that.longitude=0;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        that.latitude = res.latitude
        that.longitude = res.longitude      
        if (Number(that.juli(that.latitude, that.longitude, that.data.V_wd, that.data.V_jd))> 0.5){
          wx.showModal({
            title: '温馨提示',
            content: '位置不能离你大于500米',
            success: function (res) {
              if (res.confirm) {
                that.site()
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        } 
        //console.log('两点之间距离多少km：', juli(that.lat1, that.lng1, that.data.V_wd, that.data.V_jd));
      }
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    that.latitude = 0
    that.longitude = 0
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
       // console.log(res)
        that.latitude = res.latitude
        that.longitude = res.longitude
        that.setData({
          wd: that.latitude,
          jd: that.longitude,
          //V_wd: that.latitude,
          //V_jd: that.longitude,
        })
        that.juli(that.latitude, that.longitude, that.data.V_wd, that.data.V_jd)
      }
    })
    
  },
  juli: function (lat1, lng1, lat2, lng2) {
    var radLat1 = lat1 * Math.PI / 180.0;
    var radLat2 = lat2 * Math.PI / 180.0;
    var a = radLat1 - radLat2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    console.log("计算结果(KM)", s)
    var that = this
    that.setData({
      jl: s,
    })
    return s; 
  },

 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
