const mongoose = require("mongoose")

const CategorieSchema = new mongoose.Schema(
  {
    categorie: { type: String }
  },
  {
    img:  { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Categorie", CategorieSchema)
