const mongoose = require('mongoose')
const Schema = mongoose.Schema


const trandactionSchema = new Schema({
  amount: Number,
  category: String,
  vendor: String
})


const Trandaction = mongoose.model("Trandaction", trandactionSchema)

module.exports = Trandaction