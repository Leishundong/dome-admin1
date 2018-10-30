import request from 'common/js/request'

let pageValue=10;
export function getEmployeeList(page) {
  return request({
    url: '/employees',
    method:'get',
    params:{
      page,
      size:pageValue
    }
  })
}
export function addOneEmployee(storeId,data) {
  return request({
    url: '/employees',
    method:'post',
    params:{storeId},
    data
  })
}
export function deleteOneEmployee(data) {
  return request({
    url: `/employees/batch`,
    method:'patch',
    data
  })
}
export function editOneEmployee(data,id) {
  return request({
    url:`/employees/${id}`,
    method:'patch',
    data
  })
}

