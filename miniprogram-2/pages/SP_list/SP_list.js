// pages/SP_list/SP_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gird: [{ SPID: '43101', SPMC: '商品011', SPJG: '$48', SPKC: '600', SPPIC: '001.jpg' }, { SPID: '43102', SPMC: '商品021', SPJG: '$65', SPKC: '76', SPPIC: '002.jpg' }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      //url:'http:itcmsg.bnuz.edu.cn:8090/test/XCXSP_list',//先不写
      url: 'http://172.31.141.128:8080/Tajax/SP_list',
      //url:'http://alpha.bnuz.edu.cn/test/XCXSP_list',//先不写
      data: {
        message: 'ty is The most handsome man in the ESTA',
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        that.setData({
          list_data: res.data,
          //text1:res.data
        });
        console.log(res.data);
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