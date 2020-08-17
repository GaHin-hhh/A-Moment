// pages/dy/dy.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: { 
    currentTab: 0,
    swiperIndex: 0,
    
    
    imgUrls: [
      {
        img: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2567198874.webp ', title: "小丑 Joker", date: "(2019)", content: "剧情/惊悚/犯罪/122分钟",motto: "电影《小丑》以同名DC漫画角色为基础，由华纳兄弟影业公司发行，计划于2019年10月4日上映。本片的故事将独立于DCEU之外，故事背景设置在20世纪80年代，讲述了一位生活陷入困境的脱口秀喜剧演员渐渐走向精神的崩溃，在哥谭市开始了疯狂的犯罪生涯，最终成为了蝙蝠侠的宿敌“小丑”的故事。本片由《宿醉》的导演托德菲利普斯执导，他与编剧斯科特西尔弗一起撰写了编剧。杰昆菲尼克斯本片中饰演主人公“小丑”，其他的主演包括罗伯特德尼罗、莎姬贝兹、马克马龙等"},
      { img: 'https://img3.doubanio.com/view/photo/m/public/p2574199195.webp ', title: "别告诉她 ", date: "(2019)", content: "剧情/家庭/98分钟", motto: "影片讲述一个华人家庭的奶奶被诊断罹癌，但家人选择隐瞒奶奶，假借一场婚礼的名义让所有家人回家见奶奶最后一面，但在纽约长大的碧莉（奥卡菲娜饰演）认为知道自己病况是奶奶的人权，因此在华人家庭中上演一场中西文化冲突，一部寻根家庭喜剧。故事改编自华裔女导演王子逸自己的家庭故事，她也因本片被《综艺》杂志评选2019年必关注导演之一。" },
      { img: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2542216607.webp ', title: "极限职业 ", date: "(2019)", content: "喜剧/动作/犯罪/111分钟", motto: "一支由5位掉漆警探组成的缉毒小组，因办事不力被长官钉得满头包，成天埋伏在毒贩巢穴对面的炸鸡店中监视，案情也毫无进展。既然每天都得待在炸鸡店，不如动手卖起炸鸡，看似无厘头的决定，竟让鲁蛇警探们意外找到事业第二春，卖到吓吓叫的神级美味炸鸡，让餐厅一夕爆红，订单电话接到手软！副业做太大的警探们有办法达成使命吗？对面的毒贩又是否会闻香而来呢？" },
      {
        img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.webp ', title: "这个杀手不太冷", date: "(1994)", content: "剧情/动作/犯罪/110分钟", motto: "里昂（让·雷诺饰）是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达（纳塔丽·波特曼饰)敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警（加里·奥德曼饰）杀害全家的惩罚。马蒂尔达得到里昂的留救，幸免于难，并留在里昂那里。里昂教小女孩使枪，她教里昂法文，两人关系日趋亲密，相处融洽。女孩想着去报仇，反倒被抓，里昂及时赶到，将女孩救回。混杂着哀怨情仇的正邪之战渐次升级，更大的冲突在所难免……" },
      { img: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1454259399.webp ', title: "触不可及", date: "(2011)", content: "剧情/喜剧/112分钟", motto: "舒适的豪宅环境让他倍感虚荣，但是他仍面临很多挑战：不仅要为菲利普作身体复健，还得给他洗浴、灌肠、拆信、穿丝袜等。起初，两人的思维方式与价值观大相径庭，但是，随着了解的不断深入，他们成为了朋友……" }
      
    ],
    list: [{ img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505925363.webp", title: "伯德小姐", content: "剧情/家庭" },
      { img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508259902.webp ", title: "瞒天过海：美人计 ", content: "喜剧/犯罪" },
      { img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.webp ", title: "少年的你", content: "剧情/爱情/犯罪" },
      { img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp", title: "哪吒之魔童降世", content: "剧情/喜剧/动画/奇幻" },
      { img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2220734673.webp ", title: "怦然心动", content: "剧情/喜剧/爱情" },
    ],
    list1: [{ img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2575892083.webp", title: "坂本龙一：终曲", content: "纪录片/音乐" },
      { img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.webp", title: "看不见的客人  ", content: "剧情/悬疑/惊悚/犯罪" },
      { img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2567198874.webp", title: "小丑", content: "剧情/惊悚/犯罪" },
      { img: "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2530599636.webp", title: "小偷家族", content: " 剧情/家庭/犯罪" },
      { img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.webp", title: "绿皮书", content: "剧情/喜剧/传记" },
    ],
    
  },
bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
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