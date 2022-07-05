import { useState } from "react"
import {
  Container,
  Wrapper,
  Title,
  CProduct,
  Form,
  Label,
  FileInput,
  Input,
  Button
} from './EditProductStyle'
import { FaPlus } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { updateProduct } from '../../redux/apiCalls'
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../resources/Firebase"

export default function EditProduct() {

  const location = useLocation();
  const productId = location.pathname.split("/")[2]

  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState([])
  const dispatch = useDispatch()

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  )
  
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleCat = (e) => {
    setCat(e.target.value.split(","))
  }

  const handleClick = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload esta a " + progress + "% da conclusão")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload pausando")
            break;
          case "running":
            console.log("Upload enviando")
            break;
          default:
        }
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat  }
          updateProduct(product, dispatch)
          window.location.replace("/products")
        })
      }
    )
  }

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Topbar />
        <Title>Editar Produto</Title>
        <CProduct>
          <Form>
            <Label htmlFor="file">
              <FaPlus /> Adicione uma imagem
            </Label>
            <FileInput
              type="file"
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Label>Titulo</Label>
            <Input
              name="title"
              type="text"
              placeholder={product.title}
              onChange={handleChange}
            />
            <Label>Descrição</Label>
            <Input
              name="desc"
              type="text"
              placeholder={product.desc}
              onChange={handleChange}
            />
            <Label>Preço</Label>
            <Input
              name="price"
              type="number"
              placeholder={product.price}
              onChange={handleChange}
            />
            <Label>Categoria</Label>
            <Input
              type="text"
              placeholder={product.categories}
              onChange={handleCat}
            />
            <Label>Disponível</Label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <Button onClick={handleClick}> Atualizar </Button>
          </Form>
        </CProduct>
      </Wrapper>
    </Container>
  )
}