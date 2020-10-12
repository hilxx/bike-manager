import orderRequst from '@/services/order'
import { Effect, Reducer } from 'umi';

export interface OrderModelType {
   namespace: 'order'
   state: OrderModelState
   effects: {
      getList: Effect
   }
   reducers: {
      onGetListChangeState: Reducer<OrderModelState>
   }
}

export interface OrderTableItem {
   id: number
   order_sn: string
   bike_sn: string
   user_id: number
   user_name: string
   mobile: string
   distance: number
   total_time: number
   status: 2,
   start_time: string
   end_time: string
   total_fee: number
   user_pay: number
}

export interface OrderModelState {
   page: number
   page_size: number
   total_count: number
   page_count: number
   item_list: Array<OrderTableItem>
}
const Model: OrderModelType = {
   namespace: 'order',
   state: {
      page: 0,
      page_size: 0,
      page_count: 0,
      total_count: 0,
      item_list: []
   },
   effects: {
      *getList(_, { put }) {
         const res = yield orderRequst.getList()
         yield put({
            type: 'onGetListChangeState',
            payload: res
         })
      }
   },
   reducers: {
      onGetListChangeState(state, { payload }) {
         return {
            ...state,
            ...payload
         }
      }
   }
}

export default Model