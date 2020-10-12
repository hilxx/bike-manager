import React from 'react'
import { Modal, Form, Select } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import { OpenCityFormData } from './data'
import { OperationMode, Mode } from './config'

export interface OpenCityProps extends Omit<ModalProps, 'onOk'> {
   onOk(o: OpenCityFormData): void
}

const formWrap = {
   labelCol: {
      span: 5
   },
   wrapperCol: {
      span: 10
   },
}

const OpenCity: React.FC<OpenCityProps> = props => {
   const {
      onOk,
      ...restProps
   } = props
   const [formRef] = Form.useForm()

   const onOkHandle = () => {
      const values: OpenCityFormData = formRef.getFieldsValue()
      if (onOk) onOk(values)
   }


   return (
      <Modal
         onOk={onOkHandle}
         {...restProps}
      >
         <Form
            {...formWrap}
            form={formRef}
         >
            <Form.Item label='选择城市' name='name' initialValue='4'>
               <Select >
                  <Select.Option value='1'>北京</Select.Option>
                  <Select.Option value='2'>上海</Select.Option>
                  <Select.Option value='3'>广州</Select.Option>
                  <Select.Option value='4'>深圳</Select.Option>
               </Select>
            </Form.Item>
            <Form.Item label='营运模式' name='op_mode' initialValue='4'>
               <Select >
                  <Select.Option value='1'>{OperationMode[1]}</Select.Option>
                  <Select.Option value='2'>{OperationMode[2]}</Select.Option>
               </Select>
            </Form.Item>
            <Form.Item label='用车模式' name='mode' initialValue='1'>
               <Select>
                  <Select.Option value='1'>{Mode[1]}</Select.Option>
                  <Select.Option value='2'>{Mode[2]}</Select.Option>
               </Select>
            </Form.Item>
         </Form>
      </Modal>
   )
}

OpenCity.defaultProps = {
   title: '开通城市'
}

export default React.memo(OpenCity)