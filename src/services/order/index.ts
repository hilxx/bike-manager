import request, { responseInterceptor } from '@/utils/request'

export default responseInterceptor({
   async getList() {
      const res: any = await request('/order/list')
      return res
   },
   async getOrderDetail(orderId: string) {
  
      const res: any = await request('/order/detail', {
         data: {
            params: {
               orderId
            }
         }
      })
      return res
   }
})