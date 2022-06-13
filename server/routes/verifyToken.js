const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token // requer o token criptogrado do header do mongodb 
  if (authHeader) {   // se houver o header de identificação
    const token = authHeader.split(" ")[1] //split entre espaço significa / retornando o numero de id do usuario que é o segundo elemento [1]
      jwt.verify(token, process.env.JWT_SEC, (err, user) => { // se houve token ele será verificado agras a senha secreta de JWT
      if (err) res.status(403).json("Código de verificação inválido") // senao a resposta será invalida 
      req.user = user
      next(); // deixa a função e vai para a rota "/:id"
    })
  } else {
    return res.status(401).json("Autentificação inválida")
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {  // verificará a autorização do token
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {    // se o parametro é de usuario ou admistrador
      next() // continua para a rota, senao: 
    } else {
      res.status(403).json("Não permitido")
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json("Não permitido")
    }
  })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
