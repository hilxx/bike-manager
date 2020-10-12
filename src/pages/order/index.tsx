import React, { useEffect } from 'react'
import { ConnectProps, connect } from 'umi'
import { ConnectState, OrderModelState, OrderTableItem } from '@/models'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { ProColumns } from '@ant-design/pro-table'
import { PaginationProps } from 'antd/lib/pagination'

export interface OrderProps extends ConnectProps {
   orderData: OrderModelState
}

const columns: ProColumns<OrderTableItem>[] = [
   {
      title: '订单编号',
      dataIndex: 'order_sn',
   }, {
      title: '车辆编号',
      dataIndex: 'bike_sn',
   }, {
      title: '用户名',
      dataIndex: 'user_name',
   }, {
      title: '手机号',
      dataIndex: 'mobile',
   }, {
      title: '里程',
      dataIndex: 'distance',
   }, {
      title: '行驶时常',
      dataIndex: 'total_time',
   }, {
      title: '状态',
      dataIndex: 'status'
   }, {
      title: '开始时间',
      dataIndex: 'start_time',
   }, {
      title: '结束时间',
      dataIndex: 'end_time',
   }, {
      title: '订单金额',
      dataIndex: 'total_fee'
   }, {
      title: '实付金额',
      dataIndex: 'user_pay',
   }
]

const Order: React.FC<OrderProps> = props => {
   const { dispatch, orderData } = props
   const pagination: PaginationProps = {
      pageSize: orderData.page_size,
      current: orderData.page,
      total: orderData.total_count,
   }
   useEffect(() => {
      dispatch!({
         type: 'order/getList'
      })
   }, [dispatch])

   return (
      <PageContainer>
         <ProTable<OrderTableItem>
            columns={columns}
            pagination={pagination}
            dataSource={orderData.item_list}
         />
      </PageContainer>
   )
}


export default connect((state: ConnectState) => ({ orderData: state.order }))(Order)
