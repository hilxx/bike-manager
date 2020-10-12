import { MenuDataItem, Settings as ProSettings } from '@ant-design/pro-layout'
import { GlobalModelState } from './global'
import { UserModelState } from './user'
import { LoginModelState } from './login'
import { CityModelState } from './city'
import { OrderModelState } from './order'

export interface Loading {
  global: boolean
  effects: { [key: string]: boolean | undefined }
  models: {
    global?: boolean
    menu?: boolean
    setting?: boolean
    user?: boolean
    login?: boolean
  }
}

export interface ConnectState {
  global: GlobalModelState
  loading: Loading
  settings: ProSettings
  user: UserModelState
  login: LoginModelState
  city: CityModelState
  order: OrderModelState
}

export interface Route extends MenuDataItem {
  routes?: Route[]
}

