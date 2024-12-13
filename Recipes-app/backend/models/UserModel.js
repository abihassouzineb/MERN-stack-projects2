import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedRecipes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

export const UserModel = mongoose.model("User", userSchema);

export default UserModel;