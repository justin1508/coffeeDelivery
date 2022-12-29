import { useTheme } from 'styled-components'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/infoWithIcon'

export function Intro() {
    const { colors } = useTheme();

    return (
        <IntroContainer>
            <IntroContent className='container'>
                <div>
                    <section>
                        <IntroTitle size='xl'>
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size='l' color='subtitle' as='h3'>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <InfoWithIcon
                            iconBg={colors['brand-yellow-dark']}
                            icon={<ShoppingCart size={20} weight="fill" />}
                            text='Compra simples e segura'
                        />
                        <InfoWithIcon
                            iconBg={colors['base-text']}
                            icon={<Package size={20} weight="fill" />}
                            text='Embalagem mantém o café intacto'
                        />
                        <InfoWithIcon
                            iconBg={colors['brand-yellow']}
                            icon={<Timer size={20} weight="fill" />}
                            text='Entrega rápida e rastreada'
                        />
                        <InfoWithIcon
                            iconBg={colors['brand-purple']}
                            icon={<Coffee size={20} weight="fill" />}
                            text='O café chega fresquinho até você'
                        />
                    </BenefitsContainer>
                </div>
                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}