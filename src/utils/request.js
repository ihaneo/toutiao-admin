/* 
基于axios请求模块封装 npm i axios
*/
import axios from "axios";
// 创建axios示例用request接收
const request = axios.create({
  baseURL: "http://ttapi.research.itcast.cn" //请求所用路径的基础部分 (服务端数据来源)
});
//导出request到全局 谁使用谁来调 被曝光在request.js文件接口 只需import XXX from 'request.js'
export default request;
