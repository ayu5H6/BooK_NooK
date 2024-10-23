const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
=======
  username: {
    type: String,
    unique: true,
    required: true, // Ensure this is required
  },
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
