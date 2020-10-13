export interface OrderDetailResult {
   code: string
   msg: string
   result: OrderDetailData
}

export interface OrderDetailData {
   area: Array<{
      lon: string
      lat: sting
      ts: any
   }>
   area_list: any
   bike_gps: string
   bike_sn: string
   city_id: number
   distance: number
   end_location: string
   end_time: number
   mobile: string
   mode: number
   npl_list: Array<{
      city_id: numebr
      create_time: number
      creator_name: string
      id: 8265
      map_point: string
      map_point_array: string[]
      map_status: number
      name: string
      status: number
      type: number
   }>
   order_sn: string
   position_list: Array<{
      lon: string
      lat: sting
   }>
   start_location: string
   start_time: number
   status: number
   total_time: number
   user_name: string
}