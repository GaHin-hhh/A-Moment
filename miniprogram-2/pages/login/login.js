// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
disabled: true,
btnstate: "default",
account: "",
password: "" 
},
accountInput: function (e) {
var account= e.detail.value;
// console.log(account);
if (account != '') {
this.setData({ disabled: false, btnstate: "primary", account: account });
} else {
this.setData({ disabled: true, btnstate: "default" });
}
},
pwdBlur: function (e) {
var password = e.detail.value;
// console.log(password);
if (password != '') {
this.setData({ password: password });
}
},
formSubmit: function (e) {
console.log(e);
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
    title: '成功',
})
setTimeout(function () {
  wx.switchTab({
  url: '/pages/xingqiu/xingqiu',
})
}, 2000)
} else {
wx.showToast({
title: '不成功',
})
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