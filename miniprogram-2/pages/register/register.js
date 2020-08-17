// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    disabled: true,
    btnstate: "default",
    registerName: "",
    registerPhone: "",
    registerEmail: "",
    registerPsd1: "",
    registerPsd2: "",

  },

  checkbox: function (e) {
    
  },


  nameInput: function (e) {
    var registerName = e.detail.value;
    if (registerName != '') {
      this.setData({
         disabled: false, 
        btnstate: "primary", 
         registerName: registerName 
         });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },

  passwordInput1: function (e) {
    var registerPsd1 = e.detail.value;
    if (registerPsd1 != '') {
      this.setData({ registerPsd1: registerPsd1 });
    }
  },

  passwordInput2: function (e) {
    var registerPsd2 = e.detail.value;
    if (registerPsd2 != '') {
      this.setData({ registerPsd2: registerPsd2 });
    }

  },

  phoneInput: function (e) {
    var registerPhone = e.detail.value;
    if (registerPhone != '') {
      this.setData({ registerPhone: registerPhone });
    }
  },

  emailInput: function (e) {
    var registerEmail = e.detail.value;
    if (registerEmail != '') {
      this.setData({ registerEmail: registerEmail });
    }
  },


  formSubmit: function (e) {
    console.log(e);

    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'http://localhost:8080/XCX_server/WX_register',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("注册信息："+res.data)
        wx.showToast({
          title: '注册成功',
        })
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }, 1000)
      
      },
      fail: function (error) {
        //调用服务端登录接口失败
        that.showInfo('调用接口失败');
        console.log(error);
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