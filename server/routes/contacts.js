const router = require("express").Router()
const Contact = require("../models/Contact")

router.post("/", async (req, res) => {
    try {
      const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      })
      const contact = await newContact.save()
      res.status(200).json(contact)
    } catch (err) {
      res.status(500).json(err)
    }
  })
  
  router.get("/", async (req, res) => {
    try {
      const contact = await Contact.find()
      res.status(200).json(contact)
    } catch (err) {
      res.status(500).json(err)
    }
  })


  router.delete("/:id", async (req, res) => {
    try {
      await Contact.findByIdAndDelete(req.params.id)
      res.status(200).json("Menssagem deletada...")
    } catch (err) {
      res.status(500).json(err)
    }
  })

module.exports = router