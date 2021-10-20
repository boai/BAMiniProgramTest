// base URL
const API_URL_BASE = "https://rig-portal.wbiaotest.cn";

// 请求头
const header = {
  'Content-Type': 'application/json;charset=UTF-8',//content-type': 'application/x-www-form-urlencoded
  'Accept': 'application/json',
  'app-version': '1.0.0',
  'wb-token': '7f31c4f8-6b5e-47d3-87f4-c5bb77bd1295',
  // 'User-Agent': '',
  'wb-appkey': '6D7435752B0B4EF591DC8B9ACFC28F92',
};

// 公共参数
const API_CommonParams = {
  'versionName': '1.1.0',
  'sysVersion': '15.0',
  'os': '5',
  'deviceId': 'f0270df6453a461d89bdbfce2618995e',
  'app': '12',
};

/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */
function request(url, params, method, onSuccess, onFailed) {
  console.log('请求url：' + url);
  wx.showLoading({
    title: "正在加载中...",
  })
  console.log("请求头：", header)
  wx.request({
    url: url,
    data: dealParams(params),
    method: method,
    header: header,
    success: function(res) {
      wx.hideLoading();
      console.log('响应：', res.data);

      if (res.data) {
        /** start 根据需求 接口的返回状态码进行处理 */
        if (res.statusCode == 200) {
          onSuccess(res.data); //request success
        } else {
          onFailed(res.data.message); //request failed
        }
        /** end 处理结束*/
      } else {
        onFailed(res); //failure for other reasons
      }
    },
    fail: function(error) {
      onFailed(error); //failure for other reasons
    }
  })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
  console.log("请求参数:", params)
  return params;
}

// 1.通过module.exports方式提供给外部调用
module.exports = {
  postRequest: post,
  getRequest: get,
}