import request from 'common/js/request'


export function getInsuranceList(page,size) {
  return request({
    url: '/insurance_willingnesses',
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


export function takeMask(assignerName, employeeId, id) {
  return request({
    url: `/insurance_willingnesses/${id}/assign`,
    method: 'patch',
    params: {
      assignerName, employeeId
    }
  })
}

export function editInsuranceStatus(status,id) {
  return request({
    url: `/insurance_willingnesses/${id}`,
    method: 'patch',
   data:{
      status
   }
  })
}

export function getInsurance(id) {
  return request({
    url: `/insurance_willingnesses/${id}`,
    method: 'get',
  })
}




