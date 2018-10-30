import request from 'common/js/request'

export function getCustomerList(page,size) {
  return request({
    url: '/customer_receptions',
    params: {
      page,
      size
    }
  })
}

export function editCustomerGrade(data,id) {
  return request({
    url: `/customers/${id}`,
    method: 'patch',
    data
  })
}

export function addOneCustomer(employeeId, data) {
  return request({
    url: '/customer_receptions',
    method: 'post',
    params: {
      employeeId
    },
    data
  })
}

// export function editCustomerGrade(data,id) {
//   return request({
//     url: `/customer_receptions/${id}`,
//     method: 'patch',
//    data
//   })
// }


export function editReceptionStatus(receptionStatus,id) {
  return request({
    url: `/customer_receptions/${id}`,
    method: 'patch',
   data:{
      receptionStatus
   }
  })
}

export function takeMask(assignerName, employeeId, id) {
  return request({
    url: `/customer_receptions/${id}/task-assign`,
    method: 'patch',
    params: {
      assignerName, employeeId
    }
  })
}

export function get(id) {
  return request({
    url: `/customer_receptions/${id}`,
    method: 'get',
  })
}

