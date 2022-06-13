import { FaSearch } from "react-icons/fa"
import {
  Container,
  Title,
  BoxInput,
  Input,
  Button,
} from './SearchStyle'

const Newsletter = () => {
  return (
    <Container>
      <Title>Qual produto você está procurando? </Title>
      <BoxInput>
        <Input placeholder="Digite o produto" />
        <Button> <FaSearch /> </Button>
      </BoxInput>
    </Container>
  )
}
export default Newsletter