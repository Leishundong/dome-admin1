import request from 'common/js/request'

let pageValue=10;
export function getCarList(page) {
  return request({
    url: '/car_sources',
    method:'get',
    params:{
      page,
      size:pageValue
    }
  })
}
export function addOneCar(data) {
  return request({
    url: '/car_sources',
    method:'post',
    data
  })
}
export function deleteOneCar(id) {
  return request({
    url: `/car_sources/${id}`,
    method:'delete',
    params:{
      id
    }
  })
}
export function editOneCar(data) {
  return request({
    url:`/car_sources/${ data.id}`,
    method:'patch',
    data
  })
}
export function editStatus(id,status) {
  return request({
    url:`/car_sources/${id}`,
    method:'patch',
    data:{
      status
    }
  })
}
