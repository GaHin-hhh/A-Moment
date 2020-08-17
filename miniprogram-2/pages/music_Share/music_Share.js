// pages/music_Share/music_Share.js
Page({
  voices: '',//音频数组 
  /**
   * 页面的初始数据
   */ 
  data: {
    animationStatus: false
  },
  touchdown: function () {
    var _this = this;
    this.setData({
      animationStatus: true
    })
    //开始录音 
    wx.startRecord({
      success: function (res) {
        //临时路径,下次进入小程序时无法正常使用  
        var tempFilePath = res.tempFilePath
        console.log("tempFilePath: " + tempFilePath)
        //持久保存 
        // wx.saveFile({
        //   tempFilePath: tempFilePath,
        //   success: function (res) {
        //     //持久路径 
        //     //本地文件存储的大小限制为 100M 
        //     var savedFilePath = res.savedFilePath
        //     console.log("savedFilePath: " + savedFilePath)
        //   }
        // })

        wx.showToast({
          title: '录音成功',
          icon: 'success',
          duration: 1000
        })
        //获取录音音频列表 
        wx.getSavedFileList({
          success: function (res) {
            var voices = '';
            
            voices = tempFilePath
            // for (var i = 0; i < res.fileList.length; i++) {
            //   //格式化时间 
            //   var createTime = new Date(res.fileList[i].createTime)
            //   //将音频大小B转为KB 
            //   var size = (res.fileList[i].size / 1024).toFixed(2);
            //   var voice = { filePath: res.fileList[i].filePath, createTime: createTime, size: size };
            //   console.log("文件路径: " + res.fileList[i].filePath)
            //   console.log("文件时间: " + createTime)
            //   console.log("文件大小: " + size)
            //   voices = voices.concat(voice);
            // }
            _this.setData({
              voices: voices
            })
          }
        })
      },
      fail: function (res) {
        //录音失败 
        wx.showModal({
          title: '提示',
          content: '录音的姿势不对!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              return
            }
          }
        })
      }
    })
  
  },
  //手指抬起 
  touchup: function () {
    this.setData({
      animationStatus: false
    })
    wx.stopRecord()
  },
  // touchup: function () {
  //   console.log("手指抬起了...")
  //   this.setData({
  //     isSpeaking: false,
  //   })
  //   clearInterval(this.timer)
  //   wx.stopRecord()
  // },
  //点击播放录音 
  gotoPlay: function () {
    var that = this;
    var filePath = that.data.voices;
    //点击开始播放 
    wx.showToast({
      title: '开始播放',
      icon: 'success',
      duration: 1000
    })
    wx.playVoice({
      filePath: filePath,
      success: function () {
        wx.showToast({
          title: '播放结束',
          icon: 'success',
          duration: 1000
        })
      }
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