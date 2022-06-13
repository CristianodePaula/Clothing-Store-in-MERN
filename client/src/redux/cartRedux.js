// redux responsável pelo carrinho
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({  // cria o slide
  name: "cart", // nome do slice 
  initialState: { // estado inicial
    products: [], // em produtos será um array
    quantity: 0, // em quantidade será 0
    total: 0,
  },
  reducers: {   // cria redutores
    addProduct: (state, action) => {  // adiciona produtos pelo estado anterior criando uma ação: 
      state.quantity += 1  // quantidade será de + 1
      state.products.push(action.payload)  // buscará o produto a ser adicionado
      state.total += action.payload.price * action.payload.quantity // o estado total somara preços e quantidade // retirei * action.payload.quantity
    },
  },
})

export const { addProduct } = cartSlice.actions // exportação que permite adicionar produtos
export default cartSlice.reducer // exportação default


// obs: no reduz normal não é possível fazer estas alterações