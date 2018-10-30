import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


const historyPage='History-Page';

export function getHistoryPage() {
  return sessionStorage.getItem(historyPage);
}

export function setHistoryPage(page) {
  sessionStorage.setItem(historyPage,page);
}
export function removeHistoryPage() {
  sessionStorage.removeItem(historyPage);
}

