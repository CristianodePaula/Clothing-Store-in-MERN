const router = require("express").Router()
const User = require("../models/User")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const CryptoJS = require("crypto-js")

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();  // no update a senha também será criptografada
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // $:set pega tudo que está no body e seta(altera)
      },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

//DELETE
router.delete("/:id",  async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("Usuário deletado")
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET ALL USERs
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5) // apresenta usuário mais recente // sem sort() e limit(5) = cinco ultimos
      : await User.find() // ou todos os usuários
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)) // retorna os usuários do ano anterior

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" }, // atribui o mes ao ano em que o usuário foi criado
        },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 }, // agrupa usuários por id, mes e total (somando todos em 1)
        },
      },
    ])
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router
