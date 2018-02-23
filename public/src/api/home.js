import http from 'src/utils/http'

export function demo (param) {
  return http({
    url: 'http://127.0.0.1:8081/demo',
    param: param,
    errorPrevent: true
  })
}
