import { CartForm } from "./components/CartForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CartContainer } from "./styled";

export function Cart() {
    return (
        <CartContainer className='container'>
            <CartForm />
            <SelectedCoffees />
        </CartContainer>
    )
}