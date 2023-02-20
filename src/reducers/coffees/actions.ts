import { Coffee } from '../../data/coffee-list'

export enum ActionTypes {
  ADD_COFFE_TO_CART = 'ADD_COFFE_TO_CART',
  REMOVE_COFFE_FROM_CART = 'REMOVE_COFFE_FROM_CART',
  INCREASE_COFFEE_AMOUNT = 'INCREASE_COFFEE_AMOUNT',
  DECREASE_COFFEE_AMOUNT = 'DECREASE_COFFEE_AMOUNT',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeToCartAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFE_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function removeItemFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function increaseCoffeeAmountAction(id: number) {
  return {
    type: ActionTypes.INCREASE_COFFEE_AMOUNT,
    payload: {
      id,
    },
  }
}

export function decreaseCoffeeAmountAction(id: number) {
  return {
    type: ActionTypes.DECREASE_COFFEE_AMOUNT,
    payload: {
      id,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
