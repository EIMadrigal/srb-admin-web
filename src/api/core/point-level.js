import request from '@/utils/request'

export default {
  list() {
    return request({
      url: '/core/admin/pointLevel/getAllPointLevels',
      method: 'get'
    })
  },

  removeById(id) {
    return request({
      url: '/core/admin/pointLevel/remove/' + id,
      method: 'delete'
    })
  }
}
