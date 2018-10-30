/**
 * Created by jiachenpan on 16/11/18.
 */

export  function timeZero(val){
  return val<10?`0${val}`:val;
}

export function filterAttr(obj,flag){
  let newObj={};
  flag=flag?flag:[];
  Object.keys(obj).forEach((key)=>{
    if(key.indexOf('__')!==-1||flag.indexOf(key)!==-1)return;
    newObj[key]=obj[key];
    if(typeof obj[key]==='object'&&obj[key]&&!(obj[key] instanceof Array)){
      newObj[key]=filterAttr(obj[key],flag)
    }
  });
  return newObj;
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function searchFormat(){
  let searchIndex=location.hash.indexOf('?')+1;
  let search=location.hash.slice(searchIndex);
  let arr=search.split('&');
  let list={};
  arr.forEach((item)=>{
    let listArr=item.split('=');
    list[listArr[0]]=listArr[1];
  });
  return list;
}
