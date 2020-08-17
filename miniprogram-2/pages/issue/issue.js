// pages/issue/issue.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    t_length: 0,
    plaza_img: '/image/plaza/2.jpg',
    plaza_txt: '',
    plaza_author: '',
    plaza_time:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var time = Y + '.' + M + '.' + D
    that.setData({
      plaza_time: time,
    })
    
  },


  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },


  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        that.setData({
          plaza_img: res.tempFilePaths[0],
        })
      }
    })
  },


  bindText1: function (e) {
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    this.setData({
      t_length: len,
    })
  },

  formSubmit: function (e) {
    console.log(e);

    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'http://localhost:8080/XCX_server/WX_register2',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.showToast({
          title: '发布成功！',  
        })
        wx.navigateTo({
          url: '/pages/plaza/plaza',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (error) {
        //调用服务端登录接口失败
        that.showInfo('调用接口失败');
        console.log(error);
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
   * 
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