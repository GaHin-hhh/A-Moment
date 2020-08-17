Page({ 

  /**
   * 页面的初始数据
   */
  data: {
    // 中心点纬度、经度
    latitude: "",
    longitude: "",
    V_wd: 22.353995,
    V_jd: 113.531926,
    // 标记点 当前位置
    markers: [],
    // 圆
    circles: [],
    // 控件 回到当前位置
    controls: []
  },
  site: function () {
    var that = this;
    that.latitude = 0;
    that.longitude = 0;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        that.latitude = res.latitude
        that.longitude = res.longitude
        if (Number(that.juli(that.latitude, that.longitude, that.data.V_wd, that.data.V_jd)) > 0.5) {
          wx.showModal({
            title: '温馨提示',
            content: '位置不能离你大于500米',
            success: function (res) {
              if (res.confirm) {
                that.site()
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        }
        else{
          wx.showToast({
            title: '成功',
          })
        }
      }
    })
  }, 
  juli: function (lat1, lng1, lat2, lng2) {
    var radLat1 = lat1 * Math.PI / 180.0;
    var radLat2 = lat2 * Math.PI / 180.0;
    var a = radLat1 - radLat2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000;
    console.log("计算结果(KM)", s)
    var that = this
    that.setData({
      jl: s,
    })
    return s;
  },

  // 回到当前位置
  locationClick: function (event) {
    var thisBlock = this;

    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        console.log(res);

        thisBlock.setData({
          latitude: res.latitude,
          longitude: res.longitude,

          markers: [{
            iconPath: "/image/bar/wz2.png",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "当前位置",
              bgColor: "#000",
              color: "#FFFF",
              display: "ALWAYS"
            },
            label: { content: "标题" },
            anchor: {}
          }],
        })
      },
    })
  },

  // 选择位置
  selectedClick: function () {
    // 设置权限
    wx.openSetting({
      success: function (res) {
        console.log(res);

        // 选择位置
        wx.chooseLocation({
          success: function (res) {
            console.log(res);

            // 打开位置
            wx.openLocation({
              latitude: res.latitude,
              longitude: res.longitude,
              name: res.name,
              address: res.address,
            })
          },
        })
      }
    })
  },

  regionChange: function (res) {
    // 改变中心点位置
    if (res.type == "end") {
      var thisBlock = this;
      this.mapCtx = wx.createMapContext("centerChange");
      this.mapCtx.getCenterLocation({
        success: function (res) {
          console.log(res);

          thisBlock.setData({
            latitude: res.latitude,
            longitude: res.longitude,

            markers: [{
              iconPath: "/image/bar/czr_位置.png ",
              id: 0,
              latitude: res.latitude,
              longitude: res.longitude,
              width: 35,
              height: 35,
              title: "当前位置",
              callout: {
                padding: 10,
                content: "当前位置",
                bgColor: "#DC143C",
                color: "#FFFF00",
                display: "ALWAYS"
              },
              label: { content: "标题" },
              anchor: {}
            }],
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 获取当前位置
    var thisBlock = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        console.log(res);

        thisBlock.setData({
          latitude: res.latitude,
          longitude: res.longitude,

          markers: [{
            iconPath: "/image/bar/wz2.png ",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 35,
            height: 35,
            title: "当前位置",
            callout: {
              padding: 10,
              content: "当前位置",
              bgColor: "#000",
              color: "#FFF",
              display: "ALWAYS"
            },
            label: { content: "标题" },
            anchor: {}
          }],

          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            radius: 5,
            strokeWidth: 2,
            fillColor: "#FAFAD2",
            color: "#90EE90"
          }],
        })
      },
    })
  },
  onReady: function () {
    var that = this
    that.latitude = 0
    that.longitude = 0
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(res)
        that.latitude = res.latitude
        that.longitude = res.longitude
        that.setData({
          wd: that.latitude,
          jd: that.longitude,
          //V_wd: that.latitude,
          //V_jd: that.longitude,
        })
      }
    })

  },
  formSubmit: function (e) {
    console.log(e);
    var that = this;
    var formData = e.detail.value;
    wx.request({
      url: 'http://localhost:8080/XCX_server/WX_wz',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  // 跳转到其他页面
  lineClick: function (res) {
    wx.navigateTo({
      url: '../Map/mapline',
    })
  }
})