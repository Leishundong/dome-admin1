import request from 'common/js/request'


export function exlCar(data) {
  return request({
    url: '/car_info/info_import',
    method: 'post',
    data
  })
}


export function getCarList(data) {
  return request({
    url: '/car_info',
    method: 'get',
    params: data
  })
}
