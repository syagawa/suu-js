export type MoldNumArray = {
  array: number[]
  negative: boolean
  decimal_index: number
  is_num_array: boolean
}

export type Core = {
  makeError: Function
  moldNumArray: Function
}


type SuuNumber = MoldNumArray

