Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
      username:'心情惬意,来杯咖啡',
      tel:'+86 13xx xxxx xxx',
      email:'@163.com',
      address:'北京市昌平区北七家镇'
    }
  },
  submit:function (e) {
    
  

    let newObj = e.detail.value;

    wx.setStorage({
      key: 'person_msg',
      data: newObj,
      success: function (res) {
      }
    })


    wx.showToast({
      title:'保存成功',
      icon:'success',

      duration:2000
    })
    setTimeout (function() {
      wx.navigateTo({
        url: '../index/index?a=1&b=2&c=3'
      })
    }, 1500)
  },
   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.getStorage({
      key: 'person_msg',
      success: function (res) {
        let obj = res.data;
        console.log(res.data);
        this.setData({
          obj
        })
      }.bind(this),
    })
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