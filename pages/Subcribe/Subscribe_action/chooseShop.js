// pages/myCustomers/chooseShop.js
var app = getApp();
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var model = require('../../../utils/model.js');
var wxpay = require('../../../utils/wxpay.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:0,
    currentTab:'0',
    checked:false,
    // postion:null,
    postion:[1,3,5,6,9],
    clickRadio:'',
    noLimitTime:'',
    adjustTime:0,
    noLimitStore:'',
    adjustStore:0,
    storeId:'',
    barberId:'',
    clickserver:'',
    allMoney:'',
    chooseStore:'',
    postion2:[0,0,0,0,0,0,0,0,0],
    barberName:'',
    re:false,
    shopAddress:'',
    returnStatus:'',
    flag1: 0,
    flag2: 0,
    flag3: 0,
    flag4: 0,
    flag5: 0,
    flag6: 0,
    flag7: 0,
    flag8: 0,
    flag9: 0,
    status1: 0,
    status2: 0,
    status3: 0,
    status4: 0,
    status5: 0,
    status6: 0,
    status7: 0,
    status8: 0,
    status9: 0,
    clickState1: 0,
    clickState2: 0,
    clickState3: 0,
    clickState4: 0,
    clickState5: 0,
    clickState6: 0,
    clickState7: 0,
    clickState8: 0,
    clickState9: 0,
    shopList:""
  },
  getPostion: function () {
    // console.log('getStoreList ' + api.StoreList);
    //wx.showNavigationBarLoading();
    var that = this;
    var bizContent = {
      "barberId": "1"
    }
    util.weshowRequest(
      api.BarberSubscribeManage,
      {
        barberId: "1"
      },
      'POST').then(res => {
        var resJson=JSON.stringify(res.data.bizContent);
        console.log('resJson:: ' + resJson);
        that.setData({
          postion: resJson.positions
        });
        console.log("this.postion::" + that.data.postion);
        // console.log(that.data);
        util.stopRefreshing;
        util.waitUpdate;
      }).catch((err) => {
        console.log(' err :' + err);
        // fail
        util.stopRefreshing;
        // wx.showToast({
        //   title: '正在获取数据…',
        //   icon: 'loading',
        //   duration: 3000,
        //   mask: true
        // });
      });
  },
  choiceTime:function(e){
    var page = this;
    var pos = page.data.postion;
    var id = e.target.id;
    // page.setData({
  
    //   postion2: id
    // })
    for (var i = 0; i < pos.length; i++) {
      if (parseInt(id) == pos[i]) {
        switch (id) {
          case '1':
            if (page.data.clickState1 == 0) {
              page.setData({
                flag1: 1,
                clickState1: 1,
                'postion2[0]':id,
              });
            } else {
              page.setData({
                flag1: 0,
                clickState1: 0,
                 'postion2[0]': 0,
              });
            }
            break;
          case '2':
            if (page.data.clickState2 == 0) {
              page.setData({
                flag2: 2,
                clickState2: 1,
                'postion2[1]': id,
              });
            } else {
              page.setData({
                flag2: 0,
                clickState2: 0,
                'postion2[1]': 0
              });
            }
            break;
          case '3':
            if (page.data.clickState3 == 0) {
              page.setData({
                flag3: 3,
                clickState3: 1,
                 'postion2[2]': id,
              });
            } else {
              page.setData({
                flag3: 0,
                clickState3: 0,
                'postion2[2]':0
              });
            }
            break;
          case '4':
            if (page.data.clickState4 == 0) {
              page.setData({
                flag4: 4,
                clickState4: 1,
                  'postion2[3]': id,
              });
            } else {
              page.setData({
                flag4: 0,
                clickState4: 0,
                  'postion2[3]': 0
              });
            }
            break;
          case '5':
            if (page.data.clickState5 == 0) {
              page.setData({
                flag5: 5,
                clickState5: 1,
                  'postion2[4]': id,
              });
            } else {
              page.setData({
                flag5: 0,
                clickState5: 0,
                'postion2[4]': 0,
              });
            }
            break;
          case '6':
            if (page.data.clickState6 == 0) {
              page.setData({
                flag6: 6,
                clickState6: 1,
                'postion2[5]': id,
              });
            } else {
              page.setData({
                flag6: 0,
                clickState6: 0,
                  'postion2[5]': 0,
              });
            }
            break;
          case '7':
            if (page.data.clickState7 == 0) {
              page.setData({
                flag7: 7,
                clickState7: 1,
                'postion2[6]': id,
              });
            } else {
              page.setData({
                flag7: 0,
                clickState7: 0,
                'postion2[6]': 0,
              });
            }
            break;
          case '8':
            if (page.data.clickState8 == 0) {
              page.setData({
                flag8: 8,
                clickState8: 1,
                  'postion2[7]': id,
              });
            } else {
              page.setData({
                flag8: 0,
                clickState8: 0,
                'postion2[7]': 0,
              });
            }
            break;
          case '9':
            if (page.data.clickState9 == 0) {
              page.setData({
                flag9: 9,
                clickState9: 1,
                'postion2[8]': id,
              });
            } else {
              page.setData({
                flag9: 0,
                clickState9: 0,
                'postion2[8]':0,
              });
            }
            break;
        }


      }
   
    }
  
    console.log("postion2="+page.data.postion2);
    // page.setData({ flag: id });
  },
  returnToServer:function(){
    wx.navigateTo({
      url: 'ServerItem',
    })
  },
  radioChange:function(e){
    var that=this;
    that.setData({
      noLimitTime: e.detail.value
    })
    console.log("chooseShop:" + that.data.noLimitTime + ",t:" + that.data.checked);
  },
  radioChange2: function (e) {
   var that=this;
   if(that.data.checked==false){
    that.setData({
      adjustTime: e.detail.value,
         checked:true
      })
    console.log("chooseShop:" + that.data.adjustTime+",t:"+that.data.checked);
   }else{
     that.setData({
       checked: false,
        adjustTime:0
     })
     console.log("chooseShop:" + that.data.adjustTime + ",f:" + that.data.checked);
   }
  },
  radioChange3: function (e) {
    var that = this;
    that.setData({
      noLimitStore: e.detail.value
    })
    console.log("chooseShop:" + that.data.noLimitStore);
  },
  radioChange4: function (e) {
    var that = this;
    if (that.data.checked == false) {
      that.setData({
        adjustStore: e.detail.value,
        checked: true
      })
      console.log("chooseShop:" + that.data.adjustStore + ",t:" + that.data.checked);
    } else {
      that.setData({
        checked: false,
        adjustStore: 0
      })
      console.log("chooseShop:" + that.data.adjustStore + ",f:" + that.data.checked);
    }
  },
  toServerInfo:function(){
    var that = this;
    var bizContent = {
      "barberId": that.data.barberId,
      "customerId": that.data.customerId,
      "orderRelaton": {
        "noLimitTime": that.data.noLimitTime,
        "adjustTime": that.data.adjustTime,
        "positions": that.data.positions,
    "noLimitStore": that.data.noLimitStore,
        "adjustStore": that.data.adjustStore,
        "storeIds": that.data.storeId
  },
  "amount": that.data.allMoney,
  "barberServiceList": [
    // {
    //   "id": 1,
    //   "service": "haircut",
    //   "onlinePrice": 1500,
    //   "storePrice": 3000,
    //   "barberServiceServiceList": [
    //   ]
    // },
    // {
    //   "id": 2,
    //   "barberId": 1,
    //   "service": "hairdye",
    //   "barberServiceServiceList": [
    //     {
    //       "id": 1,
    //       "barberServiceId": 2,
    //       "service": "简单染",
    //       "onlinePrice": 5800,
    //       "storePrice": 6800
    //     }
    //   ]
    // }
  ]
};
    
    util.weshowRequest(
      api.OrderInsert,
      bizContent,
      'POST').then(res => {
        var a = JSON.stringify(res.data);
        // var a=JSON.parse(res.data);
        console.log('barberList:: ' + a);
        var barberinfo = JSON.stringify(res.data.bizContent.status);
        console.log("this.data" + res.data.bizContent.status);
        that.setData({
          returnStatus: res.data.bizContent.status,

        });
        console.log("-----------returnstatus:------------:"+that.data.returnStatus);
        util.stopRefreshing;
        util.waitUpdate;
      }).catch((err) => {
        console.log('barberlist err :' + err);
        // fail
        util.stopRefreshing;
        // wx.showToast({
        //   title: '正在获取数据…',
        //   icon: 'loading',
        //   duration: 3000,
        //   mask: true
        // });
      });
    wx.navigateTo({
      url: 'FinishInfo?barberId=' + this.data.barberId + "&clickServer=" + this.data.clickServer + "&noLimitTime=" + this.data.noLimitTime + "&adjustTime=" + this.data.adjustTime + "&noLimitStore=" + this.data.noLimitStore + "&adjustStore=" + this.data.adjustStore + "&postion=" + this.data.postion2 + "&storeId=" + this.data.storeId + "&allMoney=" + this.data.allMoney + "&barberName=" + this.data.barberName + "&storeAddress=" + this.data.shopAddress
    })
  },
  chooseStore:function(e){
    var that = this;
      that.setData({
        storeId: e.detail.value,
        checked: true,
      
      })
      console.log("storeid::"+that.data.storeId);
      var storeIdbyInt=parseInt(that.data.storeId)
      var shopAddress = this.data.shopList[storeIdbyInt-1].address;
      console.log("shopaddress" + shopAddress);
      that.setData({
        shopAddress: shopAddress
      })
   console.log("chooseStore:"+that.data.storeId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPostion();
    this.setData({
      barberId: options.barberId,
      clickServer:options.clickServer,
      allMoney:options.allMoney,
      barberName:options.barberName
    })
    this.getStoreList();
    var that=this;
    var pos = that.data.postion;
    for(var i=0;i<that.data.postion.length;i++){
      console.log("加载位置："+pos[i]);
      switch (pos[i]) {
        case 1:
          that.setData({
            status1: 1
          })
          break;
        case 2:
          that.setData({
            status2: 1
          })
          break;
        case 3:
          that.setData({
            status3: 1
          })
          break;
        case 4:
          that.setData({
            status4: 1
          })
          break;
        case 5:
          that.setData({
            status5: 1
          })
          break;
        case 6:
          that.setData({
            status6: 1
          })
          break;
        case 7:
          that.setData({
            status7: 1
          })
          break;
        case 8:
          that.setData({
            status8: 1
          })
          break;
        case 9:
          that.setData({
            status9: 1
          })
          break;
      }
    }

  },
  getStoreList: function () {
    console.log('getStoreList ' + api.StoreList);
    var that = this;
    var bizContent = {
      'start': "0",
      'limit': "3",
      // 'category': "1",
      // 'orderType': "1"
    }
    // util.weshowRequest(api.StoreList, bizContent ,'POST');
    // console.log("调用weshow");
    util.weshowRequest(
      api.StoreList,
      bizContent,
      'POST').then(res => {
        //if (res.data) {}
        console.log("shopList+res");
        console.log(res);
        // success
        that.setData({
          shopList: res.data.bizContent.list
          });
        console.log("this shop:"+this.data.shopList);
       
       
        // that.stopRefreshing();
        //that.waitUpdate();
      }).catch((err) => {
        console.log('shopList  err' + err);
        // fail
        // that.stopRefreshing();
        // wx.showToast({
        //   title: '正在获取数据…',
        //   icon: 'loading',
        //   duration: 3000,
        //   mask: true
        // });
      });
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