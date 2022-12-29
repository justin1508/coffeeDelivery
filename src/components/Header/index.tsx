import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart';
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
    const { cartQuantity } = useCart();

    return (
        <HeaderContainer>
            <div className='container'>
                <NavLink to='/'>
                    <img src={logoCoffeeDelivery} alt='Copo de café com um foguete do lado das palavras Coffee Delivery' />
                </NavLink>
                <HeaderButtonsContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={20} weight="fill" />
                        Araxá, MG
                    </HeaderButton>
                    <NavLink to='/cart'>
                        <HeaderButton variant='yellow'>
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}