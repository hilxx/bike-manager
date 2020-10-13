import { DataSourceItem } from '@/components/Details/Infor'

import {  OrderDetailData } from './data'

type MyPartial<T = OrderDetailData> = {
   [P in keyof T]?: any
}

/* key: 数据的key, val为展示的内容 */
const fetchBaseKeys: MyPartial = {
   mode: '用车模式',
   order_sn: '订单编号',
   bike_sn: '车辆编号',
   user_name: '用户名',
   mobile: '手机号码'
}
const fetchTraceKeys: MyPartial = {
   start_location: '行程起点',
   end_location: '行程终点',
   distance: (val: any): DataSourceItem => ({
      key: '行驶里程',
      value: `${val / 1000}公里`
   }),
}

const procedureDataModel = (o?: OrderDetailData, type?: Object): DataSourceItem[] => {
   if (!o || !type) return Array.prototype
   const list: DataSourceItem[] = []
   // eslint-disable-next-line no-restricted-syntax
   for (const key of Object.keys(type)) {
      const cur = type[key]
      list.push(typeof cur === 'function' ? cur(o[key]) : {
         key: type[key],
         value: o[key]
      })
   }
   return list
}


export const createBaseDataModel = (o?: OrderDetailData): DataSourceItem[] =>
   procedureDataModel(o, fetchBaseKeys)

export const createTraceDataModel = (o?: OrderDetailData): DataSourceItem[] =>
   procedureDataModel(o, fetchTraceKeys)
