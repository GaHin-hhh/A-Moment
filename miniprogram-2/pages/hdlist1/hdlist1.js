// pages/hdlist1/hdlist1.js
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
          ptitle: '艺术地标文艺中秋玩乐指南 | 100品牌呈现“最好吃的夜现场”',
          date: '2019-06-01 至 2020-02-01',
          place:' 751D · PARK北京时尚设计广场东区故事',
          jiage:'30/48/88 元',
          img:'https://pic.topys.cn/uploads/20190910/1362041774.jpeg?x-oss-process=style/event_cover',
          img2: 'https://pic.topys.cn/uploads/20190910/1362041774.jpeg?x-oss-process=style/event_cover',
        },
        {
          id: 2,
          ptitle: '伍德吃托克「New Age New Stage 时代青年秀」',
          date: '2018-04-14 至 2018-04-15',
          place: '北京当代MOMA 后山艺术空间',
          jiage: '100 元',
          img: 'http://pic.topys.cn/uploads/20180412/107791551.jpeg?x-oss-process=style/event_cover',
          img2: 'http://pic.topys.cn/uploads/20180412/107791551.jpeg?x-oss-process=style/event_cover',
        },
        {
          id: 3,
          ptitle: '《 The Beatles, Tomorrow 》明日披头士世界巡回展',
          date: ' 2018-03-24 至 2018-05-27',
          place: '今日美术馆2号馆',
          jiage: '60 元',
          img: 'http://pic.topys.cn/uploads/20180309/681511404.jpg?x-oss-process=style/event_cover',
          img2: 'http://pic.topys.cn/uploads/20180309/681511404.jpg?x-oss-process=style/event_cover',
        },
        {
          id: 4,
          ptitle: '“独立发芽” 全球独立杂志收藏展',
          date: '2018-01-26 至 2018-02-09',
          place: '广东天河区天寿路35号未来社1F',
          jiage: '免费',
          img: 'http://pic.topys.cn/uploads/20180131/248981570.jpg?x-oss-process=style/event_cover',
          img2: 'http://pic.topys.cn/uploads/20180131/248981570.jpg?x-oss-process=style/event_cover',
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
      if(isFavorite == 'false') {
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