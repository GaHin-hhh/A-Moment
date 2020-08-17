// pages/system/sysinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//不要漏了这句，很重要
    try {
      var res = wx.getSystemInfoSync();
      Console.log("手机型号 = " + res.model) ;
      Console.log("设备像素比 = " + res.pixelRatio) ;
      Console.log("窗口宽度 = " + res.windowWidth) ;
      Console.log("窗口高度 = " + res.windowHeight) ;
      Console.log("微信设置的语言 = " + res.language) ;
      Console.log("微信版本号 = " + res.version) ;
      Console.log("操作系统版本 = " + res.system) ;
      Console.log("客户端平台 = " + res.platform) ;
    } catch (e) {
      // Do something when catch error 
    } ;
    that.setData({
      item: "手机型号 = " + res.model + "设备像素比 = " + res.pixelRatio + res.windowWidth,
      //text1: res.data
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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