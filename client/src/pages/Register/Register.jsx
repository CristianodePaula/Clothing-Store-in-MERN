import React, {useState} from 'react'
import {
  Container,
  BoxRegister,
  Form,
  Title,
  Input, 
  Button,
  NavLink
} from './RegisterStyle'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  };

  return (
    <Container>
      <BoxRegister>
        <Form onSubmit={handleSubmit}> 
        <Title>CRIAR NOVA CONTA</Title>
          <Input 
           type="text"
           placeholder="Insira seu nome..."
           onChange={(e) => setUsername(e.target.value)}
          />
          <Input
           type="email"
           placeholder="Insira seu email..."
           onChange={(e) => setEmail(e.target.value)}
          />
          <Input
           type="password"
           placeholder="Insira sua senha..."
           onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">CRIAR</Button>
          {error && <span style={{ color: "red", marginTop: "10px" }}>Algo está errado!</span>}
       
          <NavLink>
            <Link to='/login'> Entrar </Link>
          </NavLink>
        </Form>          
      </BoxRegister>
    </Container>
  )
}

export default Register
