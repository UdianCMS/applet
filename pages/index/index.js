// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  records:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var that = this;

    that.getAllData();
  },
  getAllData :function(){
      var that = this;

      // 格式化数据
      var _url = 'https://work.shiguopeng.cn/ctl/get.php';
      // 发送数据请求
      wx.request({
        url: _url,
        success: function (res) {
          console.log(res.data);
          that.setData({
            records:res.data
          });
        }
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