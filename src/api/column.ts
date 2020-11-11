import axios from '../libs/api.request'

export const columnsList = (params: object) => {
  return axios.request({
    url: '/api/columns',
    params,
    method: 'get'
  })
}
