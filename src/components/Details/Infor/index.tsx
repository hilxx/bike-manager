import React from 'react'
import { Col, Row } from 'antd'
// eslint-disable-next-line import/no-unresolved
import styles from './index.less';

export interface DataSourceItem {
   key: string
   value: string
}

export interface InforProps {
   dataSource: DataSourceItem[]
   title: string
}

const Infor: React.FC<InforProps> = props => {
   const { dataSource, title } = props
   return (
      <div className={styles.wrap}>
         <h2>{title}</h2>
         <ol>
            {
               dataSource.map(data => (
                  <li key={data.key}>
                     <Row>
                        <Col className={styles['item-name']} span={2}>{data.key}</Col>
                        <Col offset={2} className={styles['item-value']}>{data.value}</Col>
                     </Row>
                  </li>
               ))
            }
         </ol>
      </div>
   )
}

export default Infor