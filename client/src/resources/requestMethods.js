import axios from "axios";

const BASE_URL = "http://localhost:5000/api/" // ur raiz da api 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2JlYjAxYjhhZTQ1YjczYTgzMDUwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc3NjAzNSwiZXhwIjoxNjQ5MDM1MjM1fQ.MoLmFI3DilmA3_MT4ui9-kTwMTWj3kwyehwlMNmiang"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({ // cria uma requisição pública, ao invés de usar localhost
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }, // cabeçalho que armazenará o token
})
