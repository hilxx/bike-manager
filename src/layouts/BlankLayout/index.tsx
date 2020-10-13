import React, { useEffect } from 'react'
import { useDispatch } from 'umi'
import { Row, Col } from 'antd'
import RightContent from '@/components/GlobalHeader/RightContent'
import styles from './style.less'

const Layout: React.FC = ({ children }) => {
   const dispatch = useDispatch()
   useEffect(() => {
      if (dispatch) {
         dispatch({
            type: 'user/fetchCurrent',
         });
      }
   }, []);
   return (
      <div className={styles.wrap}>
         <Row className={styles.header} >
            <Col span='16' offset='8'>
               <RightContent />
            </Col>
         </Row>
         <div className={styles.content}>
            {children}
         </div>
      </div>
   )
}

export default Layout;
