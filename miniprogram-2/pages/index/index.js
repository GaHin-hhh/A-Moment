//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentId: '1',
    section: [{
      name: '发布',
      typeId: '1'
    }, {
      name: '收藏',
      typeId: '2'
    }, {
      name: '打卡',
      typeId: '3'
    }],
    list: [{ img: "/image/bar/IMG_6148.JPG  ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6149.JPG  ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6150.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6151.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6152.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6153.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6154.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6155.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6156.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
      { img: "/image/bar/IMG_6157.JPG ", title: "南方车站的聚会", content: "剧情/犯罪" },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  handleTap: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      this.setData({
        currentId: id
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
