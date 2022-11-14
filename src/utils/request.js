import axios from 'axios'
import md5 from 'md5'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    const {icode, time } = getIcode()
    config.headers.icode = icode
    config.headers.codetype = time
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

const getIcode = () => {
  const time = parseInt(Date.now() / 1e3)
  const s = time + "LGD_Sunday-1991-12-30"
  return {
    icode: md5(s),
    time: time
  }
}

export default service
