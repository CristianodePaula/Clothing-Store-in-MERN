const Categorie = require("../models/Categorie")
const { verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategorie = new Categorie(req.body)
  try {
    const savedCart = await newCategorie.save()
    res.status(200).json(savedCart)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Categorie.findByIdAndDelete(req.params.id)
    res.status(200).json("Categoria deletada com sucesso")
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/", async (req, res) => {
  try {
    const categorie = await Categorie.find()
    res.status(200).json(categorie)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router