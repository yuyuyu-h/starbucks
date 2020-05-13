// pages/shopping/shoping.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    starbaucksist:[],
    add1:"/images/jjjjj.png",
    add:"/images/add.png",
    count:0,
    number:0,
    disabled: true,
    titlePic:'',
    listPic:[],
    id:1,
    goupic: '/images/gou.png',
    choose:false,
    item_url:'',
    item_name:'',
    item_price:'',
    imgnum:0,
    item_introduce:'',
    arr:[],
    introduce: [
      {
        thetime: '2018.05.27-2021.05.26',
        themake: '一任意季节限定特饮（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。'
      },
      { thetime: '2018.05.27-2021.05.26', themake: '一拿铁（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。' },
      { thetime: '2018.05.27-2018.11.05', themake: "一本券为冷萃冰咖啡（大杯）饮料券。冷萃冰咖啡为季节性饮品，且每日限量供应，具体以门店实际供应 f 清况为准；一此季节性饮品电子券的有效期为 2018 年 3 月 20 日起至 2018 年 11 月 5 日，有效期届满后该券即失效，原购买人只能根据（（星巴克用星说社交礼品平台须知 》 申请退货退款；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此季节性饮品电子券需一次性使用完毕，一经使用，即失效；一使用季节性饮品电子券在门店消费时，同时出示有效星享卡可累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一馥丙白（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一焦糖玛奇朵（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一本券为绵云冷萃冰咖啡（大杯）饮料券。绵云冷萃冰咖啡（大杯）为季节性饮品，且每日限量供应，具体以门店实际供应情况为准；一此季节性饮品电子券的有效期为 2018 年 4 月 10 日起至 2018 年 11 月 5 日，有效期届满后该券即失效，原购买人只能根据（（星巴克用星说社交礼品平台须知 》 申请退货退款；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知》  ）兑换其出售的指定商品；一此季节性饮品电子券需一次性使用完毕，一经使用，即失效；一使用季节性饮品电子券在门店消费时，同时出示有效星室卡可累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。" },
      { thetime: '2018.05.27-2021.05.26', themake: "一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。" },
    ]
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从首页请求过来
    let page = options.page;
    // const page = 0;
    
    wx.request({
      url:'https://www.easy-mock.com/mock/5adecfefc57e6f08ff16594b/example/starbucks',
      method: "get",
      success:(res) => {
        // 获取starbuckslist、listPic
        this.setData({
          starbucksList:res.data.data.starbucksList,
          listPic: res.data.data.listPic[page].pagelist,
          titlePic: res.data.data.listPic[page].pagelist[0].url
        })
      }
    })
  },
  // 选择图片
  showChoose(e) {
    let id = e.currentTarget.dataset.id;
    let url = e.currentTarget.dataset.url;
    // console.log(e)
    this.setData({
      titlePic: url,
      id: id
    })
  },
  // 加数字
  addnum: function (e) {
    // console.log(e.target);
    let count = this.data.count;
    let number = this.data.number;
    let index = e.currentTarget.dataset.index;
    let status = e.currentTarget.dataset.status;
    let price = Number(this.data.starbucksList[index].price);
    let starbucksList = this.data.starbucksList;
    let num = Number(this.data.starbucksList[index].num);
    let url = this.data.starbucksList[index].url;
    let name = this.data.starbucksList[index].name;
    num++;
    number++;
    this.data.starbucksList[index].num=num;
    count+=price;
    let info = {num,price,url,name};
    let arr=this.data.arr;
    arr[index]=info;
    wx.setStorage({
      key: 'key',
      data: arr,
      success: function(res) {
      }
    })
    this.setData({
      arr,
      status,
      starbucksList,
      number,
      count
    })
    this.checkNum()
  },
  // 减数字
  delnum: function (e) {
    let count = this.data.count;
    let number = this.data.number;
    let index = e.currentTarget.dataset.index;
    let status = e.currentTarget.dataset.status;
    let price = Number(this.data.starbucksList[index].price);
    let starbucksList = this.data.starbucksList;
    let num = Number(this.data.starbucksList[index].num);
    let url = this.data.starbucksList[index].url;
    let name = this.data.starbucksList[index].name;
    // if(num==0){
    //   return;
    // }
    num--;
    number--;
    this.data.starbucksList[index].num = num;
    count -= price;
    let info = { num, price, url, name };
    let arr = this.data.arr;
    if(num>0){
      arr[index] = info;
    }
    wx.setStorage({
      key: 'key',
      data: arr,
      success: function (res) {
      }
    })
    this.setData({
      arr,
      status,
      starbucksList,
      number,
      count
    })
    this.checkNum()
  },
  // 检测购买的商品是否为0
  checkNum: function() {
    let disabled = this.data.disabled;
    let number = this.data.number
    if (number === 0) {
      this.setData({
        disabled: true,
        // addNum:'/images/add.png',
      })
    } else if (number != 0) {
      this.setData({
        disabled: false,
        // addNum:'/images/jjjjj.png',
      })
    }
  },
  // 点击出现商品信息
  item_message: function(e) {
    let choose = true;
    let item_url = e.currentTarget.dataset.item_url;
    let item_name = e.currentTarget.dataset.item_name;
    let item_price = e.currentTarget.dataset.item_price;
    let imgnum = e.currentTarget.dataset.imgnum;
    let item_introduce = this.data.introduce[imgnum].themake.split("；");
    // console.log(item_introduce)
    this.setData({
      choose,
      item_url,
      item_name,
      item_price,
      imgnum,
      item_introduce
    })
  },
  // 点击关闭信息
  message_close:function(e) {
    let choose = false;
    this.setData({
      choose
    })
  },
  preventDefault: function() {

  },
  // 购买事件
  buy: function() {
    // let arr=this.data.arr;
    // arr.push(this.data.count);
    // let newarr = arr;
    // getApp().globalData.shoppingtime.push(newarr);
    // console.log(getApp().globalData.shoppingtime)
    // 消息提示框
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    })
    let count = this.data.count;
    wx.setStorage({
      key: 'money',
      data:count,
      success: function (res) {
      }
    })
    setTimeout(function () {
      wx.redirectTo({
        url: "../history/history"
      })
    }, 1500)
  },
  search_stores: function() {
    wx.navigateTo({
      url: '../../pages/moredoors/moredoors'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    
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