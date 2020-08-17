// pages/zc/zc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        btnstate:'defalut',
        disabled:true
  },
      userBlur(e){
        var content = e.detail.value;
        if(content!= ''){
  this.setData({
    btnstate: 'primary',
    disabled: false
  })
}else {
  this.setData({
    btnstate: 'default',
    disabled: true
  })
}
  },
formSubmit(e){
  console.log(e);
  // var user = new Object();
  // user.account = e.detail.value.loginName;
  // user.password = e.detail.value.password;
  // user.company = e.detail.value.company;
  // user.userName = e.detail.value.userName;
  // user.code = e.detail.value.code;
  // user.mobile = e.detail.value.mobile;
  // user.switch = e.detail.value.switch;
  // wx.setStorageSync('user', user);
  // wx.showToast({
  // title: "注册成功",
  // icon: "success",
  // duration: 1000,
  // success: function () {
  // wx.navigateTo({
  // url: '../login/login'
  // })
  // }
  // });
  var that = this;
  var formData = e.detail.value;
  wx.request({
    url: 'http://localhost:8080/XCX_server/WX_login',
    data: formData,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      console.log(res.data)
      if (res.data.code == 200) {
        wx.showToast({
          title: '注册成功',
        })
        setTimeout(function () {
          wx.navigateTo({
            url: '/pages/SP_info/SP_info',
          })
        }, 2000)
      }
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