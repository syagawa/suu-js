export type MoldNumArray = {
  array: number[]
  negative: boolean
  decimal_index: number
  is_num_array: boolean
  remainder?: any
  system: number | string
  getJSNumber?: Function
  getString?: Function
}

export type CompareObject = {
  small: boolean | null
  large: boolean | null
  equal: boolean | null
}

export type SuuNumber = MoldNumArray
