import request from 'common/js/request'


let pageValue=2;
export function getStoreList(page){
  return request({
    url:'/stores',
    params:{
      page,
      size:pageValue
    }
  })
}
export function addOneStore(params){
  return request({
    url:'/stores',
    method:'post',
    params
  })
}

export function deleteSomeStore(ids){
  return request({
    url:'/stores',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    method:'delete',
    params:{
      ids
    }
  })
}

export function editOneStore(params){
  return request({
    url:`/stores/${params.id}`,
    method:'put',
    params
  })
}


export function editStatusStore(id,status){
  return request({
    url:`/stores/${id}`,
    method:'patch',
    params:{
      status
    }
  })
}

