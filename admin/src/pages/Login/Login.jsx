import React, { useState } from 'react'
import {
  Container,
  BoxLogin,
  Form,
  Title,
  Input,
  Button,
  Error,
  NavLink
} from './LoginStyle'
import { login } from "../../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <BoxLogin>
        <Form>
          <Title>ENTRAR</Title>
          <Input
            type='text'
            placeholder="usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleClick}
            disabled={isFetching}
          >LOGIN
          </Button>
          {error && <Error>Algo está errado...</Error>}
          <NavLink>
            <Link to='/register'> Criar nova conta </Link>
          </NavLink>
        </Form>
      </BoxLogin>
    </Container>
  )
}

export default Login