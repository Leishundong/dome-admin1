import request from 'common/js/request'

export function getList() {
  return request({
    url: '/tables'
  })
}
export function deleteOne(id) {
  return request({
    url: `/tables/${id}`,
    method:'delete'
  })
}

export function editOne(data) {
  return request({
    url: `/tables/${data.id}`,
    method:'put',
    data
  })
}


export function addOne(data) {
  return request({
    url: `/tables`,
    method:'post',
    data
  })
}
