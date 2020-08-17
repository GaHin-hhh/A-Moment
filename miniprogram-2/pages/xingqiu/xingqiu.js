// pages/xingqiu/xingqiu.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    isFavorite:"false",
    isFavorite1: "false",
    imgUrls: [
      {
        url:'/image/story/2.jpg ',
      link:'/pages/story/story'
      },
      {
        url: '/image/bar/IMG_5536.JPG  ',
        link: '/pages/story/story'
      },
      {
        url: '/image/story/2.jpg',
        link: '/pages/story/story'
      },
      {
        url: '/image/story/4.jpg  ',
        link: '/pages/story/story'
      },
      {
        url: '/image/story/2.jpg ',
        link: '/pages/story/story'
      },
    ],
    list: [{ img: "https://pic.topys.cn/editor/20190830/852673563.jpg?x-oss-process=style/article-content-pic-webp-2x ", title: "竞赛 ‘ARCHITECTURE THAT REACTS’ 2020", content: "截至：2020/01/12" },
      { img: "https://pic.topys.cn/editor/20191023/1206803589.jpg?x-oss-process=style/article-content-pic-webp-2x", title: "科技艺术四十年——从林茨到深圳", content: "截至：2020/01/12" }, 
      { img: "http://pic.topys.cn/editor/20190626/2082130884.png?x-oss-process=style/article-content-pic-webp-2x ", title: "第12届International Design Awards 获奖名单公布", content: "截至：2020/01/12" },
    ],
    list2: [{ img: "https://pic.topys.cn/editor/20190910/85722030.gif?x-oss-process=style/article-content-pic-webp-2x ", title: "100品牌呈现“最好吃的夜现场", content: "截至：2020/01/12"},
      { img: "http://pic.topys.cn/editor/20180412/1560685337.gif?x-oss-process=style/article-content-pic-webp-2x ", title: "伍德吃托克「New Age New Stage 时代青年秀」", content: "截至：2020/01/12" },
      { img: "http://pic.topys.cn/editor/20180309/2104256406.jpg?x-oss-process=style/article-content-pic-webp-2x", title: "《 The Beatles, Tomorrow 》明日披头士世界巡回展", content: "截至：2020/01/12" },
    ],
    list3: [{ img: "http://pic.topys.cn/editor/20190517/1475663255.jpg?x-oss-process=style/article-content-pic-webp-2x ", title: "D&AD Festival 2019", content: "截至：2020/01/12" },
      { img: "http://pic.topys.cn/editor/20190610/573523647.png?x-oss-process=style/article-content-pic-webp-2x ", title: "10周年盛典| IXDC2019国际体验设计大会", content: "截至：2020/01/12" },
      { img: "http://pic.topys.cn/editor/20190731/976746444.jpg?x-oss-process=style/article-content-pic-webp-2x ", title: "脑洞双王PK赛：Tango v.s. Dick Ng", content: "截至：2020/01/12" },
    ],
    list4: [{ id:1,img: "/image/bar/1206803589.jpg ", title: "梦呓", content: "2019.12.04·成都", wenan: "我始终坚信我的灵魂死在了十八岁", img2:"/image/bar/IMG_5536.JPG"},
      { id: 2, img: "/image/bar/1206803589.jpg ", title: "梦呓", content: "2019.12.04·成都", wenan: "我始终坚信我的灵魂死在了十八岁", img2: "/image/bar/IMG_5536.JPG" },
      { id: 3,img: "/image/bar/1206803589.jpg ", title: "梦呓", content: "2019.12.04·成都", wenan: "我始终坚信我的灵魂死在了十八岁", img2: "/image/bar/IMG_5536.JPG" },
    ],

    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动播放
    interval: 3000, //停留时间间隔
    duration: 1000, //播放时长
    previousMargin: '50px', //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: '50px', //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    circular: true, //是否采用衔接滑动
    currentSwiperIndex: 0, //swiper当前索引
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
        title: '点赞成功',
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
        title: '取消点赞',
        icon: 'none'
      })
    }

  },

  collect1: function () {
    var that = this;
    var isFavorite1 = that.data.isFavorite1;
    //收藏
    if (isFavorite1 == 'false') {
      var roomId = that.data.roomId;
      that.setData({
        isFavorite1: 'true'
      })
      wx.showToast({
        title: '收藏成功',
        icon: 'none'
      })
    }
    //取消收藏
    else if (isFavorite1 == 'true') {
      var roomId = that.data.roomId;
      that.setData({
        isFavorite1: 'false'
      })
      wx.showToast({
        title: '取消收藏',
        icon: 'none'
      })
    }

  },

  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current

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
  },
})