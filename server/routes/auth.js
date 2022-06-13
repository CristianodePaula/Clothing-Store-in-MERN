const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),   // criptografa o password com respando no passe secreto
  }); 

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    const doesUserExist = user !== null  // a const "usuário existe" receberá o usuário e verá se seu valor é diferente de nulo
    
    if (doesUserExist) {    // se o valor for diferente de nulo
      const hashedPassword = CryptoJS.AES.decrypt(  
        user.password,
        process.env.PASS_SEC
      ) // a constante hasp ira descripografar a senha em face do passe secreto
    
      const password = hashedPassword.toString(CryptoJS.enc.Utf8) // a cons password irá receber hasp e inserir em "a senha é valida"
      const isValidPassword = password === req.body.password 
      
      if (isValidPassword) {  // quando a senha é valida 
        const accessToken = jwt.sign(  // a const acessT irá autorizar 
          {
            id: user._id,
            isAdmin: user.isAdmin,
          }, 
          process.env.JWT_SEC,
          {expiresIn:"3d"}
        )

        const { password, ...others } = user._doc; // oculta a senha tambem do mongodb 
    
        return res.status(200).json({...others, accessToken});
      }
    }
    res.status(401).send("Usuário ou senha inválidos")
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
})

module.exports = router