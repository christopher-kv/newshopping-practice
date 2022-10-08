import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContex"
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
    id:number
    quantity:number
}

export const CartItem = ({id, quantity}:CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return(
        <Stack direction="horizontal" gap={2}>
            <img src={item.imgUrl} style={{
                width:"125px", height:"75px",objectFit:"cover"
            }} />
            <div className="me-auto">
                <div>
                    {item.name}{quantity > 1 && <span className="text-muted" style={{fontSize:".65rem"}}>
                        {` x${quantity}`}</span>}

                </div>
                <div className="text-muted" style={{ fontSize: "1rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}
