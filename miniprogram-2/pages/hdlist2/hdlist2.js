// pages/hdlist2/hdlist2.js
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
        ptitle: 'D&AD Festival 2019',
        date: ' 2019-05-21 至 2019-05-23',
        place: ' THE OLD TRUMAN BREWERY, LONDON',
        jiage: '£299/1日票，£599/3日票，£799/3日票+颁奖典礼 元',
        img: 'http://pic.topys.cn/uploads/20190517/1162222568.jpg?x-oss-process=style/event_cover',
        img2: 'http://pic.topys.cn/uploads/20190517/1162222568.jpg?x-oss-process=style/event_cover',
      },
      {
        id: 2,
        ptitle: '10周年盛典| IXDC2019国际体验设计大会',
        date: '2019-07-11 至 2019-07-14',
        place: '北京国家会议中心',
        jiage: '5000-11400 元',
        img: 'http://pic.topys.cn/uploads/20190610/99411443.png?x-oss-process=style/event_cover',
        img2: 'http://pic.topys.cn/uploads/20190610/99411443.png?x-oss-process=style/event_cover',
      },
      {
        id: 3,
        ptitle: '脑洞双王PK赛：Tango v.s. Dick Ng',
        date: ' 2019-08-04 至 2019-08-04',
        place: '深圳市南山区望海路1187号',
        jiage: '免费',
        img: 'http://pic.topys.cn/uploads/20190731/176994846.jpg?x-oss-process=style/event_cover',
        img2: 'http://pic.topys.cn/uploads/20190731/176994846.jpg?x-oss-process=style/event_cover',
      },
      {
        id: 4,
        ptitle: 'GYIC2019第三届全球青年创新大会',
        date: '2019-10-24 至 2019-10-24',
        place: '北京中关村丰台新兴产业基地·中心会堂',
        jiage: ' 59-3800 元',
        img: 'https://pic.topys.cn/uploads/20190903/213407400.jpeg?x-oss-process=style/event_cover',
        img2: 'https://pic.topys.cn/uploads/20190903/213407400.jpeg?x-oss-process=style/event_cover',
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