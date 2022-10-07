import { Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCardContex"

export function Navbar(): JSX.Element {
  const {openCart, closeCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBS className="bg-white shaddow-sm mb-3">
        <Container>
            <Nav>
            <Nav.Link to="/" as={NavLink}> Home </Nav.Link>
            <Nav.Link to="/store" as={NavLink}> Store </Nav.Link>
            <Nav.Link to="/about" as={NavLink}> About </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (<Button 
                    style={{width: "3rem", height:"3rem"}} variant="outline-primary" className="rounded-circle" 
                    onClick={openCart}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 118.67 122.88" style={{marginTop:"4px"}}><g>
              <path d="M3.92,22.79C1.81,22.79,0,20.98,0,18.77c0-2.11,1.81-3.92,3.92-3.92h5.43c0.1,0,0.3,0,0.41,0c3.62,0.1,6.84,0.8,9.54,2.51 c3.01,1.91,5.22,4.82,6.43,9.15c0,0.1,0,0.2,0.1,0.3l1,4.03h19.02v7.83h-16.8l0,0l8.94,33.67h63.4l8.34-33.67h-9.85v-7.83h13.92 h0.96c2.21,0,3.92,1.81,3.92,3.92c0,0.41-0.11,0.8-0.2,1.21l-10.25,41.3c-0.4,1.81-2.01,3.01-3.81,3.01l0,0H40.09 c1.41,5.22,2.81,8.04,4.72,9.35c2.31,1.51,6.34,1.6,13.07,1.51h0.1l0,0h45.42c2.21,0,3.92,1.81,3.92,3.92 c0,2.21-1.8,3.92-3.92,3.92H57.98l0,0c-8.34,0.1-13.46-0.1-17.59-2.81c-4.22-2.81-6.43-7.64-8.64-16.38l0,0L18.29,28.83 c0-0.1,0-0.1-0.1-0.2c-0.6-2.21-1.6-3.72-3.01-4.52c-1.41-0.91-3.31-1.3-5.52-1.3c-0.1,0-0.2,0-0.3,0L3.92,22.79L3.92,22.79 L3.92,22.79L3.92,22.79z M72.92,1.07l16.26,13.35c1.99,1.6,2.31,4.53,0.71,6.52c-1.6,1.99-4.53,2.31-6.52,0.71l-8.77-7.3l0.01,26.2 c0,2.56-2.07,4.63-4.63,4.63c-2.55,0-4.63-2.07-4.63-4.63l-0.01-26.21l-8.78,7.3c-1.99,1.6-4.91,1.28-6.52-0.71 c-1.6-1.99-1.28-4.91,0.71-6.52L67.02,1.07l0.05-0.04c1.71-1.33,3.94-1.43,5.79,0L72.92,1.07L72.92,1.07L72.92,1.07z M81.49,58.08 c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71c0,1.24-1.23,2.24-2.73,2.24c-1.51,0-2.73-1-2.73-2.24V58.08L81.49,58.08 L81.49,58.08z M65.12,58.08c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71c0,1.24-1.23,2.24-2.73,2.24 c-1.51,0-2.73-1-2.73-2.24V58.08L65.12,58.08L65.12,58.08z M48.76,58.08c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71 c0,1.24-1.23,2.24-2.73,2.24c-1.51,0-2.73-1-2.73-2.24V58.08L48.76,58.08L48.76,58.08z M91.64,103.58c5.33,0,9.65,4.32,9.65,9.65 s-4.32,9.65-9.65,9.65c-5.32,0-9.65-4.32-9.65-9.65S86.32,103.58,91.64,103.58L91.64,103.58L91.64,103.58L91.64,103.58z M49.34,103.58c5.32,0,9.65,4.32,9.65,9.65s-4.32,9.65-9.65,9.65s-9.65-4.32-9.65-9.65S44.01,103.58,49.34,103.58L49.34,103.58 L49.34,103.58L49.34,103.58z"/></g>
              </svg>
              <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
              style={{
                display:"block",
                color:"white",
                width:"1.5rem", 
                height:"1.5rem", 
                position:"relative",
                bottom: +4,
                right: -15,
                transform: "translate(+50% +25%)"
              }}>{cartQuantity}</div>
            </Button>)}          
        </Container>
    </NavbarBS>
  )
}
