import { createContext, ReactNode, useContext, useState } from "react"

type ShoppingCardProviderProps = {
  children: ReactNode
}
type ShoppingCardContext = {
  openCart: () => void
  closeCart: () => void

  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void

  cartQuantity: number
  cartItems: CartItem[]
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCardContext = createContext({} as ShoppingCardContext)

export const useShoppingCart = () => {
  return useContext(ShoppingCardContext)
}
export const ShoppingCardProvider = ({ children }:ShoppingCardProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  function getItemQuantity(id:number){
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null){
        return [...currItems, {id, quantity:1}]
      }
      return currItems.map(item => {
        if (item.id === id){
          return { ...item, quantity: item.quantity + 1}
        }
        return item
      })
    }

    )
  }
  function decreaseCartQuantity(id: number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1){
        return currItems.filter(item => item.id !== id)
      }
      return currItems.map(item => {
        if (item.id === id){
          return { ...item, quantity: item.quantity - 1}
        }
        return item
      })
    }

    )
  }
  function removeFromCart(id: number){
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }
  const openCart  = () => setIsOpen(false)
  const closeCart  = () => setIsOpen(true)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  return (
    <ShoppingCardContext.Provider value={{openCart, closeCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity}}>
      { children }
    </ShoppingCardContext.Provider>
  )
}

