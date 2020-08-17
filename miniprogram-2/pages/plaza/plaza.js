// pages/plaza/plaza.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //产品列表数据；
    datas: [],
    IMG: ['/image/SP_list/1.jpg', '/image/SP_list/2.jpg', '/image/SP_list/3.jpg', '/image/SP_list/4.jpg','/image/SP_list/1.jpg',],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:8080/XCX_server/WX_plaza',
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