import request from 'common/js/request'

export function getEmployeeList(){
  return request({
    url:'/employees',
    params:{
      page:0,
      size:10
    }
  })
}


export function addEmployeeNumber(number,id){
  return request({
    url:`/employees/${id}`,
    method:'patch',
  data:{
      number
  }
  })
}
