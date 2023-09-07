import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../utils/slices/cartSlice";
import { RootState } from "../../../utils/store";

type typeCartItemCard = {
    id: string,
    name: string,
    price: number
}

export default function CartItemCard({ name, price, id }: typeCartItemCard) {

    const dispatch = useDispatch();

    const { items } = useSelector((state: RootState) => state.cart);

    function handleAdd() {
        dispatch(addItem({ name, price, id }));
    }

    function handleRemove() {
        dispatch(removeItem(id));
    }

    console.log(items)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid black',
            padding: '3rem',
            backgroundColor: '#e0e0e009',
            borderRadius: '1rem',
            gap: '0.5rem'
        }}>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: 3</p>
            {
                items.some(item => item.id === id)
                    ?
                    <button onClick={handleRemove}>Remove</button>
                    :
                    <button onClick={handleAdd}>Add</button>
            }
        </div>
    )
}