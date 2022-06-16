import React, { useState } from 'react'
import {
  Container,
  Image,
  BoxContact,
  Input,
  TextArea,
  Button
} from './ContactStyle'
import axios from 'axios'

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contacts", {
        name,
        email,
        message,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
    }
  };

  return (
    <Container>
      <Image src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <BoxContact onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome..."
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          type="textarea"
          placeholder="Escreva sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type='submit'>Enviar</Button>
      </BoxContact>
    </Container>
  )
}

