import request from '@/utils/request'

export function login(data) {
  return request.rcusimService.post({
    url: '/user/login',
    data
  })
}

export function getInfo() {
  return request.rcusimService.get({
    url: '/user/info'
  })
}

export function logout() {
  return request.rcusimService.post({
    url: '/user/logout'
  })
}
