export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: string
}

export type DishListItem = {
  id: string
  name: string
  status: string
}

export type DishPageData = {
  filterText: string
  dishList: DishListItem[]
  showNewForm: boolean
}
