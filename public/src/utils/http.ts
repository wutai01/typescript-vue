/*
 * axios 官方文档：https://github.com/mzabriskie/axios
*/
import dc from '../api/config/config'
import qs from 'qs'
import axios from 'axios'

interface HandleError{
  prevent: any,
  type: any
}
let defaultConfig = dc
const sCode = defaultConfig.successCode
let sfilter:any = null
let handleError: HandleError = {
  prevent: null,
  type: null
}
axios.defaults.baseURL = defaultConfig.baseURL
axios.interceptors.response.use((response) => {
  let data = response.data
  if (data.code !== sCode) {
    failCallback('提示', data.message)
    return Promise.reject(data)
  }
  if (sfilter) return data.data
  else return data
}, (error) => {
  let response = error.response
  if (response) {
    failCallback('请求失败' + response.status, response.statusText)
  }
  return Promise.reject(error)
})
axios.interceptors.request.use((config) => {
  return config
}, function (error) {
  failCallback('发送的参数错误', error)
  return Promise.reject(error)
})

export default function http ({ url = '',
  params = {},
  method = 'get',
  requestType = 'form',
  responseType = 'json',
  filter = defaultConfig.filter,
  cache = defaultConfig.cache,
  errorPrevent = defaultConfig.errorPrevent,
  errorType = defaultConfig.errorType
}) {
  sfilter = filter
  handleError = {
    prevent: errorPrevent,
    type: errorType
  }
  let config = {
    method: method,
    url: url,
    responseType: responseType,
    params: params
  }

  if (method === 'get') {
    config.url = addTimeStamp(url, cache)
    config['params'] = params
    // (<any>Object).assign(config, {
    //   params: params
    // })
  } else {
    config = handleRequestType(requestType, config, params)
  }
  return new Promise((resolve, reject) => {
    axios(config).then((response) => {
      resolve(response)
    }, (error) => {
      reject(error)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

function failCallback (title: string, msg: string) {
  if (handleError.prevent) return
  switch (handleError.type) {
    case 0:
      (window as any).Shield.vModal.error({
        title: title,
        content: msg
      })
      break
    case 1:
      (window as any).Shield.vMessage.error({
        content: msg,
        duration: 2
      })
      break
  }
}

function addTimeStamp (url: string, cache: any) {
  if (cache) return url
  if (url.indexOf('?') !== -1) {
    url += `&timestamp=${new Date().getTime()}`
  } else {
    url += `?timestamp=${new Date().getTime()}`
  }
  return url
}

function handleRequestType (type: string, config: any, params: any) {
  switch (type) {
    case 'form':
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      config['data'] = qs.stringify(params)
      // Object.assign(config, {
      //   data: qs.stringify(params)
      // })
      return config
    case 'json':
      config.headers = {
        'Content-Type': 'application/json'
      }
      config['data'] = qs.stringify(params)
      // Object.assign(config, {
      //   data: qs.stringify(params)
      // })
      return config
    case 'formData':
      config.headers = {
        'Content-Type': 'multipart/form-data'
      }
      let formData = new FormData()
      for (let i in params) {
        formData.append(i, params[i])
      }
      config['data'] = formData
      // Object.assign(config, {
      //   data: formData
      // })
      return config
  }
}

