import React, { useEffect, useState } from 'react'
import { OrderProps } from '@/pages/order'
import { History, Location } from 'umi'
import { Col, Row } from 'antd'
import Infor from '@/components/Details/Infor'
import orderRequst from '@/services/order'
import { OrderDetailData, OrderDetailResult } from './data'
import { createBaseDataModel, createTraceDataModel } from './helper'

export interface OrderDetailProps {
   location: Location,
   history: History
}

const OrderDetail: React.FC<OrderProps> = props => {
   const { location: { query } } = props
   const { order } = query as { order: string }
   const [requestData, setRequestData] = useState<OrderDetailData>()

   useEffect(() => {
      orderRequst.getOrderDetail(order)
         .then((res: OrderDetailResult) => {
            setRequestData(res.result)
         })
   }, [order])

   // console.log(requestData)

   return (
      <div>
         <Row>
            <Col span={12}>
               <Infor title='基础信息' dataSource={createBaseDataModel(requestData)} />
            </Col>
            <Col span={12}>
               <Infor
                  title='行驶轨迹'
                  dataSource={createTraceDataModel(requestData)}
               />
            </Col>
         </Row>
      </div>
   )
}

export default OrderDetail