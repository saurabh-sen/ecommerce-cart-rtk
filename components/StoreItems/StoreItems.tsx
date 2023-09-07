import { cartItems } from '../../constants/cartItems'
import CartItemCard from './CartItemCard/CartItemCard'

type typeCartItemCard = {
    id: string,
    name: string,
    price: number
}

export default function StoreItems() {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '2rem auto',  
        }}>
            <h1>Shopping Cart</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: '2rem auto',
                gap: '3rem',
            }}>
                {
                    cartItems.map((item: typeCartItemCard) => <CartItemCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                    />)
                }
            </div>
        </section>
    )
}
