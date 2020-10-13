import request, { responseInterceptor } from '@/utils/request'
import { OpenCityParams } from './data'

export default responseInterceptor({
   async getList() {
      const res = await request('/open_city')
      return res
   },
   async openCity(data: OpenCityParams) {
      const res = await request('/city/open', {
         data,
      })
      return res 
   }
})

export * from './data'