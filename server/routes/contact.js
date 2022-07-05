const Contact = require("../models/Contact")
const { verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()

router.post("/", async (req, res) => {
  const newContact = new Contact(req.body)
  try {
    const contact = await newContact.save()
    res.status(200).json(contact)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const contact = await Contact.find()
    res.status(200).json(contact)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.status(200).json("Menssagem deletada com sucesso")
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router