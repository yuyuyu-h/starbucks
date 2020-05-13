// pages/push/push.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    money:0,
    number:0,
    disabled: true,
    // delDisabled: true,
    // 横向滚动部分图片
    pagelist: [
      {
        "url": "../../images/c1.png",
        "id": "1"
      },
      {
        "url": "../../images/c2.png",
        "id": "2"
      },
      {
        "url": "../../images/c3.png",
        "id": "3"
      }
    ],
    
    //选择产品列表
    starbucksList: [
      {
        imgnum: 0,
        url: "../../images/c1.png",
        name: "冰尚星冰粽",
        price: 1,
        delDisabled: true,
        num: 0
      },
      {
        imgnum: 1,
        url: "../../images/c2.png",
        name: "冰逸星冰粽",
        price: 2,
        delDisabled: true,
        num: 0
      },
    ],
    // 孙健淳部分数据
    choose: false,
    item_url: '',
    item_name: '',
    item_price: '',
    imgnum: 0,
    item_introduce: '',
    arr: [],
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

 //选择封面事件
 choosed: function(e) {
  //  console.log(e.currentTarget.dataset.id);
  this.setData({
    id: e.currentTarget.dataset.id
  })
 },

 //添加数量事件
 addNum: function(e) {
  //  console.log(e);
  let index = e.currentTarget.dataset.index;
  this.data.starbucksList[index].num ++;

  //获取产品列表信息
  let starbucksList = this.data.starbucksList;
  //增加礼品数量
  let number = this.data.number;
  number ++;
  this.data.number = number;

  //增加总价
  let money = this.data.money;
  let allPrice = this.data.starbucksList[index].price;
  money = money + allPrice;
  this.data.money = money;

  this.setData({
    starbucksList,
    number,
    money
  })
   this.changeBtn();
 },

// 减少数量事件
delNum: function(e) {
  let index = e.currentTarget.dataset.index;
  this.data.starbucksList[index].num--;
  //获取产品列表信息
  let starbucksList = this.data.starbucksList;
  //减少礼品数量
  let number = this.data.number;
  number--;
  this.data.number = number;

  //减少总价
  let money = this.data.money;
  // let allPrice = this.data.starbucksList[index].num * this.data.starbucksList[index].price;
  money = money - this.data.starbucksList[index].price;
  this.data.money = money;

  this.setData({
    starbucksList,
    number,
    money
  })

  this.changeBtn();
},

// 改变总价按钮
changeBtn: function() {
  let state = this.data.disabled;
  let number = this.data.number;
  if(number != 0) {
    this.setData({
      disabled: false
    })
  } else if(number === 0) {
    this.setData({
      disabled: true
    })
  }
},


//购买产品
  buySomething(e) {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    })
   
    setTimeout(function () {
      wx.navigateTo({
        url: "../index/index"
      })
    }, 1500)
  },

  // 点击出现商品信息
  item_message: function (e) {
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
  message_close: function (e) {
    let choose = false;
    this.setData({
      choose
    })
  },
  preventDefault: function () {

  }



})

