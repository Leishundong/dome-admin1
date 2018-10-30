import request from 'common/js/request'


export function addRecord(id,empName,empResponseTime,result,supervisorName,supervisorOpinion) {
  return request({
    url:`/records/${id}/record_items`,
    method: 'post',
    data:{
      empName,
      empResponseTime,
      result,
      supervisorName,
      supervisorOpinion
    }
  })
}
//
// export function editRecord(id,data) {
//   return request({
//     url: `/records/${id}`,
//     method: 'patch',
//      data
//   })
// }
