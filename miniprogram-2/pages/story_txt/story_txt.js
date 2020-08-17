// pages/story_txt/story_txt.js
Page({
 

  /**
   * 页面的初始数据
   */
  data: {
    showNAME: '',
    showAUTHOR: '', 
    datas: [

      {
        NAME: '巴别塔之恋',
        AUTHOR: '文 / 姜乐辛',  
      },
      {
        NAME: '普通朋友',
        AUTHOR: '文 / 夏阳',
      },
      {
        
        NAME: '苏丹红',
        AUTHOR: '文 / 西子',   
      },
      {
        NAME: '铃兰 · 城市',
        AUTHOR: '文 / 大斌',
            
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var goodsId = options.id;
    console.log(goodsId)
    this.setData({
      showNAME: this.data.datas[goodsId - 1].NAME,
      showAUTHOR: this.data.datas[goodsId - 1].AUTHOR,   
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