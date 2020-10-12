interface HasKey {
   id?: any
   key?: any
}

export const addKey = <T extends HasKey>(list: T[]): T[] =>
   list.map((item, index) => {
      // eslint-disable-next-line no-param-reassign
      item.key = item.id ? item.id : index
      return item
   })