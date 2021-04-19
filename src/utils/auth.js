import storage from './storage'

const TokenKey = 'token'

export function getToken() {
  return storage.getItem(TokenKey)
}

export function setToken(token) {
  return storage.setItem(TokenKey, token)
}

export function removeToken() {
  return storage.removeItem(TokenKey)
}
