Page({
  data: {
    BeginDates: '2016-11-08',
    EndDates: '2016-11-08',
    times: [{times:'9:00'},
    {times:'12:00'},],
    repeatTime: ['每天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    index: 0,
    index1: 0,
    bell: ['默认提醒音', '铃声一', '铃声二', '铃声三'],

  },

  // 点击日期组件确定事件 
  //开始时间
  bindDateBegin: function (e) {
    console.log(e.detail.value)
    this.setData({
      BeginDates: e.detail.value
    })
  },
  //结束时间

  bindDateEnd: function (e) {
    console.log(e.detail.value)
    this.setData({
      EndDates: e.detail.value
    })
  },

  // 重复时间

  bindPickerChange_time: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value

    })
  },
  // 铃声选择

  bindPickerChange_bell: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value

    })
  },

  // 提醒时间
  //bindTimeChange: function (e) {
  //  console.log("谁哦按")
  //    this.setData({
  //    times: e.detail.value
  //})
  //},


})