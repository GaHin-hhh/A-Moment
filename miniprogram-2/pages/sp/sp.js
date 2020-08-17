// pages/sp/sp.js
Page({

  /**
   * 页面的初始数据 
   */
  data: {
    isLike: true,
    // banner
    imgUrls: [
      "/image/bar/3.jpg",
      "/image/bar/3.jpg",
      "/image/bar/3.jpg",
      "/image/bar/3.jpg",
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    showTitle: '', //详情页显示标题；
    showjg: '', //详情页显示图片；
    showxl: '', //详情页显示图片；
    dataList: [
      {
        goods_id: 1,
        goods_title: '玫瑰项链',
        goods_xiaoliang: '0',
        goods_price: '60'
      }, {
        goods_id: 2,
        goods_title: '太阳眼镜',
        goods_xiaoliang: '0',
        goods_price: '70'
      }, {
        goods_id: 3,
        goods_title: '太阳眼镜',
        goods_xiaoliang: '0',
        goods_price: '80'
      }, {
        goods_id: 4,
        goods_title: '平光镜',
        goods_xiaoliang: '0',
        goods_price: '90'
      }, {
        goods_id: 5,
        goods_title: '打火机项链',
        goods_xiaoliang: '0',
        goods_price: '90'
      }
      ],
    // 商品详情介绍
    detailImg: [
      "/image/bar/4.jpg",
      "/image/bar/4.jpg",     
    ],
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodsId = options.goodsId;
    this.setData({
      showTitle: this.data.dataList[goodsId].goods_title,
      showjg: this.data.dataList[goodsId].goods_price,
      showxl: this.data.dataList[goodsId].goods_xiaoliang,
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