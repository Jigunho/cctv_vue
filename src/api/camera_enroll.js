import axios from 'axios'
// var request = axios.create({
//   baseURL: '165.132.105.41:51908',
//   timeout: 150000
// })
// export function getCameraList() {
//   return request.get({
//     url: '/rule',
//     method: 'get'
//   })
// }
export function getCameraList() {
  return axios.get('http://www.json-generator.com/api/json/get/bOiLYWIHSa?indent=2')
    .then((result) => {
      return result.data
    }).catch((e) => {
      alert(e)
    })
}
