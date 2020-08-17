// pages/hdlist/hdlist.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    isFavorite: "false",
    ptitle: '',
    pdate: '',
    pplace: '',
    pjiage: '',
    pimg: '',
    pimg2: '',
    dataList: [
      {
        id: 1,
        ptitle: 'ARCHITECTURE THAT REACTS 2020',
        date: '2019-06-01 至 2020-02-01',
        place:'POLAND',
        jiage:'USD 23-150 元',
        img:'https://pic.topys.cn/uploads/20190830/1395690774.jpg?x-oss-process=style/event_cover ',
        img2: 'https://pic.topys.cn/uploads/20190830/1395690774.jpg?x-oss-process=style/event_cover',
      }, 
      {
        id: 2,
        ptitle: '科技艺术四十年——从林茨到深圳',
        date: '2019-11-02 至 2020-02-16',
        place: '华侨城商业中心', 
        jiage: '早鸟票￥48 预售票￥68 正价￥118 元',
        img: 'https://pic.topys.cn/uploads/20191023/970675703.jpg?x-oss-process=style/event_cover',
        img2: 'https://pic.topys.cn/uploads/20191023/970675703.jpg?x-oss-process=style/event_cover',
      }, 
      {
        id: 3,
        ptitle: '第12届International Design Awards 获奖名单公布',
        date: ' 2019-06-26 至 2019-08-30',
        place: 'SUITE 140 LOS ANGELES, CA',
        jiage: '免费',
        img: 'http://pic.topys.cn/uploads/20190625/2137013495.png?x-oss-process=style/event_cover',
        img2: 'http://pic.topys.cn/uploads/20190625/2137013495.png?x-oss-process=style/event_cover',
      }, 
      {
        id: 4,
        ptitle: '10周年盛典| IXDC2019国际体验设计大会',
        date: '2019-07-11 至 2019-07-14',
        place: '北京国家会议中心',
        jiage: '5000-11400 元',
        img: 'http://pic.topys.cn/uploads/20190610/99411443.png?x-oss-process=style/event_cover',
        img2: 'http://pic.topys.cn/uploads/20190610/99411443.png?x-oss-process=style/event_cover',
      }, 
      {
        id: 5,
        ptitle: 'teamLab: 油罐中的水粒子世界',
        date: '2019-03-23 至 2019-08-24',
        place: '上海市徐汇区龙腾大道2380号',
        jiage: ' 120元单人平日票 元',
        img: 'http://pic.topys.cn/uploads/20190221/1810025796.jpeg?x-oss-process=style/event_cover',
        img2: 'http://pic.topys.cn/uploads/20190221/1810025796.jpeg?x-oss-process=style/event_cover',
      }, 
    ],
  },
  collect: function () {
    var that = this;
    var isFavorite = that.data.isFavorite;
    //收藏
    if (isFavorite == 'false') {
      var roomId = that.data.roomId;
      that.setData({
        isFavorite: 'true'
      })
      wx.showToast({
        title: '收藏成功',
        icon: 'none'
      })
    }
    //取消收藏
    else if (isFavorite == 'true') {
      var roomId = that.data.roomId;
      that.setData({
        isFavorite: 'false'
      })
      wx.showToast({
        title: '取消收藏',
        icon: 'none'
      })
    }

  },
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 23.1322910000,//要去的纬度-地址
          longitude: 113.3226420000,//要去的经度-地址
          name: "O'MALL华侨城商业中心",
          address: '广州市天河城'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodsId = options.goodsId;
    this.setData({
      ptitle: this.data.dataList[goodsId].ptitle,
      pdate: this.data.dataList[goodsId].date,
      pplace: this.data.dataList[goodsId].place,
      pjiage: this.data.dataList[goodsId].jiage,
      pimg: this.data.dataList[goodsId].img,
      pimg2: this.data.dataList[goodsId].img2,
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