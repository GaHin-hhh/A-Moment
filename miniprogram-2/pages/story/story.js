// pages/story/story.js
var util = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    day:'',
    month:'',
    year:'',
    datas:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //年  
    var Y = date.getFullYear();

    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    this.setData({
      day: D,
      year:Y,
      month:M,
    })

    var that = this
    wx.request({
      url: 'http://localhost:8080/XCX_server/WX_story',
      data: {
        message: 'ty is the most'
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          datas: res.data,//设置数据
        });
        console.log(res.data)
      },
      fail: function (res) {
        console.log("fail to connect");
      }
    })

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