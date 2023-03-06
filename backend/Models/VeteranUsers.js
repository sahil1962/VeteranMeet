const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let veteranUserSchema = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  gender: {
    type: String
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"]
  },
  profession: {
    type: String
  },
  relationshipstatus: {
    type: String,
    default: "Single"
  },
  password: {
    type: Number
  },
  hobbies: {
    type: [String],
    default: undefined
  },
  followers: {
    type: [String],
    default: undefined
  },
  following: {
    type: [String],
    default: undefined
  }
}, {
  collection: 'users',
  versionKey: false
})

module.exports = mongoose.model('Users', veteranUserSchema)