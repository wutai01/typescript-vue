/*
 * 定义标准的http response格式如下：
 * {code: 0, data: {}, message: '错误信息'}
 * code === 0 时为后台正确处理了请求，并且返回了data参数
 * code !== 0 时为后台没有正确处理请求，返回message错误信息告知request中的相关错误
 * 以下为定义的code值
*/
// 默认设置
const config = {
  // 请求域名
  baseURL: (window as any).oPageConfig.oData.BASE_URL,
  // 请求正确处理的标志符
  successCode: 0,
  // 请求正确处理后是否过滤数据，只返回data
  filter: true,
  // get请求不设置时间戳
  cache: true,
  // 错误提示是否自行处理
  errorPrevent: false,
  // 错误提示框默认形式: 0为对话框, 1为提示框
  errorType: 0
}

export default config
