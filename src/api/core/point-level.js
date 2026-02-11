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
  },

  save(pointLevel) {
    return request({
      url: '/core/admin/pointLevel/save',
      method: 'post',
      data: pointLevel
    })
  },

  getById(id) {
    return request({
      url: '/core/admin/pointLevel/get/' + id,
      method: 'get'
    })
  },

  updateById(pointLevel) {
    return request({
      url: '/core/admin/pointLevel/update',
      method: 'put',
      data: pointLevel
    })
  }
}
