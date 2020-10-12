import React, { useEffect, useState } from 'react'
import { ConnectProps, connect } from "umi";
import { Button, Space } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { ProColumns } from '@ant-design/pro-table'
import { ConnectState, CityModelState } from '@/models'
import { PaginationProps } from 'antd/lib/pagination';
import { TableListItem, OpenCityFormData } from './data'
import { Mode, OperationMode } from './config'
import OpenCity from './openCity'


export interface CityProps extends ConnectProps {
   cityData: CityModelState
}

const columns: ProColumns<TableListItem>[] = [
   {
      title: '城市ID',
      dataIndex: 'id',
   },
   {
      title: '城市名称',
      dataIndex: 'name',
   },
   {
      title: '用车模式',
      dataIndex: 'mode',
      render: mode => Mode[mode as number]
   },
   {
      title: '营运模式',
      dataIndex: 'op_mode',
      render: mode => OperationMode[mode as number]
   },
   {
      title: '授权加盟商',
      dataIndex: 'franchisee_name',
   },
   {
      title: '城市管理员',
      dataIndex: 'city_admins',
      render(users) {
         return <Space size='small'>
            {(users as Array<{ user_name: string }>).reduce((prev, cur) => `${prev} ${cur.user_name}`, '')}
         </Space>
      }
   },
   {
      title: '城市开通时间',
      dataIndex: 'open_time',
   },
   {
      title: '操作时间',
      dataIndex: 'update_time',
   },
   {
      title: '操作人',
      dataIndex: 'sys_user_name',
   },
]

const City: React.FC<CityProps> = props => {
   const { dispatch, cityData } = props
   const [showOpenCity, setShowOpenCity] = useState(false)
   const closeOpenCity = () => setShowOpenCity(false)
   const onOpenCityOk = (data: OpenCityFormData) => {
      closeOpenCity()
      dispatch!({
         type: 'city/postOpenCity',
         payload: data
      })
   }
   const pagination: PaginationProps = {
      pageSize: cityData.page_size,
      current: cityData.page,
      total: cityData.total_count,
   }
   useEffect(() => {
      dispatch!({
         type: 'city/getList'
      })
   }, [dispatch])

   return (
      <PageContainer>
         <ProTable<TableListItem>
            columns={columns}
            dataSource={cityData.item_list}
            pagination={pagination}
            toolBarRender={() => [
               <Button
                  key='new-item'
                  type='primary'
                  onClick={() => setShowOpenCity(true)}
               >
                  开通
               </Button>
            ]}
         />
         <OpenCity
            visible={showOpenCity}
            onCancel={closeOpenCity}
            onOk={onOpenCityOk}
         />
      </PageContainer>
   )
}

const mapState = (state: ConnectState) => ({
   cityData: state.city
})

export default connect(mapState)(React.memo(City)) 