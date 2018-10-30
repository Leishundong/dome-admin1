import request from 'common/js/request'


export function getStoreList(page,size){
  return request({
    url:'/stores',
    params:{
      page,
      size
    }
  })
}
export function addOneStore(data){
  return request({
    url:'/stores',
    method:'post',
    data
  })
}

// export function deleteSomeStore(ids){
//   return request({
//     url:'/stores',
//     headers:{
//       'Content-Type':'application/x-www-form-urlencoded'
//     },
//     method:'delete',
//     params:{
//       ids
//     }
//   })
// }

export function editOneStore(data,id){
  return request({
    url:`/stores/${id}`,
    method:'patch',
   data
  })
}


export function editStatusStore(data){
  return request({
    // url:`/stores/${id}`,
    url:'/stores/batch',
    method:'patch',
   data
  })
}

export function deleteOneStore(id){
  return request({
    url:`/stores/${id}`,
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    method:'delete',
  })
}

