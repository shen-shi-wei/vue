(function () {
  /**
   * HTTP 请求处理
   */
  var http = Vue.prototype.$http = axios.create({
    baseURL: '',
    timeout: 1000 * 180,
    withCredentials: true
  });
})();