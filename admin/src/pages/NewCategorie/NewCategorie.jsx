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
} from './NewCategorieStyle'
import { FaPlus } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import { addCategorie } from "../../redux/apiCalls"
import { useDispatch } from "react-redux"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../resources/Firebase"

export default function NewUser() {

  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
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
          const user = { ...inputs, img: downloadURL }
          addCategorie(user, dispatch)
         window.location.replace("/categories")
        })
      }
    )
  }

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Topbar />
        <Title>Nova Categoria</Title>
        <CProduct>
          <Form>
            <Label htmlFor="file">
              <FaPlus /> Imagem da Categoria
            </Label>
            <FileInput
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Label>Nome</Label>
            <Input
              name="categorie"
              type="text"
              placeholder="digite o nome"
              onChange={handleChange}
            />
          </Form>
          <Button onClick={handleClick}> Iserir </Button>
        </CProduct>
      </Wrapper>
    </Container>
  )
}