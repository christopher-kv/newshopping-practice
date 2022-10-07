import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContex"
import { formatCurrency } from "../utils/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string

}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Card id={id.toString()}>
        <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover"}}/>
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between aling-itens-baseline mb-4">
                <span className="fs-4">{name}</span>
                <span className="ms-2 text-mutted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0? (<Button className="w-100" onClick={() => increaseCartQuantity(id)}>+Add to Cart</Button>):(<div className="d-flex aling-items-center flex-column" style={{gap:".5rem"}}>
                    <div className="d-flex aling-items-center justify-content-center" style={{gap:".5rem"}}>

                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>

                            <div><span className="fs-3">{quantity}</span>in cart</div>

                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                </div>)}
            </div>
        </Card.Body>
    </Card>
  )
}