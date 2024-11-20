export type Dish = {
  id: string
  name: string
  status: Status
  diet: Diet
}

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
}

type Status = 'Want to Try' | 'Recommended' | 'Do Not Recommend'
type Diet = 'Vegetarian' | 'Pescetarian' | 'Keto' | ''
