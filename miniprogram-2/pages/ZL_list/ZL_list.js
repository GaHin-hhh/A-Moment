// pages/ZL_list/ZL_list.js
Page({

  /**
   * 页面的初始数据 
   */
  data: {
    imgUrls: [  
      'http://pic.topys.cn/editor/20190117/998087144.jpeg?x-oss-process=style/article-content-pic-webp-2x',  
      'http://pic.topys.cn/editor/20190314/1196937489.jpeg?x-oss-process=style/article-content-pic-webp-2x',  
      'http://pic.topys.cn/editor/20190808/1146924380.png?x-oss-process=style/article-content-pic-webp-2x', 
    ],  
    list: [{ img: "https://pic.topys.cn/editor/20190830/852673563.jpg?x-oss-process=style/article-content-pic-webp-2x ", title: "竞赛 ‘ARCHITECTURE THAT REACTS’ 2020", place:"POLAND", content: "明天结束" },
      { img: "/image/bar/1206803589.jpg ", title: "科技艺术四十年——从林茨到深圳", place: "深圳海上文化艺术中心", content: "3天后结束" },
      { img: "http://pic.topys.cn/editor/20190626/2082130884.png?x-oss-process=style/article-content-pic-webp-2x ", title: "第12届International Design Awards 获奖名单公布", place: "SUITE 140 LOS ANGELES, CA", content: "3天后结束" },
      { img: "http://pic.topys.cn/editor/20190610/573523647.png?x-oss-process=style/article-content-pic-webp-2x ", title: "10周年盛典| IXDC2019国际体验设计大会", place: "北京国家会议中心", content: "12月27日开始" },
      { img: "http://pic.topys.cn/editor/20190307/1046895770.png?x-oss-process=style/article-content-pic-webp-2x", title: "teamLab: 油罐中的水粒子世界", place: "上海市徐汇区龙腾大道2380号", content: "12月27日开始" },
    ],
    list1: [{
      img: "https://pic.topys.cn/editor/20190910/85722030.gif?x-oss-process=style/article-content-pic-webp-2x", title: " 100品牌呈现“最好吃的夜现场”", place: "751D · PARK北京时尚设计广场东区故事", content: "12月20日开始" },
      { img: "http://pic.topys.cn/editor/20180412/1560685337.gif?x-oss-process=style/article-content-pic-webp-2x", title: "伍德吃托克「New Age New Stage 时代青年秀」", place: "北京当代MOMA 后山艺术空间", content: "3天后结束" },
      { img: "http://pic.topys.cn/editor/20180309/2104256406.jpg?x-oss-process=style/article-content-pic-webp-2x ", title: "《 The Beatles, Tomorrow 》明日披头士世界巡回展", place: "今日美术馆2号馆", content: "3天后结束" },
      {
        img: "http://pic.topys.cn/editor/20180131/254983378.jpeg?x-oss-process=style/article-content-pic-webp-2x ", title: "“独立发芽” 全球独立杂志收藏展", place: " 广东天河区天寿路35号未来社1F（林乐路公交站旁）", content: "12月27日开始" },
    { img: "http://pic.topys.cn/editor/20190307/1046895770.png?x-oss-process=style/article-content-pic-webp-2x", title: "teamLab: 油罐中的水粒子世界", place: "上海市徐汇区龙腾大道2380号", content: "12月27日开始" },
    ],
    list2: [
      { img: "http://pic.topys.cn/editor/20190517/1475663255.jpg?x-oss-process=style/article-content-pic-webp-2x", title: "D&AD Festival 2019", place: "其他THE OLD TRUMAN BREWERY, LONDON", content: "3天后结束" },
      { img: "http://pic.topys.cn/editor/20190610/573523647.png?x-oss-process=style/article-content-pic-webp-2x ", title: "10周年盛典| IXDC2019国际体验设计大会", place: "北京国家会议中心", content: "3天后结束" },
      { img: "http://pic.topys.cn/editor/20190731/976746444.jpg?x-oss-process=style/article-content-pic-webp-2x ", title: "脑洞双王PK赛：Tango v.s. Dick Ng", place: "深圳市南山区望海路1187号", content: "12月27日开始" },
      { img: "https://pic.topys.cn/editor/20190903/79065538.png?x-oss-process=style/article-content-pic-webp-2x", title: "GYIC2019第三届全球青年创新大会", place: "北京中关村丰台新兴产业基地", content: "12月27日开始" },
    ],
    indicatorDots: true, 
    autoplay: true, 
    interval: 5000,  
    duration: 1000,
    currentTab: 0,
  },
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
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