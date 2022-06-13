import React from 'react'
import { FaShopify, FaShoppingCart } from "react-icons/fa"
import {
    Container,
    BoxLeft,
    Logo,
    BoxCenter,
    Menu,
    MenuLink,
    BoxRight,
    Title,
    UserLink,
    Logout
} from './NavbarStyle'
import { Badge } from "@material-ui/core"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/apiCalls'

export default function Navbar() {

    const quantity = useSelector(state => state.cart.quantity)

    const user = useSelector((state) => state.user.currentUser)

    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault();
        logout(dispatch, {})
    }

    console.log(quantity)
    return (
        <Container>
            <BoxLeft>
                <Logo><FaShopify /></Logo>
                <Title>Capital Shop</Title>
            </BoxLeft>
            <BoxCenter>
                <Menu>
                    <MenuLink>
                        <Link to='/'>Inicial</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/all'>Produtos</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/categories'>Categorias</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/about'>Sobre</Link>
                    </MenuLink>
                    <MenuLink>
                        <Link to='/contact'>Contato</Link>
                    </MenuLink>
                </Menu>
            </BoxCenter>
            <BoxRight>
                {!user &&
                    <>
                        <UserLink>
                            <Link to='/login'>Entrar</Link>
                        </UserLink>
                        <UserLink>
                            <Link to='/register'>Cadastrar</Link>
                        </UserLink>
                    </>
                }
                {user &&
                    <>
                        <Link to="/cart">
                            <Badge
                                badgeContent={quantity}
                                color="primary"
                                style={{
                                    marginLeft: '10px'
                                }}
                            >
                                <FaShoppingCart />
                            </Badge>
                        </Link>
                        <Logout onClick={handleLogout}>{user && "Sair"}</Logout>
                    </>
                }
            </BoxRight>
        </Container>
    )
}
