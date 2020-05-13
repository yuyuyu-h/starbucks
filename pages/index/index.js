//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picture: [
      { url: "/images/ff.jpg", page: "1" },
      { url: "/images/kv-dumpling.jpg", page: "8" },
    ],
    newImage: "/images/wml.png",
    bzimg: '/images/kele.png',
    List: []
  }
  ,
  shoppingCart(e) {
    let page = e.currentTarget.dataset.page;

    wx.navigateTo({
      url: `/pages/shopping/shoping?page=${page}`
    })

  },
  imageto(e) {
    let page = e.currentTarget.dataset.page;
    if (page == "8") {
      wx.navigateTo({
        url: "/pages/gift/gift?page"
      })

    }
    wx.navigateTo({
      url: `/pages/shopping/shopping?page=${page}`
    })


  },
  buttonTo(e) {
    wx.navigateTo({
      url: `/pages/push/push`
    })
  },
  onReady: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5adecfefc57e6f08ff16594b/example/starbucks',
      success: (res) => {
        // console.log(res)
        this.setData({
          List: [
            {
              "page": "0",
              "img": "/images/b2.png",
              "title": "只想和你在一起"
            },
            {
              "page": "1",
              "img": "/images/b3.png",
              "title": "分享相聚的味道"
            },
            {
              "page": "2",
              "img": "/images/b4.png",
              "title": "可爱第一名"
            },
            {
              "page": "3",
              "img": "/images/b5.png",
              "title": "秋意浓"
            },
            {
              "page": "4",
              "img": "/images/b6.png",
              "title": "为你点赞"
            },
            {
              "page": "5",
              "img": "/images/b7.png",
              "title": "收获的季节"
            },
            {
              "page": "6",
              "img": "/images/b1.png",
              "title": "有你真好"
            },
            {
              "page": "7",
              "img": "/images/b8.png",
              "title": "宝宝 生快"
            }
          ]
        })
      }
    })

  }
  //事件处理函数

})
