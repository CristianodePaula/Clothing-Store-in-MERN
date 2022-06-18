import React, { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  CProduct,
  Form,
  FileInput,
  Label,
  Input,
  Button
} from './NewProductStyle'
import { FaPlus } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../resources/Firebase"
import { addProduct } from "../../redux/apiCalls"
import { useDispatch } from "react-redux"

export default function NewProduct() {

  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState([])
  const dispatch = useDispatch()

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
        console.log("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break;
          case "running":
            console.log("Upload is running")
            break;
          default:
        }
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const user = { ...inputs, img: downloadURL, categories: cat }
          addProduct(user, dispatch)
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
        <Title>Novo Produto</Title>
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
              onChange={handleChange}
            />
            <Label>Descrição</Label>
            <Input
               name="desc"
               type="text"
              onChange={handleChange}
            />
            <Label>Preço</Label>
            <Input
              name="price"
              type="number"
              onChange={handleChange}
            />
            <Label>Categorias</Label>
            <Input 
              type="text" 
              placeholder="jeans, skirts" 
              onChange={handleCat} 
            />
            <Label>Disponível</Label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </Form>
          <Button onClick={handleClick}> Registrar </Button>
        </CProduct>
      </Wrapper>
    </Container>
  )
}
