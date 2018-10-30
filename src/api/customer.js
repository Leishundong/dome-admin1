import request from 'common/js/request'

let pageSize=10;
export function getCustomerList(page) {
  return request({
    url: '/customers',
    method:'get',
    params:{
      page,
      size:pageSize
    }
  })
}
export function editOneCustomer(data) {
  return request({
    url:`/customers/${data.id}`,
    method:'put',
    data
  })
}

export function getList(id) {
  return request({
    url:`/customers/${id}`,
    method:'get',
    params:{
      id
    }
  })
}

