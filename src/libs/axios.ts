import store from '@/store'
import axios, { AxiosRequestConfig } from 'axios'

class HttpRequest {
  queue: any
  baseUrl: any
  // eslint-disable-next-line no-undef
  constructor(baseUrl:any) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      withCredentials: false
    }
    return config
  }

  distroy (url:string) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors (instance:any, url:any) {
    // 请求拦截
    instance.interceptors.request.use((config: { params: any; url: string | string[] }) => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
        store.commit('setLoading', true)
      }
      config.params = { ...config.params,icode: '1D358171B8D005AE' }
      if (!config.url.includes('/signin')) {
        // config.headers.Authorization = getToken()
      }
      this.queue[url] = true
      return config
    }, (error: any) => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use((res: { data: any; status: any }) => {
      setTimeout(() => {
        store.commit('setLoading', false) 
      }, 2300)
      this.distroy(url)
      const { data, status } = res
      return { data, status }
    }, (error: { response: { status: number; data: { message: any } } }) => {
      this.distroy(url)
      if (!error.response) {
        // Message.error('连接服务器异常')
      } else if (error.response.status === 401) {
        // removeToken()
        // Message.error(error.response.data.message)
        window.location.href = '#/signin'
      } else if (error.response.data)
      // 对响应错误做点什么
     
      // eslint-disable-next-line brace-style
      { return Promise.reject(error.response.data.message) }
    })
  }

  request (options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
