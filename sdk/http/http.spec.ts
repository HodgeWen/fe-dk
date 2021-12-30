import  Http  from './http'

const http = new Http({
  baseUrl: '/base',
  timeout: 18000
})

http.get('/abc/:id/:postId', {
  params: {}
})