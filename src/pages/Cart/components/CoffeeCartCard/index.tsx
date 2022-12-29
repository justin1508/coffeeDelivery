import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import expressoTradicional from '../../../../../public/Coffees/expressoTradicional.png'
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={expressoTradicional} />
                <div>
                    <RegularText color='subtitle'>
                        Expresso Tradicional
                    </RegularText>
                    <ActionContainer>
                        <QuantityInput size='small' />
                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionContainer>
                </div>
            </div>
            <p>R$9,90</p>
        </CoffeeCartCardContainer>
    )
}