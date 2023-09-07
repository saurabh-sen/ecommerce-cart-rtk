import { useSelector } from "react-redux"
import { RootState } from "../../utils/store"

export default function Navbar() {

    const { items } = useSelector((state: RootState) => state.cart);

    return (
        <nav>
            <ul style={{
                display: 'flex',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: '1rem 2rem',
                backgroundColor: '#e0e0e009'
            }}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">cart - {items.length > 0 && items.length}Items</a>
                </li>
            </ul>
        </nav>
    )
}