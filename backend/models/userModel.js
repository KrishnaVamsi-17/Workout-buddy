const mongoose = require('monggose');

const Schema = mongoose.Schema

const userSchema = new Schema({
  email:{
    type:String,
    required:true
  }
})