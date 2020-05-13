// pages/history/history.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    historyList:[],
    history:[],
    hasHistory:false,
    count:0,
    // arr: [],
    // arr1: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let historyList = this.data.historyList;
    let history = this.data.history;
    let count = 0;
    let me = this;
    // 购买次数
    // let arr = getApp().globalData.shoppingtime;
    // for (let i = 0; i < arr.length; i++) {
    //   for(let j=0; j<arr[i].length;j++) {
    //     if (arr[i][j] == null ) {
    //       arr[i].splice(j, 1);
    //       j = j - 1;
    //     }
    //   }
    // }
    // console.log(arr, 1111111111111)
    
    // let arr1 = [];
    // for(let i = 0;i < arr.length; i++) {
    //   arr1[i]=arr[i]
    // }
    // for (let i = 0; i < arr1.length; i++) {
    //   arr1[i].splice(arr1[i].length-1,1)
    //   }
    // console.log(arr1,222222)
    // this.setData({
    //   arr,
    //   // arr1
    // })
    wx.getStorage({
      key: 'money',
      success: function(res) {
        count = res.data;
        this.setData({
          count
        })
        console.log(this.data.count)
      }.bind(this),
    }),
    wx.getStorage({
      //获取数据的key
      key: "key",
      success: function (res) {
        // console.log(res)
        for (let i = 0; i < res.data.length; i++) {
          historyList[i] = res.data[i];
        }
        for (let i = 0; i < historyList.length; i++){
          if (historyList[i] == null) {
            historyList.splice(i, 1);
            i = i - 1; }}
        history = history.concat(historyList);
        me.setData({
          historyList,
          history,
          hasHistory: true,
        }) 
      }
    })
    
  },
  back: function() {
    wx.navigateBack({
      // url: '/pages/shopping/shoping',
      
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