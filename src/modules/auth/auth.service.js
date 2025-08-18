import { User } from "../../DB/model/user.model.js";
export const register = async (req, res) => {
  try {
    //get data
    const { fullName, email, password, phoneNumber, dob } = req.body;
    console.log("REQ BODY:", req.body);
    //user existence
    // const userExist = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    const userExist = await User.findOne({email});
    if (userExist) {
      throw new Error("email already exist", { cause: 409 });
    }
    //prepare data
  const user = new User({
  fullName,
  email,
  password,
  phoneNumber,
  dob
});
    //create user
     await user.save()
  } catch (error) {
    return res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
};
