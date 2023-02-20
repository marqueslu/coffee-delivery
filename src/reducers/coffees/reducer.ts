import produce from 'immer'
import { Coffee } from '../../data/coffee-list'
import { ActionTypes } from './actions'

interface CoffeesState {
  coffees: Coffee[]
  cartItems: Coffee[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE_TO_CART:
      return produce(state, (draft) => {
        const itemAlreadyExistsInCart = state.cartItems.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id,
        )

        if (itemAlreadyExistsInCart < 0) {
          draft.cartItems.push(action.payload.coffee)
        } else {
          draft.cartItems[itemAlreadyExistsInCart].amount +=
            action.payload.coffee.amount
        }
      })
    case ActionTypes.REMOVE_COFFE_FROM_CART:
      return produce(state, (draft) => {
        const itemsNotRemoved = state.cartItems.filter(
          (coffee) => coffee.id !== action.payload.id,
        )
        draft.cartItems = itemsNotRemoved
      })
    case ActionTypes.INCREASE_COFFEE_AMOUNT:
      return produce(state, (draft) => {
        const coffeeItem = state.cartItems.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )
        draft.cartItems[coffeeItem].amount += 1
      })
    case ActionTypes.DECREASE_COFFEE_AMOUNT:
      return produce(state, (draft) => {
        const coffeeItem = state.cartItems.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )

        if (draft.cartItems[coffeeItem].amount > 1) {
          draft.cartItems[coffeeItem].amount -= 1
        }
      })
    case ActionTypes.RESET_CART:
      return produce(state, (draft) => {
        draft.cartItems = []
      })
    default:
      return state
  }
}
