import React from 'react'
import {
    Container,
    SubCont,
    Title,
    Paragraph,
    Icon,
    Item
} from './FooterStyle'
import {
    FaCcMastercard,
    FaCcVisa,
    FaCcPaypal,
    FaBtc,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'

const Footer = () => {

    return (
        <Container>
            <SubCont>
                <Title>Quem Somos</Title>
                <Paragraph>A Capital Shop é uma empresa de roupas de alto-padrão
                    que atua a serviço do estilo.
                </Paragraph>
            </SubCont>
            <SubCont>
                <Title>Formas de Pagamento</Title>
                <Paragraph>Aceitamos todos os cartões de crédito</Paragraph>
                <Icon><FaCcMastercard /></Icon>
                <Icon><FaCcVisa /></Icon>
                <Icon><FaCcPaypal /></Icon>
                <Icon><FaBtc /></Icon>
            </SubCont>
            <SubCont>
                <Title>Navegue pela página</Title>
                <Item>Entrar</Item>
                <Item>Cadastrar</Item>
                <Item>Produtos</Item>
                <Item>Categorias</Item>
            </SubCont>
            <SubCont>
                <Title>Redes Sociais</Title>
                <Paragraph>Siga-nos em nossas redes sociais!</Paragraph>
                <Icon><FaFacebook /></Icon>
                <Icon><FaInstagram /></Icon>
                <Icon><FaTwitter /></Icon>
                <Icon><FaYoutube /></Icon>
            </SubCont>
        </Container>
    )
}
export default Footer