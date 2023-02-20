import { createContext, ReactNode, useReducer } from 'react'
import { toast } from 'react-toastify'
import { Coffee, CoffeeList } from '../data/coffee-list'
import {
  addCoffeeToCartAction,
  decreaseCoffeeAmountAction,
  increaseCoffeeAmountAction,
  removeItemFromCartAction,
  resetCartAction,
} from '../reducers/coffees/actions'
import { coffeesReducer } from '../reducers/coffees/reducer'

interface CoffeesContextType {
  cartItems: Coffee[]
  cartQuantity: number
  addCoffeeToCart: (coffee: Coffee) => void
  removeItemFromcart: (id: number) => void
  increaseCoffeeAmount: (id: number) => void
  decreaseCoffeeAmount: (id: number) => void
  resetCart: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: CoffeeList,
    cartItems: [],
  })

  const { cartItems } = coffeesState

  const cartQuantity = coffeesState.cartItems.length

  function addCoffeeToCart(coffee: Coffee) {
    dispatch(addCoffeeToCartAction(coffee))
  }

  function removeItemFromcart(id: number) {
    dispatch(removeItemFromCartAction(id))
    toast.success('Item removido do carrinho')
  }

  function increaseCoffeeAmount(id: number) {
    dispatch(increaseCoffeeAmountAction(id))
  }

  function decreaseCoffeeAmount(id: number) {
    dispatch(decreaseCoffeeAmountAction(id))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  return (
    <CoffeesContext.Provider
      value={{
        cartQuantity,
        cartItems,
        addCoffeeToCart,
        removeItemFromcart,
        increaseCoffeeAmount,
        decreaseCoffeeAmount,
        resetCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
