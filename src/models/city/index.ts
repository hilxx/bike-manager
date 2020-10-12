import { Reducer, Effect } from 'umi'
import cityRequset from '@/services/city'
import { message } from 'antd'

export interface CityModelType {
   namespace: 'city'
   state: CityModelState
   effects: {
      getList: Effect
      postOpenCity: Effect
   }
   reducers: {
      onGetListChangeState: Reducer<CityModelState>
   }
}

export interface CityTableListItem {
   city_admins: Array<
      {
         user_name: string
         user_id: number
      }
   >
   franchisee_id: number
   franchisee_name: string
   id: number
   mode: number
   name: string
   op_mode: number
   open_time: string
   sys_user_name: number
   update_time: string
   key: number
}

export interface CityModelState {
   item_list: Array<CityTableListItem>
   page: number
   page_count: number
   page_size: number
   total_count: number
}

const Model: CityModelType = {
   namespace: 'city',
   state: {
      page: 0,
      page_count: 0,
      page_size: 0,
      total_count: 0,
      item_list: [],
   },
   effects: {
      *getList(_, { put }) {
         const res: CityModelState = yield cityRequset.getList()
         yield put({
            type: 'onGetListChangeState',
            payload: res
         })
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      *postOpenCity({ payload }, { put }) {
         const res = yield cityRequset.openCity(payload)
         message.success(res)
         yield put({
            type: 'getList',
         })
      }
   },
   reducers: {
      onGetListChangeState(state, { payload }) {
         return {
            ...state,
            ...payload
         } as CityModelState
      }
   }
}


export default Model